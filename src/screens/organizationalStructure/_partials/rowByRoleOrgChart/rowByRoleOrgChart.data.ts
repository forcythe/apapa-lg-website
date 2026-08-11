/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TeamMember {
  name: string;
  title: string;
  img: string;
}

export interface Role {
  id: string;
  role: string;
  name?: string;
  img?: string;
  isSpacer?: boolean;
  parentIds?: string[];
  overview?: string;
  introduction?: string;
  keyFunctions?: any[];
  bannerTitle?: string;
  badgeTitle?: string;
  team?: TeamMember[];
}

export interface Row {
  rowId: number;
  roles: Role[];
}

export const rowData: Row[] = [
  {
    rowId: 1,
    roles: [
      {
        id: "executive-chairman",
        role: "executiveChairman.role",
        img: "/svgs/HEAD_OF_HR.svg",
        bannerTitle: "executiveChairman.bannerTitle",
        badgeTitle: "executiveChairman.badgeTitle",
        overview: "executiveChairman.overview",
        name: "executiveChairman.name",
        introduction: "executiveChairman.introduction",
      },
    ],
  },
  {
    rowId: 2,
    roles: [
      {
        id: "vice-chairman",
        parentIds: ["executive-chairman"],
        role: "viceChairman.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20002.png",
        bannerTitle: "viceChairman.bannerTitle",
        badgeTitle: "viceChairman.badgeTitle",
        overview: "viceChairman.overview",
        name: "viceChairman.name",
        introduction: "viceChairman.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "viceChairman.keyFunctions.title1",
            desc: "viceChairman.keyFunctions.description1",
          },
          {
            id: 2,
            title: "viceChairman.keyFunctions.title2",
            desc: "viceChairman.keyFunctions.description2",
          },
          {
            id: 3,
            title: "viceChairman.keyFunctions.title3",
            desc: "viceChairman.keyFunctions.description3",
          },
          {
            id: 4,
            title: "viceChairman.keyFunctions.title4",
            desc: "viceChairman.keyFunctions.description4",
          },
          {
            id: 5,
            title: "viceChairman.keyFunctions.title5",
            desc: "viceChairman.keyFunctions.description5",
          },
          {
            id: 6,
            title: "viceChairman.keyFunctions.title6",
            desc: "viceChairman.keyFunctions.description6",
          },
          {
            id: 7,
            title: "viceChairman.keyFunctions.title7",
            desc: "viceChairman.keyFunctions.description7",
          },
          {
            id: 8,
            title: "viceChairman.keyFunctions.title8",
            desc: "viceChairman.keyFunctions.description8",
          },
        ],
      },
      {
        id: "council-manager",
        parentIds: ["executive-chairman"],
        role: "councilManager.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20003.png",
        bannerTitle: "councilManager.bannerTitle",
        badgeTitle: "councilManager.badgeTitle",
        overview: "councilManager.overview",
        name: "councilManager.name",
        introduction: "councilManager.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "councilManager.keyFunctions.title1",
            desc: "councilManager.keyFunctions.description1",
          },
          {
            id: 2,
            title: "councilManager.keyFunctions.title2",
            desc: "councilManager.keyFunctions.description2",
          },
          {
            id: 3,
            title: "councilManager.keyFunctions.title3",
            desc: "councilManager.keyFunctions.description3",
          },
          {
            id: 4,
            title: "councilManager.keyFunctions.title4",
            desc: "councilManager.keyFunctions.description4",
          },
          {
            id: 5,
            title: "councilManager.keyFunctions.title5",
            desc: "councilManager.keyFunctions.description5",
          },
          {
            id: 6,
            title: "councilManager.keyFunctions.title6",
            desc: "councilManager.keyFunctions.description6",
          },
          {
            id: 7,
            title: "councilManager.keyFunctions.title7",
            desc: "councilManager.keyFunctions.description7",
          },
          {
            id: 8,
            title: "councilManager.keyFunctions.title8",
            desc: "councilManager.keyFunctions.description8",
          },
          {
            id: 9,
            title: "councilManager.keyFunctions.title9",
            desc: "councilManager.keyFunctions.description9",
          },
        ],
      },
      {
        id: "s-l-g",
        parentIds: ["executive-chairman"],
        role: "slg.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20006.png",
        bannerTitle: "slg.bannerTitle",
        badgeTitle: "slg.badgeTitle",
        overview: "slg.overview",
        name: "slg.name",
        introduction: "slg.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "slg.keyFunctions.title1",
            desc: "slg.keyFunctions.description1",
          },
          {
            id: 2,
            title: "slg.keyFunctions.title2",
            desc: "slg.keyFunctions.description2",
          },
          {
            id: 3,
            title: "slg.keyFunctions.title3",
            desc: "slg.keyFunctions.description3",
          },
          {
            id: 4,
            title: "slg.keyFunctions.title4",
            desc: "slg.keyFunctions.description4",
          },
          {
            id: 5,
            title: "slg.keyFunctions.title5",
            desc: "slg.keyFunctions.description5",
          },
          {
            id: 6,
            title: "slg.keyFunctions.title6",
            desc: "slg.keyFunctions.description6",
          },
          {
            id: 7,
            title: "slg.keyFunctions.title7",
            desc: "slg.keyFunctions.description7",
          },
          {
            id: 8,
            title: "slg.keyFunctions.title8",
            desc: "slg.keyFunctions.description8",
          },
          {
            id: 9,
            title: "slg.keyFunctions.title9",
            desc: "slg.keyFunctions.description9",
          },
        ],
      },
      {
        id: "legislative-arm",
        parentIds: ["executive-chairman"],
        role: "legislativeArm.role",
        img: "/svgs/logoHead.svg",
        bannerTitle: "legislativeArm.bannerTitle",
        overview: "legislativeArm.overview",
      },
    ],
  },
  {
    rowId: 3,
    roles: [
      {
        id: "supervisors-and-special-advisers",
        parentIds: ["s-l-g"],
        role: "supervisorsAndSpecialAdvisers.role",
        img: "/svgs/logoHead.svg",
        bannerTitle: "supervisorsAndSpecialAdvisers.bannerTitle",
        overview: "supervisorsAndSpecialAdvisers.overview",
        team: [
          {
            name: "Engr. Oluwatoyin Lawal",
            title: "Supervisor for Works and Infrastructure",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 6.png",
          },
          {
            name: "Mr. Olanrewaju Wasiu Adedayo",
            title: "Supervisor for Budget, Planning and Finance",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 7 .png",
          },
          {
            name: "Mr. Segun Moses",
            title: "Supervisor for Transport and Traffic Management",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 8.png",
          },
          {
            name: "Mr. Isiaka Ijale",
            title: "Supervisor Environment",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 10.png",
          },
          {
            name: "Miss Mercy Jennifer Ukpong",
            title: "Supervisor Women and Poverty Alleviation-WAPA",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 11.png",
          },
          {
            name: "Mr. Ademola Yakubu",
            title: "Supervisor Agriculture and Social Development",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 14.png",
          },
          {
            name: "Mr. Tosan Wiltshire",
            title: "Supervisor for Information and Strategy",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 15.png",
          },
          {
            name: "Alhaji Fatai Sanni",
            title: "Supervisor for Political and Legislative Affairs",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 17.png",
          },
          {
            name: "Mr Michael Kolawole",
            title: "Special Adviser Special Duties",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 9.png",
          },
          {
            name: "Miss Ruth Udemba",
            title: "Special Adviser ICT",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 12.png",
          },
          {
            name: "Miss Ibukunmi Akugbe Aluko",
            title: "Special Adviser Intergovernmental Relations",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 13.png",
          },
          {
            name: "Mr Omosuyi Olaolu O.",
            title: "Special Adviser Tourism",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 16.png",
          },
          {
            name: "Prince Adeyinka Yusuf Aromire",
            title: "Special Adviser Youth and Sport",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 18.png",
          },
          {
            name: "Mr Samuel Olawale Tairu",
            title: "Special Adviser Health",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 19.png",
          },
          {
            name: "Olasode Hammed O.",
            title: "Special Adviser, Market Development",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/20.png",
          },
          {
            name: "Babatunde Taofeek",
            title: "Special Adviser, City Care Ward A",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/21.png",
          },
          {
            name: "Aromire O. Samson",
            title: "Special Adviser, City Care Ward E",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/22.png",
          },
          {
            name: "Sandra Ilawole",
            title: "Special Adviser Elderly Affairs",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/23.png",
          },
          {
            name: "Oniyitan Modupe Grace",
            title: "Special Adviser Civic Engagement",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/24.png",
          },
          {
            name: "Olayiwola Adekunle",
            title: "Special Adviser, Community Affairs",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/25.png",
          },
          {
            name: "Adesola Adesanya-Atiroko",
            title: "Special Adviser, City Care Ward C",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/26.png",
          },
          {
            name: "Olusanya Olufemi",
            title: "Special Adviser, City Care Ward D",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/27.png",
          },
          {
            name: "Babalola Bankole Mogaji",
            title: "Special Adviser, Boundary Matters",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/28.png",
          },
          {
            name: "Arugba Michael",
            title: "Special Adviser, City Care Ward B",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/29.png",
          },
        ],
        keyFunctions: [
          {
            id: 1,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title1",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description1",
          },
          {
            id: 2,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title2",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description2",
          },
          {
            id: 3,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title3",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description3",
          },
          {
            id: 4,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title4",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description4",
          },
          {
            id: 5,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title5",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description5",
          },
          {
            id: 6,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title6",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description6",
          },
          {
            id: 7,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title7",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description7",
          },
          {
            id: 8,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title8",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description8",
          },
          {
            id: 9,
            title: "supervisorsAndSpecialAdvisers.keyFunctions.title9",
            desc: "supervisorsAndSpecialAdvisers.keyFunctions.description9",
          },
        ],
      },
      {
        id: "clerk-of-the-house",
        parentIds: ["legislative-arm"],
        role: "clerkOfLegislativeArm.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/R.png",
        bannerTitle: "clerkOfLegislativeArm.bannerTitle",
        badgeTitle: "clerkOfLegislativeArm.badgeTitle",
        overview: "clerkOfLegislativeArm.overview",
        name: "clerkOfLegislativeArm.name",
        introduction: "clerkOfLegislativeArm.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "clerkOfLegislativeArm.keyFunctions.title1",
            desc: "clerkOfLegislativeArm.keyFunctions.description1",
          },
          {
            id: 2,
            title: "clerkOfLegislativeArm.keyFunctions.title2",
            desc: "clerkOfLegislativeArm.keyFunctions.description2",
          },
          {
            id: 3,
            title: "clerkOfLegislativeArm.keyFunctions.title3",
            desc: "clerkOfLegislativeArm.keyFunctions.description3",
          },
          {
            id: 4,
            title: "clerkOfLegislativeArm.keyFunctions.title4",
            desc: "clerkOfLegislativeArm.keyFunctions.description4",
          },
          {
            id: 5,
            title: "clerkOfLegislativeArm.keyFunctions.title5",
            desc: "clerkOfLegislativeArm.keyFunctions.description5",
          },
          {
            id: 6,
            title: "clerkOfLegislativeArm.keyFunctions.title6",
            desc: "clerkOfLegislativeArm.keyFunctions.description6",
          },
          {
            id: 7,
            title: "clerkOfLegislativeArm.keyFunctions.title7",
            desc: "clerkOfLegislativeArm.keyFunctions.description7",
          },
          {
            id: 8,
            title: "clerkOfLegislativeArm.keyFunctions.title8",
            desc: "clerkOfLegislativeArm.keyFunctions.description8",
          },
          {
            id: 9,
            title: "clerkOfLegislativeArm.keyFunctions.title9",
            desc: "clerkOfLegislativeArm.keyFunctions.description9",
          },
        ],
      },
    ],
  },
  {
    rowId: 4,
    roles: [
      {
        id: "head-admin-human-resources",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headAdminAndHumanResources.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/m.png",
        bannerTitle: "headAdminAndHumanResources.bannerTitle",
        badgeTitle: "headAdminAndHumanResources.badgeTitle",
        overview: "headAdminAndHumanResources.overview",
        name: "headAdminAndHumanResources.name",
        introduction: "headAdminAndHumanResources.introduction",
        keyFunctions: [],
      },
      {
        id: "head-finance-accounts",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headFinanceAndAccounts.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20007.png",
        bannerTitle: "headFinanceAndAccounts.bannerTitle",
        badgeTitle: "headFinanceAndAccounts.badgeTitle",
        overview: "headFinanceAndAccounts.overview",
        name: "headFinanceAndAccounts.name",
        introduction: "headFinanceAndAccounts.introduction",
        keyFunctions: [],
      },
      {
        id: "head-works-and-infrastructure",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headWorksAndInfrastructure.role",
        img: "/image/placeholder.jpeg",
        bannerTitle: "headWorksAndInfrastructure.bannerTitle",
        badgeTitle: "headWorksAndInfrastructure.badgeTitle",
        overview: "headWorksAndInfrastructure.overview",
        name: "headWorksAndInfrastructure.name",
        introduction: "headWorksAndInfrastructure.introduction",
        keyFunctions: [],
      },
      {
        id: "head-agric-and-social-services",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headAgricAndSocialServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/I.png",
        bannerTitle: "headAgricAndSocialServices.bannerTitle",
        badgeTitle: "headAgricAndSocialServices.badgeTitle",
        overview: "headAgricAndSocialServices.overview",
        name: "headAgricAndSocialServices.name",
        introduction: "headAgricAndSocialServices.introduction",
        keyFunctions: [],
      },
      {
        id: "head-education-and-library-services",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headEducationAndLibraryServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/d.png",
        bannerTitle: "headEducationAndLibraryServices.bannerTitle",
        badgeTitle: "headEducationAndLibraryServices.badgeTitle",
        overview: "headEducationAndLibraryServices.overview",
        name: "headEducationAndLibraryServices.name",
        introduction: "headEducationAndLibraryServices.introduction",
        keyFunctions: [],
      },
      {
        id: "head-planning-budget-research-statistics",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headPlanningBudgetResearchStatistics.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/c.png",
        bannerTitle: "headPlanningBudgetResearchStatistics.bannerTitle",
        badgeTitle: "headPlanningBudgetResearchStatistics.badgeTitle",
        overview: "headPlanningBudgetResearchStatistics.overview",
        name: "headPlanningBudgetResearchStatistics.name",
        introduction: "headPlanningBudgetResearchStatistics.introduction",
        keyFunctions: [],
      },
      {
        id: "head-wapa",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headWomenAffairsAndPovertyAlleviation.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/a.png",
        bannerTitle: "headWomenAffairsAndPovertyAlleviation.bannerTitle",
        badgeTitle: "headWomenAffairsAndPovertyAlleviation.badgeTitle",
        overview: "headWomenAffairsAndPovertyAlleviation.overview",
        name: "headWomenAffairsAndPovertyAlleviation.name",
        introduction: "headWomenAffairsAndPovertyAlleviation.introduction",
        keyFunctions: [],
      },
      {
        id: "head-primary-health-care-services",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headPrimaryHealthCareService.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/f.png",
        bannerTitle: "headPrimaryHealthCareService.bannerTitle",
        badgeTitle: "headPrimaryHealthCareService.badgeTitle",
        overview: "headPrimaryHealthCareService.overview",
        name: "headPrimaryHealthCareService.name",
        introduction: "headPrimaryHealthCareService.introduction",
        keyFunctions: [],
      },
      {
        id: "head-environmental-services-department",
        parentIds: ["council-manager", "supervisors-and-special-advisers"],
        role: "headEnvironmentalServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/j.png",
        bannerTitle: "headEnvironmentalServices.bannerTitle",
        badgeTitle: "headEnvironmentalServices.badgeTitle",
        overview: "headEnvironmentalServices.overview",
        name: "headEnvironmentalServices.name",
        introduction: "headEnvironmentalServices.introduction",
        keyFunctions: [],
      },
    ],
  },
  {
    rowId: 5,
    roles: [
      {
        id: "area-officers",
        parentIds: ["council-manager"],
        role: "areaOfficers.role",
        img: "/svgs/logoHead.svg",
        bannerTitle: "areaOfficers.bannerTitle",
        // badgeTitle: "AREA OFFICERS",
        overview: "areaOfficers.overview",
        // name: "Area Officers",
        // introduction: "Area Officers oversee community development and administrative matters across the council wards.",
        keyFunctions: [],
        team: [
          
          {
            name: "Mr Arogundade Lasisi Akeem",
            title: "Area Officer A",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/p.png",
          },
          {
            name: "Mr Bawa-Allah Ali",
            title: "Area Officer B",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/o.png",
          },
          {
            name: "Mr. Kila Olamilekan",
            title: "Area Officer C",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/n.png",
          },
        ],
      },
      {
        id: "head-audit-unit",
        parentIds: ["council-manager"],
        role: "headAuditUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/n.png",
        bannerTitle: "headAuditUnit.bannerTitle",
        badgeTitle: "headAuditUnit.badgeTitle",
        overview: "headAuditUnit.overview",
        name: "headAuditUnit.name",
        introduction: "headAuditUnit.introduction",
        keyFunctions: [],
      },
      {
        id: "head-legal-services",
        parentIds: ["council-manager"],
        role: "headLegalUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20004.png",
        bannerTitle: "headLegalUnit.bannerTitle",
        badgeTitle: "headLegalUnit.badgeTitle",
        overview: "headLegalUnit.overview",
        name: "headLegalUnit.name",
        introduction: "headLegalUnit.introduction",
        keyFunctions: [],
      },
      {
        id: "head-public-affairs-unit",
        parentIds: ["council-manager"],
        role: "headPublicAffairsUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/h.png",
        bannerTitle: "headPublicAffairsUnit.bannerTitle",
        badgeTitle: "headPublicAffairsUnit.badgeTitle",
        overview: "headPublicAffairsUnit.overview",
        name: "headPublicAffairsUnit.name",
        introduction: "headPublicAffairsUnit.introduction",
        keyFunctions: [],
      },
      {
        id: "head-tourism-unit",
        parentIds: ["council-manager"],
        role: "headTourismUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/g.png",
        bannerTitle: "headTourismUnit.bannerTitle",
        badgeTitle: "headTourismUnit.badgeTitle",
        overview: "headTourismUnit.overview",
        name: "headTourismUnit.name",
        introduction: "headTourismUnit.introduction",
        keyFunctions: [],
      },
      {
        id: "head-ict-unit",
        parentIds: ["council-manager"],
        role: "headIctUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/k.png",
        bannerTitle: "headIctUnit.bannerTitle",
        badgeTitle: "headIctUnit.badgeTitle",
        overview: "headIctUnit.overview",
        name: "headIctUnit.name",
        introduction: "headIctUnit.introduction",
        keyFunctions: [],
      },
      {
        id: "head-procurement-unit",
        role: "headProcurementUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/b.png",
        bannerTitle: "headProcurementUnit.bannerTitle",
        badgeTitle: "headProcurementUnit.badgeTitle",
        overview: "headProcurementUnit.overview",
        name: "headProcurementUnit.name",
        introduction: "headProcurementUnit.introduction",
        keyFunctions: [],
      },
    ],
  },
];
