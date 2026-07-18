import type { ProjectCodeSnippet } from "./types";
import { AUTO_CONTACT_SNIPPETS } from "./auto-contact.snippets";
import { CONGRESSO_TERCIARIOS_SNIPPETS } from "./congresso-terciarios.snippets";

export type { ProjectCodeSnippet };

export const PROJECT_CODE_SNIPPETS: Record<string, ProjectCodeSnippet[]> = {
  "auto-contact": AUTO_CONTACT_SNIPPETS,
  "congresso-terciarios": CONGRESSO_TERCIARIOS_SNIPPETS,
};
