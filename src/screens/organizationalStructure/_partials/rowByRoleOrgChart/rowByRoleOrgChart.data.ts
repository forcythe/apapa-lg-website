/* eslint-disable @typescript-eslint/no-explicit-any */
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
        role: "Executive Chairman",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Executive Chairman of the Local Government",
        badgeTitle: "EXECUTIVE CHAIRMAN",
        overview:
          "The Executive Chairman of the local government is the chief executive officer and is responsible for overseeing the implementation of policies and day-to-day administrative operations. This role is central to local governance, as the chairman manages the executive functions and ensures the local government’s activities align with the policies set by the elected council.",
        name: "Hon. Idowu Adejumoke Senbanjo",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
      },
    ],
  },
  {
    rowId: 2,
    roles: [
      {
        id: "vice-chairman",
        role: "Vice Chairman",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Vice Chairman of the Local Government",
        badgeTitle: "VICE CHAIRMAN",
        overview:
          "The Vice Chairman of the local government serves as the deputy to the Executive Chairman and assists in the execution of the local government’s functions. The Vice Chairman’s role is typically focused on supporting the Chairman in administrative duties and stepping in when the Chairman is unavailable.",
        name: "MRS ADEBANJI S.O",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Support to the Executive Chairman",
            desc: "The Vice Chairman assists the Executive Chairman in the administration and implementation of policies and projects, helping to ensure that the local government operates efficiently.",
          },
          {
            id: 2,
            title: "Substitute Leadership",
            desc: "In the event that the Executive Chairman is absent due to illness, travel, or other reasons, the Vice Chairman assumes the Chairman’s duties and ensures continuity in leadership and governance.",
          },
          {
            id: 3,
            title: "Overseeing Specific Departments or Projects",
            desc: "The Vice Chairman may be assigned specific responsibilities or areas of focus, such as overseeing certain departments, programs, or community projects within the local government.",
          },
          {
            id: 4,
            title: "Advisory Role",
            desc: "The Vice Chairman often provides advice to the Executive Chairman, offering insights on various administrative and policy matters, and may help in decision-making processes.",
          },
          {
            id: 5,
            title: "Public Engagement",
            desc: "The Vice Chairman may also engage with the public, representing the local government in community events, meetings, and public consultations, ensuring strong relationships with residents.",
          },
          {
            id: 6,
            title: "Policy Monitoring",
            desc: "The Vice Chairman can be involved in monitoring the implementation of policies, reviewing the performance of programs, and making recommendations for improvements or adjustments.",
          },
          {
            id: 7,
            title: "Collaboration and Coordination",
            desc: "Like the Executive Chairman, the Vice Chairman may also work with other stakeholders, such as other levels of government, local businesses, and community organizations.",
          },
          {
            id: 8,
            title: "Succession Planning",
            desc: "The Vice Chairman often serves as a potential successor to the Executive Chairman, and as such, the position requires a deep understanding of local government operations and responsibilities.",
          },
        ],
      },
      {
        id: "spacer-1",
        role: "",
        isSpacer: true,
      },
      {
        id: "council-manager",
        role: "Council Manager",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Council Manager",
        badgeTitle: "COUNCIL MANAGER",
        overview:
          "The Council Manager for a local government is responsible for the day-to-day administrative operations and management of the local government’s activities, serving as the chief executive officer.",
        name: "MRS ADEBANJI S.O",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Executive Leadership",
            desc: "Leading the overall administration of the local government, ensuring the implementation of policies set by the elected council and overseeing the operations of all municipal departments.",
          },
          {
            id: 2,
            title: "Policy Implementation",
            desc: "Translating the decisions and policies of the elected council into actionable plans and ensuring their effective execution across the local government.",
          },
          {
            id: 3,
            title: "Budget and Financial Management",
            desc: "Overseeing the preparation and implementation of the local government’s budget, ensuring that financial resources are allocated effectively and responsibly, and monitoring spending to stay within budget constraints.",
          },
          {
            id: 4,
            title: "Staff Management",
            desc: "Hiring, supervising, and managing senior staff, including department heads, ensuring that all municipal services are delivered efficiently and effectively. Providing leadership, support, and performance evaluations for staff.",
          },
          {
            id: 5,
            title: "Council Support and Communication",
            desc: "Acting as the primary liaison between the elected council and the local government administration. Preparing reports, providing advice, and ensuring the council is informed of key issues, challenges, and opportunities.",
          },
          {
            id: 6,
            title: "Strategic Planning and Development",
            desc: "Leading long-term strategic planning and community development efforts, addressing local needs, and guiding the local government towards sustainable growth and development.",
          },
          {
            id: 7,
            title: "Community Relations",
            desc: "Engaging with the community to understand their needs, address concerns, and ensure that local government services meet public expectations. Acting as a spokesperson for the local government in public matters.",
          },
          {
            id: 8,
            title: "Regulatory Compliance",
            desc: "Ensuring that the local government operates in compliance with laws, regulations, and policies at the local, state, and federal levels.",
          },
          {
            id: 9,
            title: "Crisis and Emergency Management",
            desc: "Leading the local government’s response to emergencies or crises, including coordinating resources, managing public information, and ensuring an effective response.",
          },
        ],
      },
      {
        id: "s-l-g",
        role: "SLG",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Secretary to the Local Government",
        // badgeTitle: "VICE CHAIRMAN",
        overview:
          "The Secretary to the Local Government is a senior administrative officer who plays a key role in supporting the local government’s governance and ensuring that its administrative processes run smoothly. The position typically involves both high-level coordination and operational responsibilities.ß",
        // name: "MRS ADEBANJI S.O",
        // introduction:
        //   "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Administrative Support",
            desc: "Providing crucial administrative support to the local government council, including scheduling meetings, preparing agendas, taking minutes, and ensuring the smooth functioning of council sessions and decision-making.",
          },
          {
            id: 2,
            title: "Record Keeping and Documentation",
            desc: "Maintaining and managing official records such as council meeting minutes, resolutions, official correspondence, contracts, and other critical documents, ensuring accuracy, accessibility, and compliance with regulations.",
          },
          {
            id: 3,
            title: "Policy Coordination",
            desc: "Assisting in the development, implementation, and monitoring of policies adopted by the local government council. This includes ensuring that policies are executed effectively and in alignment with local governance objectives.",
          },
          {
            id: 4,
            title: "Liaison Between Elected Officials and Administration",
            desc: "Serving as the main point of contact between the elected council members, the executive arm (such as the local government chairman or mayor), and administrative staff, ensuring communication is clear and timely.",
          },
          {
            id: 5,
            title: "Legal and Regulatory Compliance",
            desc: "Ensuring that the local government’s activities and decisions comply with all relevant laws, regulations, and procedural requirements. This includes overseeing the preparation and review of legal documents.",
          },
          {
            id: 6,
            title: "Public Relations and Communication",
            desc: "Managing official correspondence and communication between the local government and the public, ensuring that information is disseminated clearly and promptly to stakeholders.",
          },
          {
            id: 7,
            title: "Support in Election and Appointment Processes",
            desc: "Assisting with the electoral process for local government positions, including managing election records, and handling official documentation for the appointment of key staff members.",
          },
          {
            id: 8,
            title: "Advisory Role",
            desc: "Offering advice to the council on procedural matters, governance best practices, and ensuring that meetings and decision-making processes are in accordance with established rules and regulations.",
          },
          {
            id: 9,
            title: "Supervision and Oversight",
            desc: "Supervising administrative staff within the local government office, ensuring efficient handling of clerical tasks, documentation, and public inquiries.",
          },
        ],
      },
      {
        id: "legislative-arm",
        role: "Legislative Arm",
        img: "/image/placeholder.jpeg",
      },
    ],
  },
  {
    rowId: 3,
    roles: [
      {
        id: "supervisors",
        role: "Supervisors",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Council Supervisors",
        // badgeTitle: "VICE CHAIRMAN",
        overview:
          "Council Supervisors in a local government are elected or appointed officials responsible for overseeing the implementation of various programs, projects, and services within specific sectors or departments. They serve as a link between the elected council and the local community, ensuring that the local government's policies and decisions are effectively executed at the grassroots level.",
        // name: "MRS ADEBANJI S.O",
        // introduction:
        //   "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Oversight of Local Services and Projects",
            desc: "Supervisors are tasked with overseeing the delivery of services within their assigned sectors, which may include education, health, infrastructure, agriculture, housing, and others.",
          },
          {
            id: 2,
            title: "Policy Implementation",
            desc: "Council supervisors ensure that local government policies, decisions, and plans are implemented at the community level. They work with department heads and staff to ensure that all council resolutions and directives are carried out effectively.",
          },
          {
            id: 3,
            title: "Community Engagement and Representation",
            desc: "Supervisors represent the interests of their constituencies within the local government council. They engage with the community, listen to their concerns, and provide feedback to the council to help shape decisions. ",
          },
          {
            id: 4,
            title: "Monitoring and Reporting",
            desc: "They monitor the performance of various programs and services within their areas of responsibility and report on progress to the local government council. ",
          },
          {
            id: 5,
            title: "Resource Allocation",
            desc: "Supervisors may have a role in allocating resources within their departments or areas of responsibility, ensuring that the available budget is used effectively to meet community needs.",
          },
          {
            id: 6,
            title: "Collaboration with Other Stakeholders",
            desc: "They work closely with other local government officials, external partners, NGOs, and the private sector to address local issues and implement development initiatives. ",
          },
          {
            id: 7,
            title: "Policy Advice and Development",
            desc: "Supervisors provide input on the development of policies or programs, offering insights based on their knowledge of the needs of the community and the effectiveness of existing services.",
          },
          {
            id: 8,
            title: "Conflict Resolution",
            desc: "They play a role in resolving conflicts within the community, mediating disputes, and ensuring that local government actions are in the best interests of residents.",
          },
          {
            id: 9,
            title: "Supervision of Staff and Activities",
            desc: "Council supervisors are responsible for supervising staff within their sector or department, ensuring that employees adhere to work standards, policies, and regulations.",
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
        role: "Head, Works & Infrastructure Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Works & Infrastructure",
        badgeTitle: "HEAD OF WORKS AND INFRASTRUCTURE",
        overview:
          "The Head of Works and Infrastructure Department typically oversees the planning, development, and maintenance of infrastructure projects within an organization or municipality.",
        name: "ENGR. OLUWADAMILOLA SAMSON OYEGBAMI",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Project Management",
            desc: "Leading various construction and infrastructure projects, ensuring they are completed on time, within budget, and to required specifications.",
          },
          {
            id: 2,
            title: "Strategic Planning",
            desc: "Developing long-term plans for infrastructure development and maintenance, aligning projects with community or organizational goals.",
          },
          {
            id: 3,
            title: "Budgeting and Financial Management",
            desc: "Managing the financial aspects of projects, including preparing budgets, monitoring expenditures, and securing funding.",
          },
          {
            id: 4,
            title: "Regulatory Compliance",
            desc: "Ensuring all projects comply with local, state, and federal regulations and policies, including environmental standards.",
          },
          {
            id: 5,
            title: "Team Leadership",
            desc: "Supervising and coordinating a team of engineers, architects, and construction workers, fostering collaboration and productivity.",
          },
          {
            id: 6,
            title: "Stakeholder Engagement",
            desc: "Communicating with various stakeholders, including government agencies, contractors, and the public, to gather input and provide updates on projects.",
          },
          {
            id: 7,
            title: "Maintenance Oversight",
            desc: "Establishing protocols for the ongoing maintenance of infrastructure to ensure safety and longevity.",
          },
          {
            id: 8,
            title: "Risk Management",
            desc: "Identifying potential risks associated with infrastructure projects and developing strategies to mitigate them.",
          },
        ],
      },
      {
        id: "head-agric-and-social-services",
        role: "Head, Agric & Social Services Department",
        bannerTitle: "Agric & Social Services",
        badgeTitle: "HEAD OF AGRIC AND SOCIAL SERVICES",
        img: "/image/placeholder.jpeg",
        overview:
          "The Head of Agriculture and Social Services Department typically focuses on enhancing agricultural productivity and promoting social welfare within a community or organization.",
        name: "MRS OLABOWALE TAIWO AKABASORUN",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Agricultural Development",
            desc: "Overseeing programs that support farmers, including offering training, resources, and technology to improve crop yield and sustainable practices.",
          },
          {
            id: 2,
            title: "Social Services",
            desc: "Developing and implementing social programs aimed at improving the quality of life for community members, such as health services, education initiatives, and poverty alleviation strategies.",
          },
          {
            id: 3,
            title: "Policy Development",
            desc: "Formulating policies related to agriculture and social services that align with governmental and community objectives, ensuring the sustainable use of resources.",
          },
          {
            id: 4,
            title: "Research and Innovation",
            desc: "Encouraging agricultural research to introduce innovative practices and technologies that can enhance food production and sustainability.",
          },
          {
            id: 5,
            title: "Community Engagement",
            desc: "Collaborating with local communities, stakeholders, and organizations to identify needs and implement programs that address those needs.",
          },
          {
            id: 6,
            title: "Funding and Budget Management",
            desc: "Securing funding for agricultural and social programs, managing budgets, and ensuring the efficient allocation of resources.",
          },
          {
            id: 7,
            title: "Monitoring and Evaluation",
            desc: "Evaluating the effectiveness of programs and initiatives, gathering data to assess impact, and making improvements as necessary.",
          },
          {
            id: 8,
            title: "Training and Capacity Building",
            desc: "Conducting workshops and training sessions for farmers and community members to build skills and knowledge in agriculture and social services.",
          },
        ],
      },
      {
        id: "head-education-and-library-services",
        role: "Head, Education & Library Services Department",
        bannerTitle: "Education & Library Services",
        badgeTitle: "HEAD OF EDUCATION AND LIBRARY SERVICES",
        img: "/image/placeholder.jpeg",
        overview:
          "The Head of Education and Library Services Department is responsible for overseeing educational programs and library services within a community or organization.",
        name: "MR MAKINWA OLANIYI BABATUNDE",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Program Development",
            desc: "Designing and implementing educational programs and initiatives that cater to various age groups, academic levels, and community needs.",
          },
          {
            id: 2,
            title: "Library Management",
            desc: "Overseeing the operations of public or institutional libraries, including collection development, resource management, and library services.",
          },
          {
            id: 3,
            title: "Curriculum Oversight",
            desc: "Collaborating with educational institutions to develop and enhance curricula, ensuring alignment with educational standards and community needs.",
          },
          {
            id: 4,
            title: "Staff Leadership",
            desc: "Managing educational and library personnel, providing training and support to enhance service delivery and professional development.",
          },
          {
            id: 5,
            title: "Community Engagement",
            desc: "Building partnerships with schools, community organizations, and stakeholders to promote educational opportunities and library usage.",
          },
          {
            id: 6,
            title: "Budget Management",
            desc: "Preparing and overseeing budgets for educational programs and library services, ensuring effective allocation of resources.",
          },
          {
            id: 7,
            title: "Advocacy and Policy Development",
            desc: "Advocating for educational initiatives and library services, influencing public policy, and securing funding at local, state, or federal levels.",
          },
          {
            id: 8,
            title: "Monitoring and Assessment",
            desc: "Evaluating the effectiveness of educational programs and library services, using data to inform improvements and report outcomes to stakeholders.",
          },
        ],
      },
      {
        id: "head-planning-budget-research-statistics",
        role: "Head, Planning budget, Research & Statistics Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Planning, Budget, Research & Statistics",
        badgeTitle: "HEAD OF PLANNING, BUDGET, RESEARCH & STATISTICS",
        overview:
          "The Head of Planning, Budget, Research & Statistics is responsible for overseeing the planning, budgeting, research, and statistical functions within an organization or institution.",
        name: "MRS OLAJUMOKE ELIZABETH AKINLEHIN",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Strategic Planning",
            desc: "Leading the development and implementation of long-term strategic plans to guide the organization's goals, objectives, and resource allocation.",
          },
          {
            id: 2,
            title: "Budget Management",
            desc: "Overseeing the preparation, allocation, and monitoring of the organization's budget, ensuring efficient use of resources and alignment with strategic priorities.",
          },
          {
            id: 3,
            title: "Research Oversight",
            desc: "Coordinating and overseeing research activities, ensuring that research is relevant, data-driven, and aligned with organizational goals.",
          },
          {
            id: 4,
            title: "Statistical Analysis",
            desc: "Collecting, analyzing, and interpreting data to inform decision-making, policy development, and performance evaluation. This may include preparing reports and dashboards for leadership and stakeholders.",
          },
          {
            id: 5,
            title: "Policy Development",
            desc: "Developing and implementing policies related to planning, budgeting, and research to ensure consistency, transparency, and accountability across departments.",
          },
          {
            id: 6,
            title: "Forecasting and Reporting",
            desc: "Providing forecasts for financial and resource needs and preparing regular reports on performance, budget status, and research findings for internal and external stakeholders.",
          },
          {
            id: 7,
            title: "Collaboration with Stakeholders",
            desc: "Working closely with senior management, department heads, and external partners to ensure effective planning, budgeting, and research processes that support the organization's objectives.",
          },
          {
            id: 8,
            title: "Continuous Improvement",
            desc: "Identifying opportunities for process improvements and ensuring that planning, budget, research, and statistical practices align with best practices and evolving organizational needs.",
          },
        ],
      },
      {
        id: "head-wapa",
        role: "Head, WAPA Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Women Affairs and Poverty Alleviation",
        badgeTitle: "HEAD OF WOMEN AFFAIRS AND POVERTY ALLEVIATION",
        overview:
          "The Head of Women Affairs and Poverty Alleviation is responsible for leading initiatives and programs aimed at improving the welfare of women and alleviating poverty within a community or organization.",
        name: "MRS OLAJUMOKE ELIZABETH AKINLEHIN",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Policy Development and Implementation",
            desc: "Designing and implementing policies that promote gender equality, support women's rights, and reduce poverty. This may involve advocating for legal and social reforms.",
          },
          {
            id: 2,
            title: "Program Management",
            desc: "Overseeing programs that focus on empowering women, providing economic opportunities, and addressing the root causes of poverty. These may include vocational training, microfinance support, or health and education initiatives.",
          },
          {
            id: 3,
            title: "Resource Mobilization",
            desc: "Securing funding and resources to support programs and initiatives aimed at improving the living standards of women and those affected by poverty.",
          },
          {
            id: 4,
            title: "Collaboration and Partnerships",
            desc: "Working with other government departments, non-governmental organizations (NGOs), and community groups to address poverty and gender inequality in a coordinated manner.",
          },
          {
            id: 5,
            title: "Monitoring and Evaluation",
            desc: "Assessing the effectiveness of policies and programs, collecting data on their impact, and ensuring that services are reaching the intended populations.",
          },
          {
            id: 6,
            title: "Capacity Building",
            desc: "Providing training and support to women, community leaders, and staff to help them develop skills and knowledge that improve their socio-economic status.",
          },
          {
            id: 7,
            title: "Data Collection and Reporting",
            desc: "Gathering data on women's empowerment and poverty alleviation efforts to inform decision-making and policy adjustments, and reporting outcomes to stakeholders.",
          },
        ],
      },
      {
        id: "head-primary-health-care-services",
        role: "Head, Primary Health Care Services Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Primary Health Care Service",
        badgeTitle: "HEAD OF PRIMARY HEALTH CARE SERVICE",
        overview:
          "The Head of Primary Health Care Service is responsible for overseeing the delivery of essential healthcare services at the community level, focusing on prevention, early detection, and treatment of common health issues.",
        name: "DR OLUDOLAPO SOTUNDE",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Program Management",
            desc: "Designing, implementing, and overseeing primary health care programs, ensuring they address the health needs of the population, such as maternal and child health, immunization, disease prevention, and health education.",
          },
          {
            id: 2,
            title: "Resource Allocation and Management",
            desc: "Ensuring the proper allocation of resources, including staff, equipment, and medications, to deliver effective primary health care services.",
          },
          {
            id: 3,
            title: "Staff Supervision and Training",
            desc: "Leading and managing primary healthcare professionals (e.g., doctors, nurses, community health workers), providing training, and ensuring quality service delivery.",
          },
          {
            id: 4,
            title: "Quality Assurance",
            desc: "Developing and enforcing standards and protocols for healthcare delivery, ensuring services meet established quality and safety standards.",
          },
          {
            id: 5,
            title: "Community Engagement",
            desc: "Engaging with local communities to raise awareness about health issues, encourage healthy behaviors, and ensure services are accessible and culturally appropriate.",
          },
          {
            id: 6,
            title: "Health Promotion and Disease Prevention",
            desc: "Coordinating public health campaigns to prevent common diseases, improve hygiene, and promote healthy lifestyles.",
          },
          {
            id: 7,
            title: "Monitoring and Evaluation",
            desc: "Tracking the performance and impact of health programs, collecting data on service delivery, and making improvements based on findings.",
          },
          {
            id: 8,
            title: "Collaboration with Other Health Services",
            desc: "Coordinating with other healthcare levels, such as secondary and tertiary care, to ensure continuity of care for patients who need specialized treatment.",
          },
          {
            id: 9,
            title: "Budget and Financial Management",
            desc: "Overseeing the department's budget, ensuring that resources are used efficiently and effectively to support primary health care services.",
          },
        ],
      },
      {
        id: "head-environmental-services-department",
        role: "Head, Environmental  Services Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Environmental Services",
        badgeTitle: "DIRECTOR ENVIRONMENTAL SERVICES",
        overview:
          "The Head of Environmental Services is responsible for overseeing the management and protection of the environment within an organization or community.",
        name: "MR OBIKOYA BABATUNDE ISAAC",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Environmental Policy Development",
            desc: "Developing and implementing policies and strategies aimed at protecting the environment, ensuring sustainability, and complying with environmental regulations and standards.",
          },
          {
            id: 2,
            title: "Environmental Management",
            desc: "Managing programs related to waste management, recycling, pollution control, water and air quality, and land conservation to minimize environmental impact.",
          },
          {
            id: 3,
            title: "Resource Management",
            desc: "Overseeing the sustainable use of natural resources, including energy efficiency initiatives, water conservation, and resource recycling programs.",
          },
          {
            id: 4,
            title: "Compliance and Reporting",
            desc: "Ensuring that the organization or community complies with environmental laws, regulations, and standards. Preparing reports for internal stakeholders and regulatory agencies.",
          },
          {
            id: 5,
            title: "Staff Supervision and Training",
            desc: "Leading and managing a team of environmental professionals, providing training on best practices, safety standards, and environmental regulations.",
          },
          {
            id: 6,
            title: "Sustainability Initiatives",
            desc: "Promoting and implementing sustainability initiatives, such as green building practices, renewable energy use, and reducing carbon footprints.",
          },
          {
            id: 7,
            title: "Environmental Education and Awareness",
            desc: "Conducting outreach and awareness programs to educate the community or employees about environmental issues, sustainability practices, and eco-friendly behaviors.",
          },
          {
            id: 8,
            title: "Monitoring and Evaluation",
            desc: "Monitoring the effectiveness of environmental programs, tracking key environmental indicators, and making improvements as necessary.",
          },
          {
            id: 9,
            title: "Emergency Response and Risk Management",
            desc: "Developing plans and protocols for responding to environmental emergencies such as spills, pollution events, or natural disasters.",
          },
        ],
      },
      {
        id: "clerk-of-the-house",
        role: "Clerk of the House",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Clerk of the Legislative Arm",
        badgeTitle: "COUNCIL CLERK",
        overview:
          "The Clerk of the Legislative Arm is a key administrative official responsible for overseeing the legislative processes and ensuring the smooth operation of the legislative body, such as a parliament or council.",
        name: "MR ADEBOMI ABAYOMI",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Legislative Support",
            desc: "Assisting in the preparation of legislative agendas, documents, and agendas for parliamentary or council sessions, ensuring that all materials are available to members in a timely manner.",
          },
          {
            id: 2,
            title: "Record Keeping and Documentation",
            desc: "Maintaining accurate records of legislative proceedings, including debates, votes, and decisions. This includes the preparation of official minutes, transcripts, and reports.",
          },
          {
            id: 3,
            title: "Procedural Guidance",
            desc: "Providing guidance to legislators on parliamentary rules, procedures, and regulations to ensure that legislative activities are conducted properly and in compliance with established rules.",
          },
          {
            id: 4,
            title: "Administrative Management",
            desc: "Managing administrative functions, including coordinating communication between members of the legislative body, staff, and the public. This may involve handling correspondence and organizing committee meetings.",
          },
          {
            id: 5,
            title: "Legislation and Bill Tracking",
            desc: "Assisting in the drafting, review, and tracking of bills and resolutions as they progress through the legislative process.",
          },
          {
            id: 6,
            title: "Public Engagement and Transparency",
            desc: "Ensuring that legislative proceedings and decisions are accessible to the public by maintaining transparency and facilitating public access to records, proceedings, and documents.",
          },
          {
            id: 7,
            title: "Election of Officers",
            desc: "In some jurisdictions, the Clerk may be responsible for overseeing the election of key officers within the legislative body, such as the Speaker or President of the Assembly.",
          },
          {
            id: 8,
            title: "Supporting the Speaker/Chairperson",
            desc: "Providing administrative support to the Speaker or Chairperson of the legislative body during sessions, including managing the agenda and coordinating the order of business.",
          },
          {
            id: 9,
            title: "Protocol and Compliance",
            desc: "Ensuring that the legislative body adheres to legal and constitutional requirements, including compliance with rules of order and statutory obligations.",
          },
        ],
      },
    ],
  },
  {
    rowId: 5,
    roles: [
      {
        id: "head-ict-unit",
        role: "Head, I.C.T Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle:
          "Head of ICT (Information and Communication Technology) Unit",
        badgeTitle: "HEAD OF ICT ",
        overview:
          "The Head of ICT (Information and Communication Technology) Unit is responsible for overseeing the development, implementation, and management of the organization's technology infrastructure and services.",
        name: "MR GISANRI SAHEED",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "ICT Strategy and Planning",
            desc: "Developing and implementing the ICT strategy that aligns with the organization’s goals, ensuring that technology supports operations, innovation, and overall growth.",
          },
          {
            id: 2,
            title: "Infrastructure Management",
            desc: "Overseeing the management of the organization's IT infrastructure, including networks, servers, hardware, and software systems, to ensure reliability, security, and scalability.",
          },
          {
            id: 3,
            title: "System Integration and Support",
            desc: "Ensuring that various IT systems (software, hardware, databases) are integrated effectively, and providing technical support to resolve issues and optimize system performance.",
          },
          {
            id: 4,
            title: "Cyber-security",
            desc: "Managing and implementing cyber-security measures to protect the organization’s data, networks, and systems from cyber threats, ensuring compliance with data protection regulations.",
          },
          {
            id: 5,
            title: "Innovation and Technology Upgrades",
            desc: "Identifying emerging technologies that could improve organizational efficiency, and managing the implementation of new systems or upgrades to existing technologies.",
          },
          {
            id: 6,
            title: "Data Management and Analytics",
            desc: "Overseeing data management processes, ensuring data integrity, accessibility, and compliance with regulations, and leveraging data analytics to support decision-making.",
          },
          {
            id: 7,
            title: "Team Leadership and Development",
            desc: "Leading and managing the ICT team, providing guidance, training, and professional development opportunities to ensure effective performance and up-to-date knowledge of technology trends.",
          },
          {
            id: 8,
            title: "Budget and Resource Management",
            desc: "Managing the ICT department’s budget, ensuring the efficient use of resources, and evaluating the cost-effectiveness of technology investments.",
          },
          {
            id: 9,
            title: "User Training and Support",
            desc: "Providing training and support to end-users, ensuring they are equipped to use technology efficiently, and addressing any technical concerns or needs.",
          },
        ],
      },
      {
        id: "head-legal-services",
        role: "Head, Legal Services Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Legal Unit",
        badgeTitle: "HEAD OF LEGAL UNIT",
        overview:
          "The Head of Legal Unit is responsible for overseeing the legal affairs of an organization, providing legal advice, ensuring compliance with laws and regulations, and managing legal risks.",
        name: "MR OGUNDARE BABATUNDE  ADEBAYOMI",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Legal Advisory",
            desc: "Providing legal counsel to senior management, departments, and other stakeholders on various legal matters, including contracts, corporate governance, intellectual property, labor law, and dispute resolution.",
          },
          {
            id: 2,
            title: "Contract Management",
            desc: "Overseeing the drafting, review, and negotiation of contracts and agreements to ensure they are legally sound and protect the organization's interests.",
          },
          {
            id: 3,
            title: "Compliance Management",
            desc: "Ensuring that the organization complies with all applicable laws, regulations, and industry standards. This includes overseeing regulatory compliance, ethical practices, and corporate governance.",
          },
          {
            id: 4,
            title: "Dispute Resolution and Litigation",
            desc: "Managing legal disputes, including litigation, arbitration, and mediation. Representing the organization or coordinating with external counsel on legal proceedings.",
          },
          {
            id: 5,
            title: "Risk Management",
            desc: "Identifying and mitigating potential legal risks, advising on legal risk prevention, and developing strategies to protect the organization’s legal standing.",
          },
          {
            id: 6,
            title: "Legal Documentation and Record-Keeping",
            desc: "Ensuring proper documentation, record-keeping, and management of legal files and contracts, ensuring accessibility and compliance with regulatory requirements.",
          },
          {
            id: 7,
            title: "Policy Development",
            desc: "Assisting in the development and implementation of internal policies and procedures, ensuring they align with legal requirements and mitigate potential legal risks.",
          },
          {
            id: 8,
            title: "Training and Education",
            desc: "Providing legal training and guidance to staff on legal matters relevant to their roles, such as compliance, ethics, and contract management.",
          },
          {
            id: 9,
            title: "Liaison with External Counsel",
            desc: "Coordinating with external law firms or legal experts when specialized legal expertise is required, and managing relationships with these external parties.",
          },
        ],
      },
      {
        id: "head-tourism-unit",
        role: "Head, Tourism Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Tourism Unit",
        badgeTitle: "HEAD OF TOURISM UNIT",
        overview:
          "The Head of Tourism Unit for a local government is responsible for overseeing and promoting tourism within the local jurisdiction, aiming to boost the local economy, preserve cultural heritage, and improve the overall visitor experience.",
        name: "MRS ABIMBOLA OMOLOLA VICTORIA",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Tourism Development and Strategy",
            desc: "Developing and implementing strategies to promote tourism in the local area, identifying opportunities for growth, and ensuring alignment with the local government’s goals and community needs.",
          },
          {
            id: 2,
            title: "Destination Marketing",
            desc: "Promoting the local area as a tourist destination through marketing campaigns, digital platforms, events, and collaboration with travel agencies, tour operators, and other stakeholders.",
          },
          {
            id: 3,
            title: "Event Planning and Management",
            desc: "Organizing and supporting local events, festivals, and cultural activities that attract visitors, celebrate local traditions, and enhance the area's appeal.",
          },
          {
            id: 4,
            title: "Stakeholder Collaboration",
            desc: "Working closely with local businesses, hospitality providers, cultural organizations, and community leaders to enhance tourism infrastructure and services, ensuring that tourism benefits the local economy.",
          },
          {
            id: 5,
            title: "Tourism Product Development",
            desc: "Identifying and developing unique local tourism products and experiences, such as heritage tours, outdoor activities, local crafts, and food experiences, to attract visitors.",
          },
          {
            id: 6,
            title: "Sustainability and Responsible Tourism",
            desc: "Promoting sustainable tourism practices that minimize environmental impact and ensure the long-term viability of tourism in the area, while also benefiting the local community.",
          },
          {
            id: 7,
            title: "Visitor Services and Experience",
            desc: "Overseeing the development and maintenance of tourism-related facilities and services, such as visitor centers, signage, transportation, and information resources, to ensure a positive experience for tourists.",
          },
          {
            id: 8,
            title: "Research and Data Collection",
            desc: "Monitoring tourism trends, collecting visitor data, and conducting research to inform policy decisions and improve tourism offerings in the local area.",
          },
          {
            id: 9,
            title: "Regulations and Compliance",
            desc: "Ensuring that local tourism operations comply with relevant regulations, including zoning, licensing, and environmental standards, and working with other authorities to maintain a safe and welcoming environment for visitors.",
          },
        ],
      },
      {
        id: "head-procurement-unit",
        role: "Head, Procurement Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Procurement Unit",
        badgeTitle: "HEAD OF PROCUREMENT UNIT",
        overview:
          "The Head of Procurement Unit for a local government is responsible for managing and overseeing the procurement processes for goods, services, and works within the local government’s operations.",
        name: "MR OGUNDIMU JIMOH HASSAN",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Procurement Planning and Strategy",
            desc: "Developing and implementing procurement strategies and plans that align with the local government’s budget, policies, and objectives to ensure efficient and cost-effective procurement processes.",
          },
          {
            id: 2,
            title: "Vendor Management",
            desc: "Identifying, selecting, and managing relationships with suppliers and service providers, ensuring that contracts are negotiated fairly and meet the needs of the local government.",
          },
          {
            id: 3,
            title: "Tendering and Contracting",
            desc: "Overseeing the tendering process, including preparing tender documents, evaluating bids, and awarding contracts in compliance with local government regulations, policies, and procedures.",
          },
          {
            id: 4,
            title: "Compliance and Regulatory Oversight",
            desc: "Ensuring that all procurement activities comply with relevant laws, regulations, and government policies, promoting transparency, accountability, and fairness in the procurement process.",
          },
          {
            id: 5,
            title: "Budget and Resource Management",
            desc: "Managing the procurement budget, ensuring that expenditures align with financial resources and that all procurement activities are within budget constraints.",
          },
          {
            id: 6,
            title: "Monitoring and Evaluation",
            desc: "Monitoring the performance of vendors and contractors to ensure that goods, services, and works are delivered as per contractual terms, quality standards, and timelines. Addressing any issues or disputes that arise.",
          },
          {
            id: 7,
            title: "Risk Management",
            desc: "Identifying potential risks in the procurement process and taking steps to mitigate them, including ensuring proper due diligence and compliance checks are conducted on suppliers.",
          },
          {
            id: 8,
            title: "Staff Leadership and Training",
            desc: "Leading and managing the procurement team, providing guidance, training, and ensuring they adhere to best practices in procurement processes and ethical standards.",
          },
          {
            id: 9,
            title: "Reporting and Documentation",
            desc: "Maintaining accurate records of all procurement activities, including contracts, orders, and payments, and preparing reports for senior management and regulatory bodies.",
          },
        ],
      },
      {
        id: "apapa-officer",
        role: "Area Officers",
        img: "/image/placeholder.jpeg",
      },
    ],
  },
  {
    rowId: 6,
    roles: [
      {
        id: "head-admin-human-resources",
        role: "Head, Admin & Human Resources Department",
        img: "/image/placeholder.jpeg",
        bannerTitle:
          "Admin & Human Resources Department Functions & Operations",
        badgeTitle: "HEAD OF HUMAN RESOURCE",
        overview:
          "The Admin & Human Resources Department is critical in ensuring the smooth operation of the organization and managing its human capital. This department is responsible for a wide range of functions, including personnel management, office administration, and organizational development.",
        name: "MRS ADEDOYI E.O",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Recruitment and Staffing",
            desc: "Develop job descriptions, post job openings, and conduct interviews to select the best candidates. Manage the onboarding process for new hires.",
          },
          {
            id: 2,
            title: "Employee Relations",
            desc: "Serve as a point of contact for employee inquiries and concerns. Implement policies and procedures to promote a positive work environment.",
          },
          {
            id: 3,
            title: "Performance Management",
            desc: "Oversee employee performance evaluations and development plans. Facilitate training and development opportunities for staff.",
          },
          {
            id: 4,
            title: "Compensation and Benefits",
            desc: "Manage payroll, employee benefits, and compensation packages. Ensure compliance with labor laws and regulations regarding employee compensation.",
          },
          {
            id: 5,
            title: "Administrative Support",
            desc: "Maintain office supplies and equipment, and oversee facilities management. Organize and coordinate meetings, events, and training sessions.",
          },
          {
            id: 6,
            title: "Policy Development",
            desc: "Develop, implement, and update HR policies and procedures. Ensure all staff are informed about policies related to conduct, performance, and grievance handling.",
          },
          {
            id: 7,
            title: "Record-Keeping",
            desc: "Maintain accurate employee records and HR databases. Ensure confidentiality and compliance with data protection regulations.",
          },
        ],
      },
      {
        id: "head-finance-accounts",
        role: "Head, Finance & Accounts Department",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Finance & Accounts Department Functions & Operations",
        badgeTitle: "HEAD OF FINANCE AND ACCOUNTING",
        overview:
          "The Finance & Accounts Department is responsible for managing the local government’s financial health, ensuring transparency, and maintaining financial integrity. This department oversees financial reporting, accounting practices, and compliance with applicable regulations.",
        name: "MRS ADEPOJU-CONDE FOLUKE MARY",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Financial Reporting",
            desc: "Prepare timely and accurate financial statements, including profit and loss statements, balance sheets, and cash flow statements. Ensure compliance with relevant accounting standards and financial regulations.",
          },
          {
            id: 2,
            title: "Accounting Operations",
            desc: "Manage day-to-day accounting functions, including accounts payable and receivable, payroll, and general ledger maintenance. Implement and oversee internal controls to mitigate financial risks.",
          },
          {
            id: 3,
            title: "Cash Flow Management",
            desc: "Monitor cash flow and financial transactions to ensure the organization has sufficient liquidity to meet its obligations. Develop strategies for optimizing cash management and investments.",
          },
          {
            id: 4,
            title: "Financial Analysis",
            desc: "Conduct financial analysis and cost-benefit assessments to support decision-making. Provide insights into financial performance and identify areas for improvement.",
          },
          {
            id: 5,
            title: "Audit and Compliance",
            desc: "Coordinate internal and external audits and ensure compliance with financial regulations. Implement recommendations from audits to enhance financial controls and processes.",
          },
          {
            id: 6,
            title: "Tax Management",
            desc: "Prepare and file tax returns, ensuring compliance with tax laws. Provide guidance on tax planning and implications of financial decisions.",
          },
          {
            id: 7,
            title: "Stakeholder Communication",
            desc: "Communicate financial performance and budget status to senior management and other stakeholders. Prepare presentations and reports for the board and various committees.",
          },
          {
            id: 8,
            title: "Staff Development",
            desc: "Supervise, train, and develop finance and accounting staff to enhance their skills and efficiency. Foster a constructive work environment and promote continuous learning in financial practices.",
          },
        ],
      },
    ],
  },
  {
    rowId: 7,
    roles: [
      {
        id: "head-public-affairs-unit",
        role: "Head, Public Affairs Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Public Affairs Unit",
        badgeTitle: "HEAD OF PUBLIC AFFAIRS UNIT",
        overview:
          "The Head of Public Affairs Unit is responsible for managing the organization's public relations, communications, and media strategies to ensure a positive image and effective communication with both internal and external stakeholders.",
        name: "MRS OYEBIYI OYEKEMI",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Media Relations",
            desc: "Developing and maintaining relationships with the media, responding to inquiries, organizing press conferences, and ensuring that the organization’s messages are communicated effectively to the public.",
          },
          {
            id: 2,
            title: "Public Communication Strategy",
            desc: "Designing and implementing communication strategies that align with the organization's goals and ensure consistent messaging across all platforms (e.g., social media, websites, press releases).",
          },
          {
            id: 3,
            title: "Crisis Communication",
            desc: "Managing communication during crises or emergencies, ensuring that the organization’s response is clear, timely, and aligned with public interest and organizational values.",
          },
          {
            id: 4,
            title: "Content Creation",
            desc: "Overseeing the creation of content for various communication channels, including press releases, newsletters, speeches, reports, and social media posts.",
          },
          {
            id: 5,
            title: "Brand Management",
            desc: "Ensuring that the organization’s public image and brand are well-maintained, consistent, and positive. This includes managing the organization's reputation and responding to any negative publicity.",
          },
          {
            id: 6,
            title: "Stakeholder Engagement",
            desc: "Engaging with key stakeholders, such as government agencies, community organizations, and the public, to foster relationships and ensure that the organization’s actions are aligned with the needs and expectations of these groups.",
          },
          {
            id: 7,
            title: "Event Management",
            desc: "Organizing and overseeing public events, including conferences, community outreach programs, and corporate social responsibility initiatives, to promote the organization and engage with the public.",
          },
          {
            id: 8,
            title: "Internal Communications",
            desc: "Managing internal communication within the organization, ensuring that employees are informed about key developments and strategic goals, fostering a transparent and inclusive environment.",
          },
          {
            id: 9,
            title: "Monitoring and Reporting",
            desc: "Monitoring media coverage, public opinion, and the effectiveness of communication campaigns, and preparing reports to evaluate the success and impact of public relations efforts.",
          },
        ],
      },
      {
        id: "head-audit-unit",
        role: "Head, Audit Unit",
        img: "/image/placeholder.jpeg",
        bannerTitle: "Head of Audit Unit",
        badgeTitle: "HEAD OF AUDIT UNIT",
        overview:
          "The Head of Audit Unit is responsible for overseeing the auditing processes within an organization to ensure financial integrity, compliance with laws and regulations, and the effective use of resources",
        name: "MR ALADESUYI  ADEKUNLE OLUWADARE",
        introduction:
          "Hon. Idowu Adejumoke Senbanjo, the Executive Chairman of Apapa Local Government Council, brings extensive experience from both the public and private sectors. She holds a Bachelor of Arts (Hons) in Languages and Linguistics from the University of Jos and a Master of Arts in International Law and Diplomacy from the University of Lagos. Her professional career includes roles as Head of Public Sector – South-Western Nigeria, Team Leader in Retail Banking, and Head of Corporate Affairs at Metropolitan Bank. In public service, she has served as Special Assistant to the Lagos State Governor on Housing and Senior Special Assistant on Poverty Eradication. As a committed member of the All Progressives Congress (APC), Hon. Senbanjo has contributed significantly to the political and economic development of Apapa, making her a transformative leader for the community.",
        keyFunctions: [
          {
            id: 1,
            title: "Audit Planning and Strategy",
            desc: "Developing and implementing an annual audit plan that covers key areas of financial, operational, and compliance risk across the organization.",
          },
          {
            id: 2,
            title: "Internal Audits",
            desc: "Leading internal audits to assess the effectiveness of internal controls, financial systems, and risk management processes. Identifying areas of improvement and recommending corrective actions.",
          },
          {
            id: 3,
            title: "Risk Management",
            desc: "Identifying, evaluating, and reporting on potential financial or operational risks, ensuring that appropriate risk management strategies are in place.",
          },
          {
            id: 4,
            title: "Compliance Monitoring",
            desc: "Ensuring that the organization adheres to relevant laws, regulations, and policies, and reviewing the implementation of legal and regulatory requirements.",
          },
          {
            id: 5,
            title: "Financial Reviews",
            desc: "Conducting thorough reviews of financial statements and records to verify accuracy, completeness, and compliance with accounting standards and organizational policies..",
          },
          {
            id: 6,
            title: "Reporting",
            desc: "Preparing detailed audit reports for senior management, the board of directors, and external stakeholders, highlighting findings, recommendations, and any areas of concern.",
          },
          {
            id: 7,
            title: "Advisory Role",
            desc: "Providing advice to management on improving financial controls, operational efficiency, and risk mitigation measures based on audit findings.",
          },
          {
            id: 8,
            title: "Team Leadership and Training",
            desc: "Leading and managing the audit team, providing guidance, training, and development to ensure audits are performed effectively and in accordance with professional standards.",
          },
          {
            id: 9,
            title: "Follow-up on Audit Recommendations",
            desc: "Monitoring the implementation of audit recommendations, ensuring corrective actions are taken, and assessing their effectiveness.",
          },
        ],
      },
    ],
  },
];
