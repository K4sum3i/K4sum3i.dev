type LocalizedText = {
  en: string;
  es: string;
};

type Project = {
  id: number;
  slug: string;
  title: string;
  description: LocalizedText;
  longDescription: LocalizedText;
  tags: string[];
  year: string;
  role: LocalizedText;
  links: {
    live?: string;
    github: string;
  };
  features: LocalizedText[];
  techStack: {
    category: string;
    items: string[];
  }[];
  images: {
    thumbnail: string;
    gallery: string[];
  };
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "itinerum",
    title: "Itinerum",
    description: {
      en: "Itinerum helps you discover Málaga’s sights and create custom itineraries with saved routes.",
      es: "Itinerum te ayuda a descubrir los puntos de interés de Málaga y a crear itinerarios personalizados con rutas guardadas.",
    },
    longDescription: {
      en: "",
      es: "",
    },
    tags: ["JS", "Tailwind", "PHP", "MySQL"],
    year: "2025",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    links: {
      live: "",
      github: "https://github.com/K4sum3i/Itinerum",
    },
    features: [
      {
        en: "Search and retrieve points of interest in Málaga",
        es: "Buscar y obtener puntos de interés en Málaga",
      },
      {
        en: "Generate personalized itineraries based on user preferences",
        es: "Generar itinerarios personalizados según las preferencias del usuario",
      },
      {
        en: "Store and manage itineraries in a database",
        es: "Guardar y gestionar itinerarios en una base de datos",
      },
      {
        en: "View previously saved itineraries",
        es: "Consultar itinerarios guardados previamente",
      },
      {
        en: "Clean, desktop-focused user interface",
        es: "Interfaz limpia orientada a escritorio",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["JS", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["PHP", "MySQL"],
      },
    ],
    images: {
      thumbnail: "/itinerum/index.webp",
      gallery: ["/itinerum/index.webp", "/itinerum/Itinerum.webp"],
    },
  },

  {
    id: 2,
    slug: "voxhire",
    title: "VoxHire",
    description: {
      en: "AI platform for voice-based technical practice and subscription management.",
      es: "Plataforma de IA para practicar entrevistas técnicas por voz y gestionar suscripciones.",
    },
    longDescription: {
      en: "",
      es: "",
    },
    tags: ["Nextjs", "Tailwind", "Clerk", "Stripe", "Prisma", "Supabase"],
    year: "2025",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    links: {
      live: "",
      github: "https://github.com/K4sum3i/VoxHire",
    },
    features: [
      {
        en: "Voice AI Interviews: Job interview simulations with an AI-powered voice assistant.",
        es: "Entrevistas por voz con IA: simulaciones de entrevistas de trabajo con un asistente de voz impulsado por IA.",
      },
      {
        en: "Secure Authentication: User login and management with Clerk.",
        es: "Autenticación segura: inicio de sesión y gestión de usuarios con Clerk.",
      },
      {
        en: "Subscription Plans: Payment and subscription integration with Stripe.",
        es: "Planes de suscripción: integración de pagos y suscripciones con Stripe.",
      },
      {
        en: "Personalized Dashboard: User dashboard to track progress and manage subscriptions.",
        es: "Panel personalizado: panel donde el usuario puede seguir su progreso y gestionar sus suscripciones.",
      },
      {
        en: "Deployment on Vercel: App deployed for free on Vercel.",
        es: "Despliegue en Vercel: aplicación desplegada en Vercel.",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 15", "React", "Tailwind CSS + ShadCN"],
      },
      {
        category: "Backend",
        items: ["Supabase", "Prisma", "PostgreSQL"],
      },
      {
        category: "Authentication, Payments & AI",
        items: ["Clerk", "Stripe", "Vapi AI"],
      },
    ],
    images: {
      thumbnail: "/voxhire/voxhire.webp",
      gallery: [
        "/voxhire/voxhire.webp",
        "/voxhire/dashboard.webp",
        "/voxhire/Interview.webp",
      ],
    },
  },
  {
    id: 3,
    slug: "krypo",
    title: "Krypo",
    description: {
      en: "Modern password manager with a clean interface, user profiles, and analytics to detect insecure patterns.",
      es: "Gestor de contraseñas moderno con interfaz limpia, perfiles de usuario y analíticas para detectar patrones inseguros.",
    },
    longDescription: {
      en: "",
      es: "",
    },
    tags: [
      "Next.js",
      "Tailwind",
      "NextAuth",
      "Prisma",
      "Supabase",
      "shadcn/ui",
    ],
    year: "2026",
    role: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
    },
    links: {
      live: "krypo-rho.vercel.app",
      github: "https://github.com/k4sum3i/krypo",
    },
    features: [
      {
        en: "Password Management: Add, edit, and organize passwords per authenticated user.",
        es: "Gestión de contraseñas: añadir, editar y organizar contraseñas por usuario autenticado.",
      },
      {
        en: "Secure Authentication: Login and session management with NextAuth.",
        es: "Autenticación segura: inicio de sesión y gestión de sesiones con NextAuth.",
      },
      {
        en: "User Profile: View and edit personal profile data.",
        es: "Perfil de usuario: ver y editar la información del perfil.",
      },
      {
        en: "Password Analytics: Duplicate password detection and metrics with charts (Recharts) and tables.",
        es: "Analítica de contraseñas: detección de contraseñas duplicadas y métricas con gráficos (Recharts) y tablas.",
      },
      {
        en: "Modern Interface: App Router, shadcn/ui, responsive design, and file uploads with UploadThing.",
        es: "Interfaz moderna: App Router, shadcn/ui, diseño responsive y subida de archivos con UploadThing.",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          "Next.js 16",
          "React 19",
          "Tailwind CSS",
          "shadcn/ui",
          "Radix UI",
          "Motion",
        ],
      },
      {
        category: "Backend",
        items: ["Supabase", "Prisma", "PostgreSQL"],
      },
      {
        category: "Authentication, UI & Data",
        items: [
          "NextAuth",
          "UploadThing",
          "Recharts",
          "TanStack React Table",
          "dnd-kit",
        ],
      },
    ],
    images: {
      thumbnail: "/krypo/krypo.webp",
      gallery: [
        "/krypo/krypo.webp",
        "/krypo/krypoLogin.webp",
        "/krypo/krypoPass.webp",
      ],
    },
  },
];

export const skills = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Figma", category: "Design" },
];

export const education = [
  {
    year: "2023 — 2025",
    title: "Higher Degree in Web Application Development",
    institution: "Medac Nova",
    description:
      "An advanced program specializing in the full spectrum of web development, from front-end to back-end technologies. The curriculum includes mastering modern frameworks, programming languages, and database management to design and develop dynamic, scalable, and user-centric web applications.",
  },
  {
    year: "2020 — 2022",
    title: "Degree in Microinformatics Systems and Networks",
    institution: "IES Fidiana",
    description:
      "A comprehensive degree that covers the core aspects of IT infrastructure, including computer systems, network administration, IT security, and hardware maintenance. The program emphasizes hands-on experience in configuring, troubleshooting, and optimizing both local and wide area networks, ensuring operational efficiency and security.",
  },
];

export const experience = [
  {
    title: "Web Application Developer",
    company: "Altaid Formación",
    duration: "Mar 2025 – Jun 2025",
    responsibilities: [
      "Engineered and optimized complex database structures, ensuring scalability and high performance while supporting seamless data operations.",
      "Developed cutting-edge backend systems to handle intricate game logic, dynamic user management, and secure data transactions, enhancing user engagement.",
      "Played an instrumental role in crafting a visually appealing, intuitive user interface, ensuring a smooth and enjoyable user experience across multiple platforms.",
      "Collaborated closely with multidisciplinary teams, driving the development process with agile methodologies and maintaining a focus on innovation and quality.",
      "Transformed theoretical knowledge into impactful web solutions, combining expertise in databases, front-end technologies, and web frameworks to deliver results that exceeded client expectations.",
    ],
  },
  {
    title: "Systems Administrator",
    company: "Ayuntamiento de Montoro",
    duration: "Sep 2022 – Dec 2022",
    responsibilities: [
      "Provided expert-level technical support, quickly diagnosing and resolving a wide array of system and network issues, ensuring minimal operational disruption.",
      "Took ownership of local network configurations, streamlining device connectivity, and enhancing overall network efficiency for the entire department.",
      "Led the installation and configuration of critical network infrastructure, ensuring high availability and seamless connectivity across various departments.",
      "Supported a variety of server environments and network devices, monitoring their health and proactively addressing potential issues before they impacted performance.",
      "Acquired hands-on experience in network management and IT troubleshooting, building a solid foundation for independent problem-solving in high-pressure situations.",
    ],
  },
  {
    title: "Systems Administrator",
    company: "IES Fidiana",
    duration: "Mar 2022 – Jun 2022",
    responsibilities: [
      "Provided hands-on technical support, ensuring the reliable operation of computer systems, network resources, and software applications across the institution.",
      "Streamlined the installation and configuration of operating systems and software, reducing setup time and increasing user satisfaction with efficient systems.",
      "Tackled technical challenges head-on, quickly identifying solutions to maintain system uptime and optimize workflows for students and staff.",
      "Applied theoretical knowledge to real-world scenarios, gaining practical experience and enhancing my technical expertise through problem-solving and innovation.",
      "Collaborated with a dynamic team, focusing on continuous improvement of IT infrastructure, while ensuring smooth and efficient technological experiences for all users.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project[] {
  return projects.filter((p) => p.features);
}
