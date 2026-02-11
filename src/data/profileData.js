export const personalInfo = {
  name: "Julio Muñoz Cortés",
  title: "Backend Developer | Senior Java & Spring Boot",
  subtitle: "Arquitectura de Microservicios",
  location: "San Felipe, Región de Valparaíso, Chile",
  phone: "+56996156389",
  email: "julio.mun.cor@gmail.com",
  github: "https://github.com/juliomunz", // Actualizar con tu usuario real
  linkedin: "https://linkedin.com/in/julio-muñoz", // Actualizar con tu perfil
  summary: "Ingeniero en Informática con sólida experiencia como Desarrollador Backend, especializado en arquitecturas de microservicios con Java Spring Boot y Python. Actualmente, como Software Engineer en Equifax, diseño e implemento soluciones escalables de alta concurrencia, bajo estrictos estándares de seguridad y excelencia operativa."
};

export const experience = [
  {
    id: 1,
    company: "Equifax Chile",
    position: "Software Engineer Semi Senior",
    period: "Mayo 2025 - Presente",
    logo: "🏢",
    responsibilities: [
      "Desarrollo y Gestión de APIs Seguras con Apigee para filtrado de headers y protección de datos sensibles",
      "Automatización con Python: Scripts de transformación de datos y servicios FastAPI para desarrollo ágil",
      "Arquitectura de Microservicios en Java Spring Boot con actualización de dependencias críticas",
      "Aseguramiento de calidad con SonarQube, pruebas automatizadas con pytest, y CI/CD con Jenkins",
      "Gestión ágil con Jira y Confluence, cumplimiento normativo en manejo de datos PII para LATAM"
    ],
    technologies: ["Java 17", "Spring Boot", "Python", "Apigee", "Redis", "GCP", "Jenkins", "Datadog"]
  },
  {
    id: 2,
    company: "SII Group Chile",
    position: "Desarrollador Backend",
    period: "Septiembre 2024 - Enero 2025",
    logo: "🏦",
    responsibilities: [
      "Desarrollo backend en Java Spring Boot para Banco Santander en colaboración con Zurich Seguros",
      "Pruebas unitarias con JUnit y Mockito alcanzando 85% de cobertura",
      "Implementación de Arquitecturas Orientadas a Eventos (EDA) con Kafka",
      "Migración de microservicios a Apigee según estrategia empresarial",
      "Automatización CI/CD con Jenkins y gestión con metodología Scrum"
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "Apigee", "JUnit", "Mockito", "Oracle", "GCP"]
  },
  {
    id: 3,
    company: "42Labs",
    position: "Desarrollador Java Backend",
    period: "Septiembre 2023 - Agosto 2024",
    logo: "💻",
    responsibilities: [
      "Desarrollo de aplicación CRUD con Java Swing sobre Java 17",
      "Implementación de patrones DAO y VO para arquitectura robusta",
      "Conexión a PostgreSQL mediante JDBC con operaciones completas",
      "Diseño y consumo de Stored Procedures para lógica compleja",
      "Aplicación de características modernas de Java (var, Optional, Streams)"
    ],
    technologies: ["Java 17", "Java Swing", "PostgreSQL", "JDBC", "AWS", "GitLab"]
  },
  {
    id: 4,
    company: "Sermaluc",
    position: "Líder de Equipo / Desarrollador FullStack",
    period: "Septiembre 2022 - Julio 2023",
    logo: "👨‍💼",
    responsibilities: [
      "Liderazgo de equipo de desarrollo asegurando entregas de calidad",
      "Desarrollo con Java Spring Boot, React y SQL Server",
      "Automatización CI/CD con Azure DevOps y despliegues en Kubernetes (OpenShift)",
      "Persistencia con JPA y Hibernate",
      "Implementación de soluciones B2B, B2C y automatización con Cron"
    ],
    technologies: ["Java 11", "Spring Boot", "React", "Azure DevOps", "OpenShift", "Kubernetes"]
  },
  {
    id: 5,
    company: "Apiux Tecnología",
    position: "Desarrollador FullStack",
    period: "Octubre 2021 - Agosto 2022",
    logo: "🔧",
    responsibilities: [
      "Desarrollo y continuidad operativa para institución financiera",
      "Frontend con Angular y React",
      "Implementación en servidores RedHat JBoss EAP 6.0",
      "Optimización con Redis para transacciones de alta velocidad y detección de fraudes",
      "Arquitectura de Microservicios, CQRS y DDD"
    ],
    technologies: ["Java 8", "Spring Boot", "Angular", "React", "JBoss", "PostgreSQL", "Redis", "AWS"]
  }
];

export const skills = {
  languages: [
    { name: "Java", level: 95, icon: "☕" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "SQL", level: 90, icon: "🗄️" },
    { name: "JavaScript", level: 80, icon: "📜" }
  ],
  frameworks: [
    { name: "Spring Boot", level: 95, icon: "🍃" },
    { name: "FastAPI", level: 80, icon: "⚡" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "Angular", level: 70, icon: "🅰️" }
  ],
  tools: [
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "Kubernetes", level: 80, icon: "☸️" },
    { name: "Jenkins", level: 85, icon: "🔧" },
    { name: "Git", level: 90, icon: "📦" },
    { name: "Apigee", level: 85, icon: "🔌" },
    { name: "SonarQube", level: 80, icon: "📊" }
  ],
  databases: [
    { name: "Oracle", level: 85, icon: "🔴" },
    { name: "PostgreSQL", level: 90, icon: "🐘" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "Redis", level: 80, icon: "⚡" }
  ],
  cloud: [
    { name: "GCP", level: 85, icon: "☁️" },
    { name: "AWS", level: 80, icon: "🌩️" },
    { name: "Azure", level: 75, icon: "🔷" }
  ]
};

export const certifications = [
  {
    name: "Infrastructure and Application Modernization with Google Cloud",
    year: 2023,
    icon: "☁️"
  },
  {
    name: "Digital Transformation with Google Cloud",
    year: 2023,
    icon: "🌐"
  },
  {
    name: "AWS Technical Essentials",
    year: 2023,
    icon: "🌩️"
  },
  {
    name: "Arquitectura Software Moderna: DDD, Eventos, Microservicios",
    year: 2024,
    icon: "🏗️"
  },
  {
    name: "Bootcamp en Python",
    year: 2025,
    icon: "🐍"
  },
  {
    name: "ITIL Foundation",
    year: 2011,
    icon: "📋"
  }
];

export const education = [
  {
    degree: "Diplomado en Ciencia de Datos e Inteligencia Artificial",
    institution: "Universidad de Chile",
    period: "Abril 2026 - En curso",
    icon: "🎓"
  },
  {
    degree: "Ingeniería en Computación e Informática",
    institution: "Instituto IACC",
    period: "2023 - 2025",
    icon: "🎓"
  },
  {
    degree: "Ingeniería en Computación e Informática",
    institution: "Universidad Nacional Andrés Bello",
    period: "2014 - 2017",
    icon: "🎓"
  }
];

export const featuredProjects = [
  {
    id: 1,
    title: "Proyecto Consentimiento (ID Consent)",
    description: "Desarrollo de soluciones para obtención de consentimiento legal en el marco de Open Finance y normativas de protección de datos para empresas en LATAM.",
    technologies: ["Java", "Spring Boot", "Apigee", "GCP"],
    company: "Equifax",
    year: 2025,
    type: "Enterprise"
  },
  {
    id: 2,
    title: "Migración de Microservicios a Apigee",
    description: "Implementación de pruebas unitarias a 12 servicios legados con cobertura del 85%. Modernización de arquitectura para Zurich Seguros.",
    technologies: ["Java", "Spring Boot", "JUnit", "Mockito", "Apigee"],
    company: "SII Group",
    year: 2024,
    type: "Migration"
  },
  {
    id: 3,
    title: "Sistema de Pagos Online",
    description: "Desarrollo de sistemas escalables y seguros para Banco Santander (Seguros Zurich) y portales de pago online embebidos (Getnet).",
    technologies: ["Java", "Spring Boot", "Oracle", "Kafka"],
    company: "SII Group",
    year: 2024,
    type: "FinTech"
  },
  {
    id: 4,
    title: "Mejoras en Chile Compra",
    description: "Implementación de servicios automatizados con Cron, actualización de procedimientos almacenados. Reducción del 30% en tiempo de gestión para nuevos proveedores B2B.",
    technologies: ["Java", "Spring Boot", "SQL Server", "Quartz"],
    company: "Sermaluc",
    year: 2023,
    type: "Government"
  }
];
