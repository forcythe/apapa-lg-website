"use client";

import React from "react";
import LegislativeNodeBox from "./LegislativeNodeBox";
import { rowData } from "./rowByRoleOrgChart.data";

const ArrowDown = ({ left, top }: { left: number; top: number }) => (
  <div
    className="absolute"
    style={{
      left: `${left - 5}px`,
      top: `${top}px`,
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "7px solid black",
    }}
  />
);

const LegislativeArmOrgChartContent: React.FC = () => {
  const getRole = (id: string) => {
    for (const row of rowData) {
      const role = row.roles.find((r) => r.id === id);
      if (role) return role;
    }
    return { role: "", name: "", img: "" };
  };

  const nodes = [
    { id: "leader-of-the-house", cx: 600, top: 50 },
    { id: "deputy-leader", cx: 600, top: 320 },
    { id: "majority-leader", cx: 250, top: 320 },
    { id: "chip-whip", cx: 950, top: 320 },
    { id: "deputy-chief-whip", cx: 775, top: 560 },
    { id: "clerk-of-the-house", cx: 1150, top: 560 },
    { id: "sergent-at-arm", cx: 960, top: 810 },
    { id: "clerk-at-table", cx: 1340, top: 810 },
    { id: "other-legislative-staffs", cx: 1150, top: 1060 },
  ];

  return (
    <div className="w-[1520px] h-[1320px] relative mx-auto">
      {/* Nodes */}
      {nodes.map((node) => {
        const role = getRole(node.id);
        return (
          <div
            key={node.id}
            className="absolute"
            style={{ left: `${node.cx - 94}px`, top: `${node.top}px` }}
          >
            <LegislativeNodeBox
              role={role.role}
              name={role.name}
              image={role.img}
            />
          </div>
        );
      })}

      {/* Leader -> Deputy Leader */}
      <div className="absolute bg-black w-[2px] h-[128px] left-[599px] top-[162px]" />
      <ArrowDown left={600} top={290} />

      {/* Leader -> Majority/Chip Whip */}
      <div className="absolute bg-black w-[700px] h-[2px] left-[250px] top-[215px]" />
      <div className="absolute bg-black w-[2px] h-[73px] left-[249px] top-[215px]" />
      <ArrowDown left={250} top={288} />
      <div className="absolute bg-black w-[2px] h-[73px] left-[949px] top-[215px]" />
      <ArrowDown left={950} top={288} />

      {/* Leader -> Clerk */}
      <div className="absolute bg-black w-[456px] h-[2px] left-[694px] top-[114px]" />
      <div className="absolute bg-black w-[2px] h-[414px] left-[1149px] top-[114px]" />
      <ArrowDown left={1150} top={528} />

      {/* Deputy Leader + Chip Whip -> Deputy Chief Whip */}
      <div className="absolute bg-black w-[2px] h-[73px] left-[599px] top-[432px]" />
      <div className="absolute bg-black w-[2px] h-[73px] left-[949px] top-[432px]" />
      <div className="absolute bg-black w-[350px] h-[2px] left-[600px] top-[505px]" />
      <div className="absolute bg-black w-[2px] h-[23px] left-[774px] top-[505px]" />
      <ArrowDown left={775} top={528} />

      {/* Clerk -> Sergent, Table, Other */}
      <div className="absolute bg-black w-[2px] h-[368px] left-[1149px] top-[672px]" />
      <ArrowDown left={1150} top={1040} />
      <div className="absolute bg-black w-[380px] h-[2px] left-[960px] top-[725px]" />
      <div className="absolute bg-black w-[2px] h-[53px] left-[959px] top-[725px]" />
      <ArrowDown left={960} top={778} />
      <div className="absolute bg-black w-[2px] h-[53px] left-[1339px] top-[725px]" />
      <ArrowDown left={1340} top={778} />
    </div>
  );
};

export default LegislativeArmOrgChartContent;
