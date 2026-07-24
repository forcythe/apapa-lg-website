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
        id: "council-treasurer",
        role: "councilTreasurer.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20007.png",
        bannerTitle: "councilTreasurer.bannerTitle",
        badgeTitle: "councilTreasurer.badgeTitle",
        overview: "councilTreasurer.overview",
        name: "councilTreasurer.name",
        introduction: "councilTreasurer.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "councilTreasurer.keyFunctions.title1",
            desc: "councilTreasurer.keyFunctions.description1",
          },
          {
            id: 2,
            title: "councilTreasurer.keyFunctions.title2",
            desc: "councilTreasurer.keyFunctions.description2",
          },
          {
            id: 3,
            title: "councilTreasurer.keyFunctions.title3",
            desc: "councilTreasurer.keyFunctions.description3",
          },
          {
            id: 4,
            title: "councilTreasurer.keyFunctions.title4",
            desc: "councilTreasurer.keyFunctions.description4",
          },
          {
            id: 5,
            title: "councilTreasurer.keyFunctions.title5",
            desc: "councilTreasurer.keyFunctions.description5",
          },
          {
            id: 6,
            title: "councilTreasurer.keyFunctions.title6",
            desc: "councilTreasurer.keyFunctions.description6",
          },
          {
            id: 7,
            title: "councilTreasurer.keyFunctions.title7",
            desc: "councilTreasurer.keyFunctions.description7",
          },
          {
            id: 8,
            title: "councilTreasurer.keyFunctions.title8",
            desc: "councilTreasurer.keyFunctions.description8",
          },
        ],
      },
      {
        id: "council-manager",
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
        role: "slg.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20006.png",
        bannerTitle: "slg.bannerTitle",
        badgeTitle: "slg.badgeTitle",
        overview: "slg.overview",
        name: "slg.name",
        introduction:
          "slg.introduction",
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
        role: "legislativeArm.role",
        img: "/svgs/logoHead.svg",
        bannerTitle: "legislativeArm.bannerTitle",  
        overview: "legislativeArm.overview"
      },
    ],
  },
  {
    rowId: 3,
    roles: [
      {
        id: "supervisors-and-special-advisers",
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
            name: "Mr. Olanrewaju Wasiu Adebayo",
            title: "Supervisor for Budget and Planning",
            img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 7 .png",
          },
          {
            name: "Mr. Segun Moses",
            title: "Supervisor for Transport & Traffic Management",
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
            title: "Supervisor Agriculture & Social Development",
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
    ],
  },
  {
    rowId: 4,
    roles: [
      {
        id: "head-works-and-infrastructure",
        role: "headWorksAndInfrastructure.role",
        img: "/image/placeholder.jpeg",
        bannerTitle: "headWorksAndInfrastructure.bannerTitle",
        badgeTitle: "headWorksAndInfrastructure.badgeTitle",
        overview: "headWorksAndInfrastructure.overview",
        name: "headWorksAndInfrastructure.name",
        introduction: "headWorksAndInfrastructure.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headWorksAndInfrastructure.keyFunctions.title1",
            desc: "headWorksAndInfrastructure.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headWorksAndInfrastructure.keyFunctions.title2",
            desc: "headWorksAndInfrastructure.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headWorksAndInfrastructure.keyFunctions.title3",
            desc: "headWorksAndInfrastructure.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headWorksAndInfrastructure.keyFunctions.title4",
            desc: "headWorksAndInfrastructure.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headWorksAndInfrastructure.keyFunctions.title5",
            desc: "headWorksAndInfrastructure.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headWorksAndInfrastructure.keyFunctions.title6",
            desc: "headWorksAndInfrastructure.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headWorksAndInfrastructure.keyFunctions.title7",
            desc: "headWorksAndInfrastructure.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headWorksAndInfrastructure.keyFunctions.title8",
            desc: "headWorksAndInfrastructure.keyFunctions.description8",
          },
        ],
      },
      {
        id: "head-agric-and-social-services",
        role: "headAgricAndSocialServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/I.png",
        bannerTitle: "headAgricAndSocialServices.bannerTitle",
        badgeTitle: "headAgricAndSocialServices.badgeTitle",
        overview: "headAgricAndSocialServices.overview",
        name: "headAgricAndSocialServices.name",
        introduction: "headAgricAndSocialServices.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headAgricAndSocialServices.keyFunctions.title1",
            desc: "headAgricAndSocialServices.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headAgricAndSocialServices.keyFunctions.title2",
            desc: "headAgricAndSocialServices.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headAgricAndSocialServices.keyFunctions.title3",
            desc: "headAgricAndSocialServices.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headAgricAndSocialServices.keyFunctions.title4",
            desc: "headAgricAndSocialServices.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headAgricAndSocialServices.keyFunctions.title5",
            desc: "headAgricAndSocialServices.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headAgricAndSocialServices.keyFunctions.title6",
            desc: "headAgricAndSocialServices.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headAgricAndSocialServices.keyFunctions.title7",
            desc: "headAgricAndSocialServices.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headAgricAndSocialServices.keyFunctions.title8",
            desc: "headAgricAndSocialServices.keyFunctions.description8",
          },
        ],
      },
      {
        id: "head-education-and-library-services",
        role: "headEducationAndLibraryServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/d.png",
        bannerTitle: "headEducationAndLibraryServices.bannerTitle",
        badgeTitle: "headEducationAndLibraryServices.badgeTitle",
        overview: "headEducationAndLibraryServices.overview",
        name: "headEducationAndLibraryServices.name",
        introduction: "headEducationAndLibraryServices.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headEducationAndLibraryServices.keyFunctions.title1",
            desc: "headEducationAndLibraryServices.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headEducationAndLibraryServices.keyFunctions.title2",
            desc: "headEducationAndLibraryServices.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headEducationAndLibraryServices.keyFunctions.title3",
            desc: "headEducationAndLibraryServices.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headEducationAndLibraryServices.keyFunctions.title4",
            desc: "headEducationAndLibraryServices.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headEducationAndLibraryServices.keyFunctions.title5",
            desc: "headEducationAndLibraryServices.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headEducationAndLibraryServices.keyFunctions.title6",
            desc: "headEducationAndLibraryServices.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headEducationAndLibraryServices.keyFunctions.title7",
            desc: "headEducationAndLibraryServices.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headEducationAndLibraryServices.keyFunctions.title8",
            desc: "headEducationAndLibraryServices.keyFunctions.description8",
          },
        ],
      },
      {
        id: "head-planning-budget-research-statistics",
        role: "headPlanningBudgetResearchStatistics.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/c.png",
        bannerTitle: "headPlanningBudgetResearchStatistics.bannerTitle",
        badgeTitle: "headPlanningBudgetResearchStatistics.badgeTitle",
        overview: "headPlanningBudgetResearchStatistics.overview",
        name: "headPlanningBudgetResearchStatistics.name",
        introduction: "headPlanningBudgetResearchStatistics.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title1",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title2",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title3",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title4",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title5",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title6",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title7",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headPlanningBudgetResearchStatistics.keyFunctions.title8",
            desc: "headPlanningBudgetResearchStatistics.keyFunctions.description8",
          },
        ],
      },
      {
        id: "head-wapa",
        role: "headWomenAffairsAndPovertyAlleviation.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/a.png",
        bannerTitle: "headWomenAffairsAndPovertyAlleviation.bannerTitle",
        badgeTitle: "headWomenAffairsAndPovertyAlleviation.badgeTitle",
        overview: "headWomenAffairsAndPovertyAlleviation.overview",
        name: "headWomenAffairsAndPovertyAlleviation.name",
        introduction: "headWomenAffairsAndPovertyAlleviation.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title1",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title2",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title3",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title4",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title5",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title6",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headWomenAffairsAndPovertyAlleviation.keyFunctions.title7",
            desc: "headWomenAffairsAndPovertyAlleviation.keyFunctions.description7",
          },
        ],
      },
      {
        id: "head-primary-health-care-services",
        role: "headPrimaryHealthCareService.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/f.png",
        bannerTitle: "headPrimaryHealthCareService.bannerTitle",
        badgeTitle: "headPrimaryHealthCareService.badgeTitle",
        overview: "headPrimaryHealthCareService.overview",
        name: "headPrimaryHealthCareService.name",
        introduction: "headPrimaryHealthCareService.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headPrimaryHealthCareService.keyFunctions.title1",
            desc: "headPrimaryHealthCareService.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headPrimaryHealthCareService.keyFunctions.title2",
            desc: "headPrimaryHealthCareService.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headPrimaryHealthCareService.keyFunctions.title3",
            desc: "headPrimaryHealthCareService.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headPrimaryHealthCareService.keyFunctions.title4",
            desc: "headPrimaryHealthCareService.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headPrimaryHealthCareService.keyFunctions.title5",
            desc: "headPrimaryHealthCareService.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headPrimaryHealthCareService.keyFunctions.title6",
            desc: "headPrimaryHealthCareService.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headPrimaryHealthCareService.keyFunctions.title7",
            desc: "headPrimaryHealthCareService.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headPrimaryHealthCareService.keyFunctions.title8",
            desc: "headPrimaryHealthCareService.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headPrimaryHealthCareService.keyFunctions.title9",
            desc: "headPrimaryHealthCareService.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-environmental-services-department",
        role: "headEnvironmentalServices.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/j.png",
        bannerTitle: "headEnvironmentalServices.bannerTitle",
        badgeTitle: "headEnvironmentalServices.badgeTitle",
        overview: "headEnvironmentalServices.overview",
        name: "headEnvironmentalServices.name",
        introduction: "headEnvironmentalServices.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headEnvironmentalServices.keyFunctions.title1",
            desc: "headEnvironmentalServices.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headEnvironmentalServices.keyFunctions.title2",
            desc: "headEnvironmentalServices.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headEnvironmentalServices.keyFunctions.title3",
            desc: "headEnvironmentalServices.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headEnvironmentalServices.keyFunctions.title4",
            desc: "headEnvironmentalServices.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headEnvironmentalServices.keyFunctions.title5",
            desc: "headEnvironmentalServices.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headEnvironmentalServices.keyFunctions.title6",
            desc: "headEnvironmentalServices.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headEnvironmentalServices.keyFunctions.title7",
            desc: "headEnvironmentalServices.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headEnvironmentalServices.keyFunctions.title8",
            desc: "headEnvironmentalServices.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headEnvironmentalServices.keyFunctions.title9",
            desc: "headEnvironmentalServices.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-finance-accounts",
        role: "headFinanceAndAccounts.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20007.png",
        bannerTitle: "headFinanceAndAccounts.bannerTitle",
        badgeTitle: "headFinanceAndAccounts.badgeTitle",
        overview: "headFinanceAndAccounts.overview",
        name: "headFinanceAndAccounts.name",
        introduction: "headFinanceAndAccounts.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headFinanceAndAccounts.keyFunctions.title1",
            desc: "headFinanceAndAccounts.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headFinanceAndAccounts.keyFunctions.title2",
            desc: "headFinanceAndAccounts.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headFinanceAndAccounts.keyFunctions.title3",
            desc: "headFinanceAndAccounts.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headFinanceAndAccounts.keyFunctions.title4",
            desc: "headFinanceAndAccounts.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headFinanceAndAccounts.keyFunctions.title5",
            desc: "headFinanceAndAccounts.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headFinanceAndAccounts.keyFunctions.title6",
            desc: "headFinanceAndAccounts.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headFinanceAndAccounts.keyFunctions.title7",
            desc: "headFinanceAndAccounts.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headFinanceAndAccounts.keyFunctions.title8",
            desc: "headFinanceAndAccounts.keyFunctions.description8",
          },
        ],
      },
      // {
      //   id: "clerk-of-the-house",
      //   role: "clerkOfLegislativeArm.role",
      //   img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/R.png",
      //   bannerTitle: "clerkOfLegislativeArm.bannerTitle",
      //   badgeTitle: "clerkOfLegislativeArm.badgeTitle",
      //   overview: "clerkOfLegislativeArm.overview",
      //   name: "clerkOfLegislativeArm.name",
      //   introduction: "clerkOfLegislativeArm.introduction",
      //   keyFunctions: [
      //     {
      //       id: 1,
      //       title: "clerkOfLegislativeArm.keyFunctions.title1",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description1",
      //     },
      //     {
      //       id: 2,
      //       title: "clerkOfLegislativeArm.keyFunctions.title2",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description2",
      //     },
      //     {
      //       id: 3,
      //       title: "clerkOfLegislativeArm.keyFunctions.title3",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description3",
      //     },
      //     {
      //       id: 4,
      //       title: "clerkOfLegislativeArm.keyFunctions.title4",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description4",
      //     },
      //     {
      //       id: 5,
      //       title: "clerkOfLegislativeArm.keyFunctions.title5",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description5",
      //     },
      //     {
      //       id: 6,
      //       title: "clerkOfLegislativeArm.keyFunctions.title6",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description6",
      //     },
      //     {
      //       id: 7,
      //       title: "clerkOfLegislativeArm.keyFunctions.title7",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description7",
      //     },
      //     {
      //       id: 8,
      //       title: "clerkOfLegislativeArm.keyFunctions.title8",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description8",
      //     },
      //     {
      //       id: 9,
      //       title: "clerkOfLegislativeArm.keyFunctions.title9",
      //       desc: "clerkOfLegislativeArm.keyFunctions.description9",
      //     },
      //   ],
      // },
    ],
  },
  {
    rowId: 5,
    roles: [
      {
        id: "head-ict-unit",
        role: "headIctUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/k.png",
        bannerTitle: "headIctUnit.bannerTitle",
        badgeTitle: "headIctUnit.badgeTitle",
        overview: "headIctUnit.overview",
        name: "headIctUnit.name",
        introduction: "headIctUnit.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headIctUnit.keyFunctions.title1",
            desc: "headIctUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headIctUnit.keyFunctions.title2",
            desc: "headIctUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headIctUnit.keyFunctions.title3",
            desc: "headIctUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headIctUnit.keyFunctions.title4",
            desc: "headIctUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headIctUnit.keyFunctions.title5",
            desc: "headIctUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headIctUnit.keyFunctions.title6",
            desc: "headIctUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headIctUnit.keyFunctions.title7",
            desc: "headIctUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headIctUnit.keyFunctions.title8",
            desc: "headIctUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headIctUnit.keyFunctions.title9",
            desc: "headIctUnit.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-legal-services",
        role: "headLegalUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/Head%20Management_/NO%20004.png",
        bannerTitle: "headLegalUnit.bannerTitle",
        badgeTitle: "headLegalUnit.badgeTitle",
        overview: "headLegalUnit.overview",
        name: "headLegalUnit.name",
        introduction: "headLegalUnit.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headLegalUnit.keyFunctions.title1",
            desc: "headLegalUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headLegalUnit.keyFunctions.title2",
            desc: "headLegalUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headLegalUnit.keyFunctions.title3",
            desc: "headLegalUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headLegalUnit.keyFunctions.title4",
            desc: "headLegalUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headLegalUnit.keyFunctions.title5",
            desc: "headLegalUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headLegalUnit.keyFunctions.title6",
            desc: "headLegalUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headLegalUnit.keyFunctions.title7",
            desc: "headLegalUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headLegalUnit.keyFunctions.title8",
            desc: "headLegalUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headLegalUnit.keyFunctions.title9",
            desc: "headLegalUnit.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-tourism-unit",
        role: "headTourismUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/g.png",
        bannerTitle: "headTourismUnit.bannerTitle",
        badgeTitle: "headTourismUnit.badgeTitle",
        overview: "headTourismUnit.overview",
        name: "headTourismUnit.name",
        introduction: "headTourismUnit.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headTourismUnit.keyFunctions.title1",
            desc: "headTourismUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headTourismUnit.keyFunctions.title2",
            desc: "headTourismUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headTourismUnit.keyFunctions.title3",
            desc: "headTourismUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headTourismUnit.keyFunctions.title4",
            desc: "headTourismUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headTourismUnit.keyFunctions.title5",
            desc: "headTourismUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headTourismUnit.keyFunctions.title6",
            desc: "headTourismUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headTourismUnit.keyFunctions.title7",
            desc: "headTourismUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headTourismUnit.keyFunctions.title8",
            desc: "headTourismUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headTourismUnit.keyFunctions.title9",
            desc: "headTourismUnit.keyFunctions.description9",
          },
        ],
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
        keyFunctions: [
          {
            id: 1,
            title: "headProcurementUnit.keyFunctions.title1",
            desc: "headProcurementUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headProcurementUnit.keyFunctions.title2",
            desc: "headProcurementUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headProcurementUnit.keyFunctions.title3",
            desc: "headProcurementUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headProcurementUnit.keyFunctions.title4",
            desc: "headProcurementUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headProcurementUnit.keyFunctions.title5",
            desc: "headProcurementUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headProcurementUnit.keyFunctions.title6",
            desc: "headProcurementUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headProcurementUnit.keyFunctions.title7",
            desc: "headProcurementUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headProcurementUnit.keyFunctions.title8",
            desc: "headProcurementUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headProcurementUnit.keyFunctions.title9",
            desc: "headProcurementUnit.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-admin-human-resources",
        role: "headAdminAndHumanResources.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/m.png",
        bannerTitle: "headAdminAndHumanResources.bannerTitle",
        badgeTitle: "headAdminAndHumanResources.badgeTitle",
        overview: "headAdminAndHumanResources.overview",
        name: "headAdminAndHumanResources.name",
        introduction: "headAdminAndHumanResources.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headAdminAndHumanResources.keyFunctions.title1",
            desc: "headAdminAndHumanResources.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headAdminAndHumanResources.keyFunctions.title2",
            desc: "headAdminAndHumanResources.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headAdminAndHumanResources.keyFunctions.title3",
            desc: "headAdminAndHumanResources.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headAdminAndHumanResources.keyFunctions.title4",
            desc: "headAdminAndHumanResources.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headAdminAndHumanResources.keyFunctions.title5",
            desc: "headAdminAndHumanResources.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headAdminAndHumanResources.keyFunctions.title6",
            desc: "headAdminAndHumanResources.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headAdminAndHumanResources.keyFunctions.title7",
            desc: "headAdminAndHumanResources.keyFunctions.description7",
          },
        ],
      },
      {
        id: "head-public-affairs-unit",
        role: "headPublicAffairsUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/h.png",
        bannerTitle: "headPublicAffairsUnit.bannerTitle",
        badgeTitle: "headPublicAffairsUnit.badgeTitle",
        overview: "headPublicAffairsUnit.overview",
        name: "headPublicAffairsUnit.name",
        introduction: "headPublicAffairsUnit.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headPublicAffairsUnit.keyFunctions.title1",
            desc: "headPublicAffairsUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headPublicAffairsUnit.keyFunctions.title2",
            desc: "headPublicAffairsUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headPublicAffairsUnit.keyFunctions.title3",
            desc: "headPublicAffairsUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headPublicAffairsUnit.keyFunctions.title4",
            desc: "headPublicAffairsUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headPublicAffairsUnit.keyFunctions.title5",
            desc: "headPublicAffairsUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headPublicAffairsUnit.keyFunctions.title6",
            desc: "headPublicAffairsUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headPublicAffairsUnit.keyFunctions.title7",
            desc: "headPublicAffairsUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headPublicAffairsUnit.keyFunctions.title8",
            desc: "headPublicAffairsUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headPublicAffairsUnit.keyFunctions.title9",
            desc: "headPublicAffairsUnit.keyFunctions.description9",
          },
        ],
      },
      {
        id: "head-audit-unit",
        role: "headAuditUnit.role",
        img: "/image/APAPA%20COUNCIL%20PHOTOS_/HOD_S/n.png",
        bannerTitle: "headAuditUnit.bannerTitle",
        badgeTitle: "headAuditUnit.badgeTitle",
        overview: "headAuditUnit.overview",
        name: "headAuditUnit.name",
        introduction: "headAuditUnit.introduction",
        keyFunctions: [
          {
            id: 1,
            title: "headAuditUnit.keyFunctions.title1",
            desc: "headAuditUnit.keyFunctions.description1",
          },
          {
            id: 2,
            title: "headAuditUnit.keyFunctions.title2",
            desc: "headAuditUnit.keyFunctions.description2",
          },
          {
            id: 3,
            title: "headAuditUnit.keyFunctions.title3",
            desc: "headAuditUnit.keyFunctions.description3",
          },
          {
            id: 4,
            title: "headAuditUnit.keyFunctions.title4",
            desc: "headAuditUnit.keyFunctions.description4",
          },
          {
            id: 5,
            title: "headAuditUnit.keyFunctions.title5",
            desc: "headAuditUnit.keyFunctions.description5",
          },
          {
            id: 6,
            title: "headAuditUnit.keyFunctions.title6",
            desc: "headAuditUnit.keyFunctions.description6",
          },
          {
            id: 7,
            title: "headAuditUnit.keyFunctions.title7",
            desc: "headAuditUnit.keyFunctions.description7",
          },
          {
            id: 8,
            title: "headAuditUnit.keyFunctions.title8",
            desc: "headAuditUnit.keyFunctions.description8",
          },
          {
            id: 9,
            title: "headAuditUnit.keyFunctions.title9",
            desc: "headAuditUnit.keyFunctions.description9",
          },
        ],
      },
      {
        id: "special-adviser",
        role: "specialAdviser.role",
        img: "/svgs/logoHead.svg",
        bannerTitle: "specialAdviser.bannerTitle",
        overview: "specialAdviser.overview",
        // team: [
        //   {
        //     name: "Mr Michael Kolawole",
        //     title: "Special Adviser Special Duties",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 9.png",
        //   },
        //   {
        //     name: "Miss Ruth Udemba",
        //     title: "Special Adviser ICT",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 12.png",
        //   },
        //   {
        //     name: "Miss Ibukunmi Akugbe Aluko",
        //     title: "Special Adviser Intergovernmental Relations",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 13.png",
        //   },
        //   {
        //     name: "Mr Omosuyi Olaolu O.",
        //     title: "Special Adviser Tourism",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 16.png",
        //   },
        //   {
        //     name: "Prince Adeyinka Yusuf Aromire",
        //     title: "Special Adviser Youth and Sport",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 18.png",
        //   },
        //   {
        //     name: "Mr Samuel Olawale Tairu",
        //     title: "Special Adviser Health",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/NO 19.png",
        //   },
        //   {
        //     name: "Olasode Hammed O.",
        //     title: "Special Adviser, Market Development",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/20.png",
        //   },
        //   {
        //     name: "Babatunde Taofeek",
        //     title: "Special Adviser, City Care Ward A",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/21.png",
        //   },
        //   {
        //     name: "Aromire O. Samson",
        //     title: "Special Adviser, City Care Ward E",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/22.png",
        //   },
        //   {
        //     name: "Sandra Ilawole",
        //     title: "Special Adviser Elderly Affairs",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/23.png",
        //   },
        //   {
        //     name: "Oniyitan Modupe Grace",
        //     title: "Special Adviser Civic Engagement",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/24.png",
        //   },
        //   {
        //     name: "Olayiwola Adekunle",
        //     title: "Special Adviser, Community Affairs",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/25.png",
        //   },
        //   {
        //     name: "Adesola Adesanya-Atiroko",
        //     title: "Special Adviser, City Care Ward C",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/26.png",
        //   },
        //   {
        //     name: "Olusanya Olufemi",
        //     title: "Special Adviser, City Care Ward D",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/27.png",
        //   },
        //   {
        //     name: "Babalola Bankole Mogaji",
        //     title: "Special Adviser, Boundary Matters",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/28.png",
        //   },
        //   {
        //     name: "Arugba Michael",
        //     title: "Special Adviser, City Care Ward B",
        //     img: "/image/APAPA%20COUNCIL%20PHOTOS_/Supervisors%20&%20Special%20Advisors_/29.png",
        //   },
        // ],
      },
    ],
  },
];
