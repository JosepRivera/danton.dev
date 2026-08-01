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
      { name: "Elysia", iconKey: "elysia" },
      { name: "Spring Boot", iconKey: "spring" },
      { name: "Django", iconKey: "django" },
      { name: "Laravel", iconKey: "laravel" },
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express", iconKey: "express" },
      { name: "Fastify", iconKey: "fastify" },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React", iconKey: "react" },
      { name: "Next.js", iconKey: "nextjs" },
      { name: "Flutter", iconKey: "flutter" },
      { name: "Svelte", iconKey: "svelte" },
      { name: "SwiftUI", iconKey: "swiftui" },
      { name: "UIKit", iconKey: "uikit" },
      { name: "Jetpack Compose", iconKey: "jetpackcompose" },
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
      { name: "Swift", iconKey: "swift" },
      { name: "PHP", iconKey: "php" },
    ],
  },
  {
    category: "Bases de datos & ORM",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "MySQL", iconKey: "mysql" },
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "Prisma", iconKey: "prisma" },
      { name: "Drizzle", iconKey: "drizzle" },
      { name: "SQLite", iconKey: "sqlite" },
      { name: "Oracle", iconKey: "oracle" },
      { name: "Redis", iconKey: "redis" },
      { name: "CoreData", iconKey: "coredata" },
      { name: "Swift Data", iconKey: "swiftdata" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", iconKey: "docker" },
      { name: "AWS", iconKey: "aws" },
      { name: "Azure", iconKey: "azure" },
      { name: "Git", iconKey: "git" },
      { name: "Azure DevOps", iconKey: "azuredevops" },
      { name: "Linux", iconKey: "linux" },
    ],
  },
  {
    category: "Herramientas & Tooling",
    skills: [
      { name: "BiomeJS", iconKey: "biome" },
      { name: "Vite", iconKey: "vite" },
      { name: "Vitest", iconKey: "vitest" },
      { name: "Jest", iconKey: "jest" },
      { name: "pnpm", iconKey: "pnpm" },
      { name: "Zod", iconKey: "zod" },
      { name: "Swagger", iconKey: "swagger" },
      { name: "Scalar", iconKey: "scalar" },
      { name: "Linear", iconKey: "linear" },
      { name: "GitHub", iconKey: "github" },
      { name: "npm", iconKey: "npm" },
      { name: "Bun", iconKey: "bun" },
      { name: "Yarn", iconKey: "yarn" },
    ],
  },
];
