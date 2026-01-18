type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    link: string,
    website: string,
}

export const projects: Project[] = [
  {
      id: 1,
      title: "Itinerum",
      description: "Itinerum helps you discover Málaga’s sights and create custom itineraries with saved routes.",
      image: "/itinerum.webp",
      tags: ["JS", "Tailwind", "PHP", "MySQL"],
      link: "itinerum",
      website: ""
  },
  {
      id: 2,
      title: "VoxHire",
      description: "AI platform for voice-based technical practice and subscription management.",
      image: "/voxhire.webp",
      tags: ["Nextjs", "Tailwind", "Clerk", "Stripe", "Prisma", "Supabase"],
      link: "voxhire",
      website: ""
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
        description: "An advanced program specializing in the full spectrum of web development, from front-end to back-end technologies. The curriculum includes mastering modern frameworks, programming languages, and database management to design and develop dynamic, scalable, and user-centric web applications.",
    },
    {
        year: "2020 — 2022",
        title: "Degree in Microinformatics Systems and Networks",
        institution: "IES Fidiana",
        description: "A comprehensive degree that covers the core aspects of IT infrastructure, including computer systems, network administration, IT security, and hardware maintenance. The program emphasizes hands-on experience in configuring, troubleshooting, and optimizing both local and wide area networks, ensuring operational efficiency and security.",
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
            "Transformed theoretical knowledge into impactful web solutions, combining expertise in databases, front-end technologies, and web frameworks to deliver results that exceeded client expectations."
        ]
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
            "Acquired hands-on experience in network management and IT troubleshooting, building a solid foundation for independent problem-solving in high-pressure situations."
        ]
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
            "Collaborated with a dynamic team, focusing on continuous improvement of IT infrastructure, while ensuring smooth and efficient technological experiences for all users."
        ]
    }
];

