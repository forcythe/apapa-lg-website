/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

import { rowData, Row, Role } from "./rowByRoleOrgChart.data";
import NodeBox from "./NodeBox";

import { useTranslations } from "next-intl";

/* ------------------------------------------------------------------ */
/*  Layout constants (px)                                              */
/*  Vertical drops from a branch to a node are kept long (~100px) so   */
/*  the parent -> child relationship is clearly readable.              */
/* ------------------------------------------------------------------ */
const NODE_WIDTH = 188;
const CHART_WIDTH = 1400;
const CHART_CENTER_X = 700;
const CHART_HEIGHT = 1800;

const ROW_TOP: Record<number, number> = {
  1: 40,
  2: 380,
  3: 650,
  4: 1030,
  5: 1490,
};

const BAR_Y = {
  level2: 250, // horizontal split under Executive Chairman
  departments: 900, // common-access bar above Department Heads
  units: 1360, // broader lower horizontal branch
  specialUnits: 1400, // distribution line for the five Special Units only
};

/* x position of every level-1/2/3 node (their centres) */
const ROLE_X: Record<string, number> = {
  "executive-chairman": CHART_CENTER_X,
  "vice-chairman": 200,
  "council-manager": CHART_CENTER_X,
  "s-l-g": 960,
  "legislative-arm": 1220,
  "supervisors-and-special-advisers": 960,
  "clerk-of-the-house": 1220,
};

/* Department Heads and the five Special Units lap on top of one another
   (smaller centre-to-centre spacing than the box width) so all nine fit
   the screen without horizontal scrolling. Boxes to the right sit on top. */
const DEPT_SPACING = 151;
const SPECIAL_SPACING = 136;
const DEPARTMENT_XS = Array.from(
  { length: 9 },
  (_, i) => 96 + i * DEPT_SPACING
);

/* Area Officers (left) and Procurement (right) keep their own spacing and
   never overlap; only the five Special Units in between are lapped. */
const AREA_OFFICERS_X = 210;
const PROCUREMENT_X = 1190;
const SPECIAL_UNIT_XS = Array.from(
  { length: 5 },
  (_, i) => 428 + i * SPECIAL_SPACING
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
  // vertical drops into each Level-2 node (touching the node circle)
  ["vice-chairman", "council-manager", "s-l-g", "legislative-arm"].forEach(
    (id) => {
      lines.push({
        x1: ROLE_X[id],
        y1: BAR_Y.level2,
        x2: ROLE_X[id],
        y2: ROW_TOP[2] - 32,
        arrow: true,
      });
    }
  );

  // 2. SLG -> Supervisors  (direct vertical)
  lines.push({
    x1: ROLE_X["s-l-g"],
    y1: ROW_TOP[2],
    x2: ROLE_X["supervisors-and-special-advisers"],
    y2: ROW_TOP[3] - 32,
    arrow: true,
  });

  // 3. Legislative Arm -> Clerk of the House (isolated vertical)
  lines.push({
    x1: ROLE_X["legislative-arm"],
    y1: ROW_TOP[2],
    x2: ROLE_X["clerk-of-the-house"],
    y2: ROW_TOP[3] - 32,
    arrow: true,
  });

  // 4. Council Manager central spine: runs from its own box all the way
  //    down past the department row and terminates on the broader unit
  //    branch (the FIFTH row).
  lines.push({
    x1: ROLE_X["council-manager"],
    y1: ROW_TOP[2],
    x2: ROLE_X["council-manager"],
    y2: BAR_Y.units,
  });

  // 5. Supervisors -> department common-access bar (merge with the spine)
  lines.push({
    x1: ROLE_X["supervisors-and-special-advisers"],
    y1: ROW_TOP[3],
    x2: ROLE_X["supervisors-and-special-advisers"],
    y2: BAR_Y.departments,
  });

  // 6. Department common-access bar + long drops into each department head
  lines.push({
    x1: DEPARTMENT_XS[0],
    y1: BAR_Y.departments,
    x2: DEPARTMENT_XS[DEPARTMENT_XS.length - 1],
    y2: BAR_Y.departments,
  });
  DEPARTMENT_XS.forEach((x) => {
    lines.push({
      x1: x,
      y1: BAR_Y.departments,
      x2: x,
      y2: ROW_TOP[4] - 32,
      arrow: true,
    });
  });

  // 7. BROADER LOWER BRANCH
  //    Area Officers (left) and Procurement (right) each have their OWN
  //    independent drop. The five Special Units are grouped on a separate
  //    distribution line that is fed from the broader branch.
  lines.push({
    x1: AREA_OFFICERS_X,
    y1: BAR_Y.units,
    x2: PROCUREMENT_X,
    y2: BAR_Y.units,
  });

  // 7a. Area Officers: independent drop
  lines.push({
    x1: AREA_OFFICERS_X,
    y1: BAR_Y.units,
    x2: AREA_OFFICERS_X,
    y2: ROW_TOP[5] - 32,
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
      className="relative"
      style={{ width: CHART_WIDTH, height: CHART_HEIGHT }}
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
          return (
            <div
              key={role.id}
              className="absolute"
              style={{
                left: x - NODE_WIDTH / 2,
                top: ROW_TOP[row.rowId],
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
  );
};

export default RowByRoleOrgChart;
