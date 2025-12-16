import type { ReactElement } from "react";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "mobile";

export type SkillType = "language" | "framework" | "other";

export interface TechIconMap {
  icon: ReactElement;
  keywords: string[];
  category: SkillCategory;
  displayName: string;
  type: SkillType;
  url?: string;
}

export interface TechInfo {
  icon: ReactElement;
  displayName: string;
  url?: string;
}

