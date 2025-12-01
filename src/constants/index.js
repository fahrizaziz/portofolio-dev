export const myProjects = [
  {
    id: 1,
    title: "MotoMoto",
    description:
      "Mobile application for making parking payment transactions using Flutter with Laravel API and Xendit integration.",
    subDescription: [
      "Developed mobile application using Flutter framework.",
      "Integrated Xendit payment gateway for parking payment processing.",
      "Built backend API using Laravel with SQL database.",
      "Used VS Code and DBeaver as main development tools.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/motomoto.png",
    tags: [
      { id: 1, name: "Flutter", path: "/assets/logos/flutter.svg" },
      { id: 2, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 3, name: "Xendit", path: "/assets/logos/xendit.svg" },
      { id: 4, name: "SQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 2,
    title: "MAPS - Marketing Account Plan Summary",
    description:
      "Monitoring website for partner business information supporting AM visibility and performance tracking.",
    subDescription: [
      "Built using Laravel 10 and MySQL.",
      "Developed logic for account profile, contact information & spending data.",
      "Implemented scoring system, opportunity summary & account deletion logic.",
      "Improved partner monitoring flow for internal stakeholders.",
    ],
    href: "https://maps-update.telkomedika.com/",
    logo: "",
    image: "/assets/projects/maps.png",
    tags: [
      { id: 1, name: "Laravel 10", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 3,
    title: "POSKES",
    description:
      "Digital healthcare dashboard to monitor health service visit reports and patient records.",
    subDescription: [
      "Developed core logic for patient data input and report summary.",
      "Implemented total visits and total patient metrics.",
      "Built with Laravel 10 and MySQL database.",
    ],
    href: "https://poskes.telkomedika.com/",
    logo: "",
    image: "/assets/projects/poskes.png",
    tags: [
      { id: 1, name: "Laravel 10", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 4,
    title: "TM Health",
    description:
      "Digital healthcare platform developed in two major phases with different architectures and technology stacks. A long-term scalable health system supporting nationwide medical services.",
    subDescription: [
      "TM Health v1 – Built using Flutter and Laravel with MySQL database. Responsible for building mobile application features, health service flow, and API backend integration.",
      "TM Health v2 – Reengineered using microservice architecture with React.js, Nest.js, Flutter, MySQL, and MongoDB delivering improved scalability, modular system separation, and performance optimization.",
      "Integrated with over 500+ healthcare provider facilities across Indonesia.",
      "Developed end-to-end feature flow for both patient mobile experience and backend system architecture improvements."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/thealth.png", // Versi terbaru sebagai cover utama
    tags: [
      { id: 1, name: "Flutter", path: "/assets/logos/flutter.svg" },
      { id: 2, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 3, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 4, name: "Nest.js", path: "/assets/logos/nestjs.svg" },
      { id: 5, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 6, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
    versions: {
      v1: {
        title: "TM Health v1",
        stack: ["Flutter", "Laravel", "MySQL"],
        image: "/assets/projects/tmhealth-v1-cover.png",
        images: [
          "/assets/projects/tmhealth-v1-1.png",
          "/assets/projects/tmhealth-v1-2.png",
          "/assets/projects/tmhealth-v1-3.png",
        ]
      },
      v2: {
        title: "TM Health v2",
        stack: ["Flutter", "React.js", "Nest.js", "MySQL", "MongoDB"],
        image: "/assets/projects/tmhealth-v2-cover.png",
        images: [
          "/assets/projects/tmhealth-v2-1.png",
          "/assets/projects/tmhealth-v2-2.png",
          "/assets/projects/tmhealth-v2-3.png",
        ]
      }
    }
  },  
  {
    id: 5,
    title: "TM Hub",
    description:
      "Internal company gateway platform providing centralized access with SSO and RBAC-ACL security.",
    subDescription: [
      "Developed fullstack application using Laravel 10 and MySQL.",
      "Implemented RBAC-ACL and Single Sign-On authentication.",
      "Integrated automation workflows using n8n.",
      "Improved process efficiency and organizational operational visibility.",
    ],
    href: "https://tmhub.telkomedika.com/login",
    logo: "",
    image: "/assets/projects/tmhub.png",
    tags: [
      { id: 1, name: "Laravel 10", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 3, name: "n8n Automation", path: "/assets/logos/n8n.svg" },
      { id: 4, name: "SSO", path: "/assets/logos/sso.svg" },
    ],
  },
  {
    id: 6,
    title: "API Daily Combine",
    description:
      "Health claim integration API connected to external core systems for real-time status reporting.",
    subDescription: [
      "Developed backend API service using Laravel.",
      "Integrated with corporate core health system.",
      "Delivered fast & secure claim synchronization layer.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Laravel API", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
  {
    id: 7,
    title: "API Enrollment",
    description:
      "API service for registering new claim members and medical program participants.",
    subDescription: [
      "Built API endpoint for New Member Registration.",
      "Integrated with internal claim processing pipeline.",
      "Secure data process ensuring validation & auditing.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Laravel API", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6281212271964",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/fahriz-aziz-a4791619a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/fahrizaziz",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "IT Development Officer",
    job: "Telkomedika",
    date: "2024 - Now",
    contents: [
      "Mengawasi dan memberikan arahan kepada tim developer.",
      "Membuat dan mengembangkan aplikasi mobile.",
      "Membuat dan mengelola database.",
      "Mengembangkan dan membuat API.",
    ],
  },
  {
    title: "Fullstack Developer",
    job: "Equity Life Indonesia",
    date: "2022-2024",
    contents: [
      "Membuat standarisasi pengembangan aplikasi untuk platform mobile.",
      "Membuat dokumentasi terkait standarisasi framework aplikasi mobile.",
      "Menganalisa FSD dan mendetailkan requirement pengembangan aplikasi mobile.",
      "Membuat dokumen teknis terkait pengembangan aplikasi mobile.",
      "Mengembangkan API menggunakan Java Spring Boot dan NestJS.",
      "Membuat timeline estimasi pengerjaan project sesuai dengan desain FSD.",
      "Membuat API sesuai standarisasi serta timeline yang ditentukan.",
      "Membuat dokumen teknis terkait API.",
    ],
  },
  {
    title: "Flutter Developer",
    job: "Salvus",
    date: "2021-2022",
    contents: [
      "Mengembangkan aplikasi mobile menggunakan Flutter."
    ],
  },
  {
    title: "Flutter Developer",
    job: "Aneka Solusi Teknologi",
    date: "2021-2022",
    contents: [
      "Mengembangkan aplikasi mobile menggunakan Flutter."
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
