import { apiLifecycleCase } from "./api-lifecycle-manager";
import { clipperCase } from "./clipper";
import { dependencyCase } from "./dependency-management";
import { fixitCase } from "./fixit";
import { supplyChainCase } from "./supply-chain-operations";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  clipperCase,
  apiLifecycleCase,
  supplyChainCase,
  dependencyCase,
  fixitCase,
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export type { CaseStudy } from "./types";
