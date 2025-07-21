// Mock data for Tommyboy0797's Portfolio
export const developerInfo = {
  name: "Tommyboy0797",
  tagline: "Full Stack Developer",
  description: "Passionate developer with expertise across multiple languages and platforms. From web applications to aviation tools, I build robust solutions with clean, efficient code.",
  location: "Available for Remote Work",
  email: "contact@tommyboy0797.dev",
  github: "https://github.com/Tommyboy0797",
  linkedin: "https://linkedin.com/in/tommyboy0797",
  availability: "Available for projects"
};

export const skills = [
  {
    category: "Frontend Development",
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    proficiency: 95
  },
  {
    category: "Backend Development",
    technologies: ["Python", "FastAPI", "Java", "C++", "Node.js"],
    proficiency: 90
  },
  {
    category: "Cloud & DevOps",
    technologies: ["Google Kubernetes Engine (GKE)", "Docker", "Podman", "Google Cloud Platform", "CI/CD"],
    proficiency: 88
  },
  {
    category: "Specialized Applications",
    technologies: ["Aviation Software", "Chart Digitization", "Performance Algorithms", "JWT Authentication"],
    proficiency: 92
  },
  {
    category: "Data & Analytics",
    technologies: ["Jupyter Notebook", "Data Interpolation", "Python Libraries", "Chart Processing"],
    proficiency: 87
  },
  {
    category: "Game Development",
    technologies: ["Lua", "Lua(u)", "Roblox Development", "C++ Game Engines"],
    proficiency: 85
  }
];

export const projects = [
  {
    id: 1,
    title: "Flight Planning Tool",
    description: "A comprehensive aviation planning platform featuring advanced chart digitization, performance calculations, and cloud deployment. Built with modern full-stack architecture and deployed on Google Kubernetes Engine for scalability and reliability.",
    technologies: ["Python", "JavaScript", "HTML", "FastAPI", "GKE", "Kubernetes", "Docker", "GCP", "JWT", "Jupyter Notebook"],
    category: "Aviation Software",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    demoUrl: "https://flightplanning.airplanesimulations.com/",
    githubUrl: "https://github.com/Tommyboy0797/FlightPlanningTool",
    featured: true,
    keyFeatures: [
      "GPS waypoints and airways management",
      "SIDs/STARs integration",
      "Custom threat rings with SAM profiles",
      "Range rings and nearby waypoints",
      "User authentication with JWT tokens",
      "Route saving and loading with secure profiles",
      "TOLD (Takeoff and Landing Data) calculator",
      "Weather data for departure and arrival airfields"
    ],
    technicalHighlights: [
      "Chart digitization using Engauge Digitizer with automated data extraction",
      "Performance data interpolation algorithms for accurate calculations",
      "FastAPI backend with secure JWT authentication and password hashing",
      "Containerized deployment using Podman and Google Container Registry",
      "Google Kubernetes Engine (GKE) cluster deployment for scalability",
      "CI/CD pipeline with GitHub Actions and Cloud Build integration",
      "Automated build and deployment process with cloudbuild.yaml",
      "Secure user management with HTTP-only cookies and token validation"
    ],
    architecture: {
      frontend: "HTML, CSS, JavaScript",
      backend: "Python with FastAPI",
      deployment: "Google Kubernetes Engine (GKE)",
      containerization: "Podman, Google Container Registry",
      cicd: "GitHub Actions, Cloud Build",
      authentication: "JWT tokens, password hashing",
      dataProcessing: "Chart digitization, interpolation algorithms"
    }
  },
  {
    id: 2,
    title: "Roblox Restaurant System",
    description: "This system manages a dynamic restaurant environment where NPC customers spawn, queue, and place food orders for players to fulfill. Players can claim orders, collect required ingredients, prepare meals, and submit them to serve customers and earn credits.",
    technologies: ["Lua", "Roblox Studio", "Lua(u)"],
    category: "Game Development",
    status: "Live",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=600&fit=crop",
    demoUrl: "https://www.roblox.com/games/18902784723/Republic-Border-Roleplay",
    githubUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Uniden UBC125XLT Scanner Programmer",
    description: "Python script to program the Uniden UBC125XLT radio scanner via serial COM port. Automates frequency uploads from CSV files to the scanner, improving efficiency for radio enthusiasts.",
    technologies: ["Python", "PySerial", "CSV"],
    category: "Utility / Hardware Tool",
    status: "Completed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1518773553398-650c184e3d1f?w=800&h=600&fit=crop",
    demoUrl: null,
    githubUrl: "https://github.com/Tommyboy0797/uniden-ubc125xlt-programmer",
    featured: false
  },
  {
    id: 4,
    title: "C++ 2D Game Engine",
    description: "A lightweight custom 2D game engine created in C++ featuring OpenGL rendering, physics simulation, and audio playback, designed for indie game development and educational purposes.",
    technologies: ["C++", "OpenGL", "SDL2", "CMake"],
    category: "Game Development",
    status: "In Progress",
    year: "2024",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    demoUrl: null,
    githubUrl: "https://github.com/Tommyboy0797/cpp-game-engine",
    featured: false
  }
];

export const experience = [
  {
    title: "Full Stack Developer & Cloud Engineer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing full-stack applications with cloud deployment expertise. Specialized in Kubernetes orchestration, containerization, and CI/CD pipelines. Notable achievement: Flight Planning Tool deployed on Google Kubernetes Engine with automated chart digitization.",
    technologies: ["Python", "FastAPI", "JavaScript", "GKE", "Docker", "CI/CD"]
  },
  {
    title: "Aviation Software Engineer",
    company: "Independent Projects",
    period: "2024 - Present",
    description: "Creating specialized aviation software with advanced data processing capabilities. Developed chart digitization algorithms, performance calculation systems, and secure authentication mechanisms for flight planning applications.",
    technologies: ["Python", "Chart Digitization", "Data Interpolation", "JWT Authentication", "Jupyter Notebook"]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Implementing modern cloud infrastructure using Google Cloud Platform, Kubernetes, and automated deployment pipelines. Focus on containerization, scalability, and continuous integration/deployment practices.",
    technologies: ["Kubernetes", "GCP", "Podman", "Cloud Build", "GitHub Actions"]
  },
  {
    title: "Game Developer",
    company: "Independent",
    period: "2022 - Present",
    description: "Creating immersive games on Roblox platform with focus on engaging gameplay mechanics and user experience.",
    technologies: ["Lua", "Roblox Studio", "Game Design"]
  }
];

export const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    year: "2023",
    url: "https://freecodecamp.org/certification/tommyboy0797/full-stack"
  },
  {
    name: "Python Programming",
    issuer: "Python Institute",
    year: "2023",
    url: "https://python.org/certification/tommyboy0797"
  },
  {
    name: "React Developer",
    issuer: "Meta",
    year: "2024",
    url: "https://coursera.org/verify/tommyboy0797-react"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/tommyboy0797",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tommyboy0797",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:thomas@airplanesimulations.com",
    icon: "mail"
  },
  {
    name: "Discord",
    url: "https://discord.gg/tommyboy0797",
    icon: "discord"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    content: "Tommy delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire project smooth and successful.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Game Studio Owner",
    company: "Indie Games Studio",
    content: "Working with Tommy on our Roblox game was fantastic. He brought creative solutions to complex gameplay mechanics and delivered a polished, engaging experience for our players.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Lisa Rodriguez",
    role: "Data Scientist",
    company: "Research Institute",
    content: "Tommy's data visualization dashboard transformed how we analyze our research data. The interactive features and clean design made complex data accessible to our entire team.",
    rating: 5
  }
];

// Blog posts or recent updates
export const recentUpdates = [
  {
    id: 1,
    title: "Building Scalable Game Systems in Roblox",
    date: "2024-01-15",
    category: "Game Development",
    excerpt: "Exploring advanced Lua techniques for creating maintainable and scalable game systems in Roblox.",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Modern React Patterns for Portfolio Sites",
    date: "2024-01-10",
    category: "Web Development",
    excerpt: "Best practices for building responsive, performant portfolio websites using React and modern CSS.",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "From C++ to Python: A Multi-Language Journey",
    date: "2024-01-05",
    category: "Programming",
    excerpt: "Lessons learned from working across multiple programming languages and how it shapes better development practices.",
    readTime: "6 min read"
  }
];

export const stats = {
  projectsCompleted: 25,
  technologiesUsed: 12,
  yearsOfExperience: 3,
  coffeeConsumed: 1247,
  linesOfCode: 50000,
  happyClients: 15
};