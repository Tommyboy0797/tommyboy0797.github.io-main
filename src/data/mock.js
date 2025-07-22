// Mock data for Tommyboy0797's Portfolio
export const developerInfo = {
  name: "Tommyboy0797",
  tagline: "Full Stack Developer",
  description: "Passionate developer with expertise across multiple languages and platforms. From web applications to aviation tools, I build robust solutions with clean, efficient code.",
  location: "UK",
  email: "thomas.airplanesimulations.com",
  github: "https://github.com/Tommyboy0797",
  linkedin: "https://linkedin.com/in/tommyboy0797",
  availability: "Available for projects",
  discordName: "tommyboy0797"
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
    keyFeatures: [
      "Order Claiming System - Players can claim and unclaim customer orders at a front counter.",
      "Live Order UI - Claimed orders are shown in real-time on each player’s UI.",
      "Order Fulfillment - Players must fulfill correct items to complete an order and earn credits.",
      "Earnings and Credit System - Successfully completing orders gives the player in-game currency (Credits).",
      "Tool-Based Item Delivery - Players use tools (like food items) to deliver orders to customers.",
      "Interactive Delivery Prompt - Players must use a ProximityPrompt to deliver items to NPCs.",
      "Player Reset Handling - If a player resets or leaves, their claimed order is automatically released.",
      "Role-Based Access - Only players on the 'Worker' team can claim and deliver orders.",
      "Real-Time Inventory Management - Players have an internal inventory that tracks what they’re holding.",
      "Server-Client Sync - Order claiming, completion, and tool handling are safely managed between server and client."
    ],
    technicalHighlights: [
      "Knit Framework Integration - Uses Knit for clean separation between controllers, services, and modules.",
      "Reliable State Tracking - Server tracks ActiveWorkers and inventories in dictionaries for quick lookup and safe management.",
      "Debounced Claiming - Prevents players from spamming or double-claiming orders using internal checks.",
      "Custom Messaging System - Server sends real-time updates to the client UI through Knit controller functions.",
      "Automatic Order Cleanup - Orders are released and reset if the claiming player leaves or dies.",
      "Tool Detection - Uses `.Equipped` and `.Parent == Character` checks to detect valid items held by the player.",
      "ProximityPrompt Verification - Delivery checks ensure the right item is delivered to the right customer.",
      "Modular Inventory System - Tracks items per player and allows for future inventory expansion.",
      "Safe UI Updates - Client-side updates only occur after server validation, ensuring exploit resistance.",
      "Reset-Resistant - The system re-validates player state upon `CharacterAdded`, preventing abuse or UI bugs."
    ],
    category: "Game Development",
    status: "Completed",
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
    keyFeatures: [
      "Automated Scanner Programming – Programs Uniden scanner channels via serial port using CSV input.",
      "CSV-Driven Configuration – Reads channel data (frequency, mode, squelch, step, etc.) from a structured CSV file.",
      "Serial Communication Management – Establishes and manages serial connection parameters (COM port, baud rate, timeout).",
      "Command Acknowledgment – Sends commands and checks responses to confirm successful programming of each channel.",
      "Error Detection & Reporting – Detects and logs errors when channel programming commands fail or return unexpected responses.",
      "Channel Verification – Optionally queries channels after programming to verify settings were applied.",
      "Graceful Device Initialization – Resets input buffer and confirms device model and programming readiness before uploading.",
      "User Feedback – Prints detailed command/response logs for transparency during programming.",
      "Safe Delay Management – Introduces configurable delays between commands to ensure device stability.",
      "Completion Notification – Informs user upon successful programming and advises device restart."
    ],
    technicalHighlights: [
      "PySerial Library – Uses `serial.Serial` for robust cross-platform serial port communication.",
      "Line-Based Command Protocol – Writes ASCII commands ending with carriage return and reads single-line responses.",
      "CSV Parsing – Utilizes Python's built-in `csv` module to handle channel data input safely and efficiently.",
      "Dynamic Command Formatting – Constructs device-specific commands dynamically from CSV data fields.",
      "Response Validation – Checks exact device response strings to detect success or error per command.",
      "Exception Handling Implicit – Relies on context manager for serial port with automatic cleanup on exit.",
      "Configurable Serial Parameters – PORT, BAUDRATE, TIMEOUT set as constants for easy modification.",
      "Non-Blocking Sleep – Uses `time.sleep()` with adjustable delay to synchronize command timing without blocking program logic.",
      "Modular Design – Encapsulates main logic within a function, supporting potential future extension or integration.",
      "Informative Print Statements – Provides detailed console output for debugging and user confirmation."
    ],
    category: "Utility / Hardware Tool",
    status: "Completed",
    year: "2024",
    image: "https://i.ytimg.com/vi/4sOytQGK48M/maxresdefault.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/Tommyboy0797/uniden-ubc125xlt-programmer",
    featured: false
  },
  {
    id: 4,
    title: "C++ 2D Game Engine",
    description: "A lightweight custom 2D game engine created in C++ featuring OpenGL rendering, physics simulation, and audio playback, designed for indie game development and educational purposes.",
    technologies: ["C++", "OpenGL", "SDL2", "CMake"],
    keyFeatures: [
      "2D Ball Physics Simulation – Simulates a circular object with velocity, friction, gravity, and collisions.",
      "Keyboard-Based Force Application – Move the ball using arrow keys, with realistic acceleration and directional control.",
      "Gravity & Vertical Motion – Ball accelerates downward naturally and responds to vertical forces (Up/Down keys).",
      "Edge Collision Handling – Ball bounces off window boundaries with restitution (energy loss).",
      "Rectangle Collision Detection – Detects and resolves collisions with multiple red box obstacles on the screen.",
      "Elastic Collision Response – Velocity is reversed and reduced based on a restitution coefficient for realistic bounces.",
      "Text-Based Debug UI – Real-time display of position, movement forces, and velocity using SFML text elements.",
      "Friction Simulation – Gradually reduces horizontal velocity over time to simulate sliding resistance.",
      "Multiple Barrier Interaction – Can collide with and respond to three static rectangular objects placed in the world.",
      "Simple Vector Math Integration – Uses basic vector principles without external physics engines."
    ],
    technicalHighlights: [
      "SFML Integration – Utilizes SFML for rendering, window management, input handling, and text drawing.",
      "Real-Time Delta Timing – Uses `std::chrono` to calculate frame delta time for consistent physics updates.",
      "Mass & Force Calculations – Applies Newtonian principles (`F = ma`) to compute acceleration and velocity updates.",
      "Edge Collision Detection – Checks and resolves screen bounds manually using bounding box logic.",
      "AABB Collision with Rectangles – Implements axis-aligned bounding box detection for rectangle-object collisions.",
      "Restitution & Friction Coefficients – Allows fine-tuned energy loss during collisions and movement damping.",
      "Per-Frame Physics Update – Consolidates force application, motion, and collisions within a consistent update loop.",
      "Dynamic Velocity Adjustment – Combines gravity, user input, and collision to alter motion each frame.",
      "Separation Resolution Logic – Automatically repositions object outside collision bounds to prevent overlap.",
      "Minimal & Expandable Architecture – Lightweight single-class system ready for extension (e.g., multiple objects, rotations, slopes)."
    ],
    category: "Game Development",
    status: "In Progress",
    year: "2024",
    image: "https://img.youtube.com/vi/vh5EXcA9_PU/maxresdefault.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/Tommyboy0797/super_basic_physics_engine",
    featured: false
  },
  {
    id: 5,
    title: "Roblox Grenade System",
    description: "A grenade system comprised of thermal detenators, stun, smoke and incindeary detenators. ",
    technologies: ["Lua", "Roblox Studio", "Lua(u)"],
    keyFeatures: [
      "Overarm & Underarm Throw Options (Left/Right click)",
      "Live Arc Preview While Holding",
      "Customizable Throw Presets for Expansion (e.g., grenade launchers)",
      "Explosion Radius & Damage Configuration",
      "Line-of-Sight Damage Check with Raycasting",
      "Client-Owned Physics for Smooth Motion",
      "Clean & Visual Neon Trajectory Dots",
      "Tool Dropping and Pickup System with Prompts",
      "Built-in Delay Before Explosion (3 seconds)",
      "Safe Joint & Force Settings (no knockback or object destruction)"
    ],
    technicalHighlights: [
      "Client-Side Trajectory Prediction - Real-time arc visualization using physics-based simulation with gravity, speed, and tilt adjustments.",
      "Dual Throw Presets - Overarm (speed = 100, angle = 45) and Underarm (speed = 40, angle = -10) throwing mechanics, customizable via a preset table.",
      "Networked Throw System - Uses RemoteEvent to synchronize throws between client and server, including custom velocity application.",
      "Explosion Handling with Raycasting - Explosion damage is applied conditionally using raycasts to simulate line-of-sight, preventing damage through walls.",
      "Dynamic Sound Integration - Throw and explosion sounds are played dynamically with debris cleanup, enhancing immersion.",
      "Custom Physics Properties - Increased friction and density on grenades to reduce unrealistic rolling behavior post-throw.",
      "Clean Debris Management - Automatic cleanup of grenade and sound instances to prevent memory bloat.",
      "Tool Drop System - Grenades (and other tools) can be dropped and picked up with a proximity prompt and correct physics positioning."
    ],
    category: "Game Development",
    status: "Completed",
    year: "2025",
    image: "https://lumiere-a.akamaihd.net/v1/images/databank_thermaldetonator_01_169_263981fd.jpeg?region=0%2C0%2C1560%2C878",
    demoUrl: "https://www.roblox.com/games/76734091905352/Grenade-System",
    githubUrl: "",
    featured: true
  },
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