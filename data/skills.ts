export interface Skill {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "NestJS", iconKey: "nestjs" },
      { name: "FastAPI", iconKey: "fastapi" },
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express", iconKey: "express" },
    ],
  },
  {
    category: "Lenguajes",
    skills: [
      { name: "TypeScript", iconKey: "typescript" },
      { name: "Python", iconKey: "python" },
      { name: "Java", iconKey: "java" },
      { name: "Kotlin", iconKey: "kotlin" },
      { name: "Dart", iconKey: "dart" },
    ],
  },
  {
    category: "Bases de datos & ORM",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "Prisma", iconKey: "prisma" },
      { name: "SQLite", iconKey: "sqlite" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", iconKey: "docker" },
      { name: "Git", iconKey: "git" },
      { name: "Zod", iconKey: "zod" },
      { name: "Swagger", iconKey: "swagger" },
    ],
  },
];
