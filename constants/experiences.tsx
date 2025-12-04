export interface Experience {
  company: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Asiste Software Agency",
    slug: "asiste-software-agency",
    title: "Software Developer",
    date: "08/2024 - 09/2025",
    location: "İzmir, Türkiye",
    type: "Hybrid",
    description: ["laravel_api_realtime_admin_vue_development"],
  },
  {
    company: "Netpus Yazılım",
    slug: "netpus-yazilim",
    title: "Software Developer",
    date: "01/2023 - 06/2024",
    location: "İzmir, Türkiye",
    type: "Hybrid",
    description: [
      "experience_crm_erp_cms",
      "contribution_to_laravel_backend_modules_and_integrations",
    ],
  },
  {
    company: "Metadata Bilişim",
    slug: "metadata-bilisim",
    title: "Intern",
    date: "06/2021 - 08/2021",
    location: "İzmir, Türkiye",
    type: "On-site",
    description: ["kotlin_project_experience"],
  },
  {
    company: "Türk Telekom",
    slug: "turk-telekom",
    title: "Intern",
    date: "09/2018 - 06/2019",
    location: "İzmir, Türkiye",
    type: "On-site",
    description: []
  },
];
