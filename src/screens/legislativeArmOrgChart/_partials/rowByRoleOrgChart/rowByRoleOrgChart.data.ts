export interface Role {
  id: string;
  role: string;
  name?: string;
  img?: string;
  isSpacer?: boolean;
}

export interface Row {
  rowId: number;
  roles: Role[];
}

export const rowData: Row[] = [
  {
    rowId: 1,
    roles: [
      { id: "spacer-1", role: "", isSpacer: true },
      {
        id: "leader-of-the-house",
        role: "Leader of the House",
        name: "Hon. Muse Moshood kehinde",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Counsellors_/NO%201%20.png",
      },
      { id: "spacer-2", role: "", isSpacer: true },
    ],
  },
  {
    rowId: 2,
    roles: [
      { id: "spacer-3", role: "", isSpacer: true },
      {
        id: "deputy-leader",
        role: "Deputy Leader",
        name: "Hon. Adekunle Qamar Lawal",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Counsellors_/NO%202%20.png",
      },
      { id: "spacer-4", role: "", isSpacer: true },
    ],
  },
  {
    rowId: 3,
    roles: [
      {
        id: "majority-leader",
        role: "Majority Leader",
        name: "Hon. Bose Iwundu",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Counsellors_/NO%203.png",
      },
      { id: "spacer-5", role: "", isSpacer: true },
      {
        id: "chip-whip",
        role: "Chip Whip",
        name: "Hon. Liadi Saheed",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Counsellors_/NO%204.png",
      },
      { id: "spacer-6", role: "", isSpacer: true },
    ],
  },
  {
    rowId: 4,
    roles: [
      { id: "spacer-7", role: "", isSpacer: true },
      {
        id: "deputy-chief-whip",
        role: "Deputy Chief Whip",
        name: "Hon. Hameed Alabi",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Counsellors_/NO%205.png",
      },
      { id: "spacer-8", role: "", isSpacer: true },
      {
        id: "clerk-of-the-house",
        role: "Clerk of the House",
        name: "Mr Adebomi  Abayomi. O.",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/R.png",
      },
    ],
  },
  {
    rowId: 5,
    roles: [
      { id: "spacer-9", role: "", isSpacer: true },
      { id: "spacer-10", role: "", isSpacer: true },
      {
        id: "sergent-at-arm",
        role: "Sergent @ Arm",
        name: "Sergent @ Arm",
        img: "/image/placeholder.jpeg",
      },
      { id: "spacer-11", role: "", isSpacer: true },
      {
        id: "clerk-at-table",
        role: "Clerk @ Table",
        name: "Clerk @ Table",
        img: "/image/placeholder.jpeg",
      },
    ],
  },
  {
    rowId: 6,
    roles: [
      { id: "spacer-12", role: "", isSpacer: true },
      { id: "spacer-13", role: "", isSpacer: true },
      { id: "spacer-14", role: "", isSpacer: true },
      {
        id: "other-legislative-staffs",
        role: "Other Legislative Staffs",
        name: "Other Legislative Staffs",
        img: "/image/placeholder.jpeg",
      },
    ],
  },
];
