export interface Skill {
  name: string;
  iconKey: string;
  /**
   * Short names of the shipped projects that prove this skill. Every entry in
   * this file must carry at least one — a technology nobody can verify in a
   * project or a certificate does not belong in this section.
   */
  provenBy: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "NestJS", iconKey: "nestjs", provenBy: ["Overload", "SmartBite"] },
      { name: "FastAPI", iconKey: "fastapi", provenBy: ["Tecsup Inventory"] },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "Flutter", iconKey: "flutter", provenBy: ["FRK Outdoors", "Overload", "SmartBite"] },
      { name: "React", iconKey: "react", provenBy: ["Tecsup Inventory"] },
      { name: "Next.js", iconKey: "nextjs", provenBy: ["SmartBite"] },
    ],
  },
  {
    category: "Lenguajes",
    skills: [
      {
        name: "TypeScript",
        iconKey: "typescript",
        provenBy: ["Overload", "Tecsup Inventory", "SmartBite"],
      },
      { name: "Python", iconKey: "python", provenBy: ["Tecsup Inventory"] },
      { name: "Kotlin", iconKey: "kotlin", provenBy: ["SmartBite"] },
      { name: "Dart", iconKey: "dart", provenBy: ["FRK Outdoors"] },
    ],
  },
  {
    category: "Bases de datos & ORM",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql", provenBy: ["Overload", "SmartBite"] },
      { name: "Prisma", iconKey: "prisma", provenBy: ["Overload", "SmartBite"] },
      { name: "SQLite", iconKey: "sqlite", provenBy: ["Tecsup Inventory"] },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", iconKey: "docker", provenBy: ["Overload", "SmartBite"] },
      {
        name: "Git",
        iconKey: "git",
        provenBy: ["Overload", "Tecsup Inventory", "SmartBite"],
      },
    ],
  },
  {
    category: "Calidad & Proceso",
    skills: [
      { name: "Vitest", iconKey: "vitest", provenBy: ["Overload"] },
      { name: "Zod", iconKey: "zod", provenBy: ["Overload"] },
      { name: "Swagger", iconKey: "swagger", provenBy: ["Overload"] },
      { name: "Scrum", iconKey: "scrum", provenBy: ["FRK Outdoors"] },
    ],
  },
];
