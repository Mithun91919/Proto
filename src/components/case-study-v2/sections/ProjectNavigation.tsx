import { ProjectNavRow } from "../primitives/ProjectNavRow";
import type { ProjectNavigationSection } from "@/content/case-study-v2/types";

type ProjectNavigationProps = { section: ProjectNavigationSection };

/**
 * Rarely used directly — the shell renders this automatically from the
 * project's top-level previousProject/nextProject. This variant exists only
 * for a project that wants navigation placed somewhere mid-page.
 */
export function ProjectNavigation({ section }: ProjectNavigationProps) {
  return <ProjectNavRow previousProject={section.previousProject} nextProject={section.nextProject} />;
}
