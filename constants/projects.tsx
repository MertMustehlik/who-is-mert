export interface Project {
  image: string;
  title: string;
  slug: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    image: "images/projects/vize-crm.jpeg",
    title: "Vize Başvuru Yönetim Sistemi",
    slug: "vize-basvuru-yonetim-sistemi",
    technologies: [
      "Laravel",
      "PostgreSQL",
      "Filament"
    ],
  },
  {
    image: "images/projects/shoot90.svg",
    title: "Shoot90",
    slug: "shoot90",
    technologies: [
      "Laravel",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Laravel Blade",
      "Laravel Reverb",
      "Push Notification",
    ],
  },
  {
    image: "images/projects/walltalk.svg",
    title: "WallTalk",
    slug: "walltalk",
    technologies: [
      "Laravel",
      "Vue.js",
      "Bootstrap",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Laravel Blade",
      "Laravel Reverb",
      "Push Notification",
    ],
  },
  {
    image: "images/projects/orbiba-robotics.png",
    title: "Orbiba Robotics – Çiftlik Yönetim ve Sosyal Platform",
    slug: "orbiba-robotics",
    technologies: [
      "Laravel",
      "RESTful API",
      "MySQL",
      "Laravel Blade",
      "Laravel Reverb",
      "Push Notification",
    ],
  },
  {
    image: "images/projects/netglow.png",
    title: "NetGlow - Yeni Nesil İş Akış Yönetim Yazılımı",
    slug: "netglow",
    technologies: ["Codeigniter", "MySQL", "Ajax", "Bootstrap", "RESTful API"],
  },
  {
    image: "images/projects/ibc.jpeg",
    title: "İngilizce Bilen Çocuklar",
    slug: "ingilizce-bilen-cocuklar",
    technologies: ["Laravel", "MySQL", "Laravel Blade"],
  },
  {
    image: "images/projects/pvplus.png",
    title: "PersonalvermittlungPlus",
    slug: "personalvermittlungplus",
    technologies: ["Laravel", "MySQL", "Laravel Blade", "Push Notification"],
  },
  {
    image: "images/projects/vento-medical.png",
    title: "Vento Medical",
    slug: "vento-medical",
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
  },
];
