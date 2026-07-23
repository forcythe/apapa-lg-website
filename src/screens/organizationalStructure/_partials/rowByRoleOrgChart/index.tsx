/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { JSX } from "react";
import clsx from "clsx";

import { rowData, Row, Role } from "./rowByRoleOrgChart.data";
import NodeBox from "./NodeBox";

import { useTranslations } from "next-intl";

const getRowMarginClass = (rowId: number): string => {
  switch (rowId) {
    case 4:
      return "mt-[59px]";
    case 5:
      return "mt-[235px]";
    case 6:
      return "mt-[63px]";
    case 7:
      return "mt-[83px]";
    default:
      return "mb-0";
  }
};

const getCustomStyleForRole = (
  rowId: number,
  roleId: string
): React.CSSProperties => {
  if (rowId === 3 && roleId === "supervisors-and-special-advisers") {
    return { paddingLeft: "500px" };
  }
  if (rowId === 4 || rowId === 5) {
    return { marginLeft: "-15px" };
  }
  return {};
};

const getRowContainerClasses = (rowId: number): string => {
  const base = "w-[1410px] flex items-start mx-auto relative";
  switch (rowId) {
    case 1:
      return `${base} justify-center gap-16`;
    case 2:
      return `${base} justify-center gap-16`;
    case 3:
      return `${base} justify-center gap-16`;
    case 4:
      return `${base} justify-center gap-0 pl-4`;
    case 5:
      return `${base} justify-center gap-0`;
    case 6:
      return `${base} justify-start gap-16 pl-8`;
    case 7:
      return `${base} justify-start gap-16 pl-[217px] w-full`;
    default:
      return "flex items-start w-full relative justify-center gap-16";
  }
};

const getUpperLineClasses = (rowId: number): string => {
  switch (rowId) {
    case 4:
      return "max-w-[1210px] mx-auto ml-[-15px]";
    case 5:
      return "max-w-[1210px] mx-auto ml-[-15px]";
    case 2:
      return "max-w-[1008px] mx-auto";
    case 6:
      return "max-w-[252px] ml-[95px]";
    case 7:
      return "max-w-[557px] left-[6px]";
    default:
      return "";
  }
};

const getSecondaryLineClasses = (_rowId: number): string => {
  return "";
};

const getVerticalLineElement = (_rowId: number): JSX.Element | null => {
  return null;
};

const RowByRoleOrgChart: React.FC = () => {

  const t = useTranslations("Government.rowData");

  const roleRefs: Record<string, HTMLDivElement | null> = {};

  return (
    <div className="w-full">
      {rowData.map((row: Row) => {
        const rowMarginClass = getRowMarginClass(row.rowId);
        const containerClasses = getRowContainerClasses(row.rowId);
        const upperLine = getUpperLineClasses(row.rowId);
        const secondaryLine = getSecondaryLineClasses(row.rowId);

        return (
          <div
            key={row.rowId}
            className={clsx(containerClasses, rowMarginClass)}
            style={{ position: "relative" }}
          >
            {row.roles.map((role: Role) => {
              if (role.isSpacer) {
                return <div key={role.id} className="w-[188px] h-0" />;
              }
              return (
                <div
                  key={role.id}
                  ref={(el) => (roleRefs[role.id] = el) as any}
                  className="flex flex-col items-center relative"
                  style={getCustomStyleForRole(row.rowId, role.id)}
                >
                  <NodeBox
                    role={t(role.role)}
                    rowId={row.rowId}
                    roleId={role.id}
                    image={role.img}
                  />
                </div>
              );
            })}

            {upperLine && (
              <div
                className={`absolute h-[2px] w-full ${upperLine} bg-black top-0`}
              />
            )}

            {secondaryLine && (
              <div
                className={`absolute h-[2px] w-full ${secondaryLine} bg-black top-0`}
              />
            )}

            {getVerticalLineElement(row.rowId)}
          </div>
        );
      })}
    </div>
  );
};

export default RowByRoleOrgChart;
