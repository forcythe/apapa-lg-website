/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";

import { rowData, Row, Role } from "./rowByRoleOrgChart.data";
import NodeBox from "./NodeBox";

import { useTranslations } from "next-intl";

/* ------------------------------------------------------------------ */
/*  Layout constants (px)                                              */
/*  Vertical drops from a branch to a node are kept long (~100px) so   */
/*  the parent -> child relationship is clearly readable.              */
/* ------------------------------------------------------------------ */
const NODE_WIDTH = 170;
const CHART_WIDTH = 1360;
const CHART_CENTER_X = CHART_WIDTH / 2; // Executive Chairman sits dead-centre
const CHART_HEIGHT = 2200;

const ROW_TOP: Record<number, number> = {
  1: 40,
  2: 380,
  3: 650,
  4: 1210,
  5: 1610,
};

/* The Council Manager sits on its own lower level, centered on the same
   vertical axis as the Executive Chairman but clearly BELOW the top-level
   leadership branch (Vice Chairman / SLG / Legislative Arm).
   The Clerk of the House also drops down, to just above the Department row.
   Area Officers are the lowest-ranked role, so they sit on their own row
   BELOW the units (Special Units + Procurement). */
const CM_TOP = 840;
const CLERK_TOP = 1150; // on the same row as the Department Heads (ROW_TOP[4]), just a touch higher
const AREA_OFFICERS_TOP = 1920; // below the units row (ROW_TOP[5])
const CM_BAR_Y = 1020; // horizontal branch feeding the CM's two departments
const CM_SPINE_Y = CM_TOP + 70; // spine starts inside the CM box (no gap below)
// the drop splits at its middle into a left arm (Admin) and a right arm (Finance)
const CM_FORK_Y = (CM_BAR_Y + (ROW_TOP[4] - 32)) / 2;

const BAR_Y = {
  level2: 250, // horizontal split under Executive Chairman
  departments: 1080, // common-access bar above Department Heads (left of Works)
  units: 1480, // broader lower horizontal branch
  specialUnits: 1520, // distribution line for the five Special Units only
};

/* x position of every level-1/2/3 node (their centres).
   Vice Chairman (130) and Legislative Arm (1230) are equidistant from the
   Executive Chairman axis (680), so both branch lengths are balanced. */
const ROLE_X: Record<string, number> = {
  "executive-chairman": CHART_CENTER_X,
  "vice-chairman": 130,
  "council-manager": CHART_CENTER_X,
  "s-l-g": 830,
  "legislative-arm": 1230,
  "supervisors-and-special-advisers": 830,
  "clerk-of-the-house": 1265,
};

/* The nine Department Heads still lap (smaller centre-to-centre spacing
   than the box width) so they all fit the screen width. The five Special
   Units on the units row are spread out with clear spacing instead. */
const DEPT_SPACING = 123;
const SPECIAL_SPACING = 195;
const DEPARTMENT_XS = Array.from(
  { length: 9 },
  (_, i) => 90 + i * DEPT_SPACING
);
const CM_FORK_X = (DEPARTMENT_XS[0] + DEPARTMENT_XS[1]) / 2; // over the two CM depts

/* Area Officers (lowest-ranked, on their own row below the units) and
   Procurement (right) keep their own x positions and never overlap. */
const AREA_OFFICERS_X = 100;
const PROCUREMENT_X = 1270;
const SPECIAL_UNIT_XS = Array.from(
  { length: 5 },
  (_, i) => 295 + i * SPECIAL_SPACING
);
const UNIT_XS = [AREA_OFFICERS_X, ...SPECIAL_UNIT_XS, PROCUREMENT_X];

/* Area Officers (left) and Procurement (right) are independent branches.
   The five Special Units sit between them and are grouped on their own
   distribution line. */
const SPECIAL_GROUP_CENTER = (SPECIAL_UNIT_XS[0] + SPECIAL_UNIT_XS[SPECIAL_UNIT_XS.length - 1]) / 2;

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  arrow?: boolean;
}

const getXForRole = (rowId: number, roleId: string, index: number): number => {
  if (rowId === 4) return DEPARTMENT_XS[index];
  if (rowId === 5) return UNIT_XS[index];
  return ROLE_X[roleId];
};

const RowByRoleOrgChart: React.FC = () => {
  const t = useTranslations("Government.rowData");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  /* Scale the whole chart down so the full organogram fits the available
     desktop width (no horizontal scroll). Below a phone/tablet threshold the
     chart keeps its natural size and scrolls horizontally instead. */
  useEffect(() => {
    const parent = wrapperRef.current?.parentElement;
    if (!parent) return;
    const update = () => {
      const avail = parent.clientWidth;
      if (avail > 0) {
        setScale(avail < 640 ? 1 : Math.min(1, avail / CHART_WIDTH));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Connectors derived from the data hierarchy, not from the DOM.      */
  /*  SVG is rendered behind the node boxes (zIndex 0 < 1) and every     */
  /*  arrow terminates exactly on the top edge of the destination node.  */
  /* ------------------------------------------------------------------ */
  const lines: Line[] = [];

  // 1. Executive Chairman -> horizontal split
  lines.push({
    x1: ROLE_X["executive-chairman"],
    y1: ROW_TOP[1] - 32,
    x2: ROLE_X["executive-chairman"],
    y2: BAR_Y.level2,
  });
  lines.push({
    x1: ROLE_X["vice-chairman"],
    y1: BAR_Y.level2,
    x2: ROLE_X["legislative-arm"],
    y2: BAR_Y.level2,
  });
  // vertical drops into each Level-2 node (touching the node circle).
  // Council Manager is NOT one of them — it sits below the leadership bar.
  ["vice-chairman", "s-l-g", "legislative-arm"].forEach((id) => {
    lines.push({
      x1: ROLE_X[id],
      y1: BAR_Y.level2,
      x2: ROLE_X[id],
      y2: ROW_TOP[2] - 32,
      arrow: true,
    });
  });

  // Council Manager branch (independent, central, BELOW the top-level bar):
  //  - The Executive Chairman's central axis continues down to the CM box.
  //  - Below the CM box the central spine continues down toward the unit row.
  //  - From that vertical a horizontal branch extends LEFT, feeding the two
  //    departments that belong to the CM: Admin & HR and Finance & Accounts.
  lines.push({
    x1: ROLE_X["council-manager"],
    y1: BAR_Y.level2,
    x2: ROLE_X["council-manager"],
    y2: CM_TOP - 32,
    arrow: true,
  });
  // central spine below the Council Manager (continues to the broader branch)
  lines.push({
    x1: ROLE_X["council-manager"],
    y1: CM_SPINE_Y,
    x2: ROLE_X["council-manager"],
    y2: BAR_Y.units,
  });
  // horizontal branch extending to the LEFT toward Admin & HR + Finance & Accounts
  lines.push({
    x1: CM_FORK_X,
    y1: CM_BAR_Y,
    x2: ROLE_X["council-manager"],
    y2: CM_BAR_Y,
  });
  // a single line drops down from the branch, centred over the two departments
  lines.push({
    x1: CM_FORK_X,
    y1: CM_BAR_Y,
    x2: CM_FORK_X,
    y2: CM_FORK_Y,
  });
  // at its middle it splits into a left arm and a right arm...
  lines.push({
    x1: CM_FORK_X,
    y1: CM_FORK_Y,
    x2: DEPARTMENT_XS[0],
    y2: CM_FORK_Y,
  });
  lines.push({
    x1: CM_FORK_X,
    y1: CM_FORK_Y,
    x2: DEPARTMENT_XS[1],
    y2: CM_FORK_Y,
  });
  // ...then each arm goes straight down to its department (Admin left, Finance right)
  [DEPARTMENT_XS[0], DEPARTMENT_XS[1]].forEach((x) => {
    lines.push({
      x1: x,
      y1: CM_FORK_Y,
      x2: x,
      y2: ROW_TOP[4] - 32,
      arrow: true,
    });
  });

  // 2. SLG -> Supervisors  (direct vertical)
  lines.push({
    x1: ROLE_X["s-l-g"],
    y1: ROW_TOP[2],
    x2: ROLE_X["supervisors-and-special-advisers"],
    y2: ROW_TOP[3] - 32,
    arrow: true,
  });

  // 3. Legislative Arm -> Clerk of the House (straight L-shaped drop:
  //    down the legislative-arm column, across to the clerk column, then
  //    straight down into the clerk box on the same row as the heads).
  lines.push({
    x1: ROLE_X["legislative-arm"],
    y1: ROW_TOP[2],
    x2: ROLE_X["legislative-arm"],
    y2: BAR_Y.departments,
  });
  lines.push({
    x1: ROLE_X["legislative-arm"],
    y1: BAR_Y.departments,
    x2: ROLE_X["clerk-of-the-house"],
    y2: BAR_Y.departments,
  });
  lines.push({
    x1: ROLE_X["clerk-of-the-house"],
    y1: BAR_Y.departments,
    x2: ROLE_X["clerk-of-the-house"],
    y2: CLERK_TOP - 32,
    arrow: true,
  });

  // 4. Supervisors -> department common-access bar (merge with the spine)
  lines.push({
    x1: ROLE_X["supervisors-and-special-advisers"],
    y1: ROW_TOP[3],
    x2: ROLE_X["supervisors-and-special-advisers"],
    y2: BAR_Y.departments,
  });

  // 5. Department common-access bar + long drops into each department head.
  //    The bar starts at Works & Infrastructure (index 2): Admin & HR and
  //    Finance & Accounts are NOT fed by this bar — they belong to the
  //    Council Manager branch drawn above.
  lines.push({
    x1: DEPARTMENT_XS[2],
    y1: BAR_Y.departments,
    x2: DEPARTMENT_XS[DEPARTMENT_XS.length - 1],
    y2: BAR_Y.departments,
  });
  DEPARTMENT_XS.slice(2).forEach((x) => {
    lines.push({
      x1: x,
      y1: BAR_Y.departments,
      x2: x,
      y2: ROW_TOP[4] - 32,
      arrow: true,
    });
  });

  // 7. BROADER LOWER BRANCH
  //    Area Officers (left, lowest-ranked, on its own row BELOW the units)
  //    and Procurement (right) each have their OWN independent drop. The
  //    five Special Units are grouped on a separate distribution line that
  //    is fed from the broader branch.
  lines.push({
    x1: AREA_OFFICERS_X,
    y1: BAR_Y.units,
    x2: PROCUREMENT_X,
    y2: BAR_Y.units,
  });

  // 7a. Area Officers: independent drop, continues down past the units row
  lines.push({
    x1: AREA_OFFICERS_X,
    y1: BAR_Y.units,
    x2: AREA_OFFICERS_X,
    y2: AREA_OFFICERS_TOP - 32,
    arrow: true,
  });

  // 7b. Head, Procurement Unit: independent drop
  lines.push({
    x1: PROCUREMENT_X,
    y1: BAR_Y.units,
    x2: PROCUREMENT_X,
    y2: ROW_TOP[5] - 32,
    arrow: true,
  });

  // 7c. Special Units group: feed from broader branch to their own line
  lines.push({
    x1: SPECIAL_GROUP_CENTER,
    y1: BAR_Y.units,
    x2: SPECIAL_GROUP_CENTER,
    y2: BAR_Y.specialUnits,
  });
  lines.push({
    x1: SPECIAL_UNIT_XS[0],
    y1: BAR_Y.specialUnits,
    x2: SPECIAL_UNIT_XS[SPECIAL_UNIT_XS.length - 1],
    y2: BAR_Y.specialUnits,
  });
  SPECIAL_UNIT_XS.forEach((x) => {
    lines.push({
      x1: x,
      y1: BAR_Y.specialUnits,
      x2: x,
      y2: ROW_TOP[5] - 32,
      arrow: true,
    });
  });

  return (
    <div
      ref={wrapperRef}
      className="mx-auto overflow-hidden"
      style={{ width: CHART_WIDTH * scale, height: CHART_HEIGHT * scale }}
    >
      <div
        className="relative"
        style={{
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <svg
          className="absolute left-0 top-0"
          width={CHART_WIDTH}
          height={CHART_HEIGHT}
          style={{ zIndex: 0 }}
        >
        <defs>
          <marker
            id="arrowDown"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#000" />
          </marker>
        </defs>
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#000"
            strokeWidth={2}
            markerEnd={l.arrow ? "url(#arrowDown)" : undefined}
          />
        ))}
      </svg>

      {rowData.map((row: Row) =>
        row.roles.map((role: Role, index: number) => {
          if (role.isSpacer) return null;
          const x = getXForRole(row.rowId, role.id, index);
          if (x == null) return null;
          const top =
            role.id === "council-manager"
              ? CM_TOP
              : role.id === "clerk-of-the-house"
                ? CLERK_TOP
                : role.id === "area-officers"
                  ? AREA_OFFICERS_TOP
                  : ROW_TOP[row.rowId];
          return (
            <div
              key={role.id}
              className="absolute"
              style={{
                left: x - NODE_WIDTH / 2,
                top,
                zIndex:
                  row.rowId === 4 || row.rowId === 5 ? 1 + index : 1,
              }}
            >
              <NodeBox
                role={t(role.role)}
                rowId={row.rowId}
                roleId={role.id}
                image={role.img}
              />
            </div>
          );
        })
      )}
      </div>
    </div>
  );
};

export default RowByRoleOrgChart;
