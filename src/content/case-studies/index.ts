import { apiLifecycleStudy } from "./api-lifecycle";
import { bbDailyStudy } from "./bb-daily";
import { bigbasketRatingsReviewsStudy } from "./bigbasket-ratings-reviews";
import { creoMark1Study } from "./creo-mark-1";
import { dependencyHealthStudy } from "./dependency-management";
import { hikeJobsServiceStudy } from "./hike-jobs-service";
import { hikeMovieTicketsStudy } from "./hike-movie-tickets";
import { hikeTotalOsLocalizationStudy } from "./hike-total-os-localization";
import { portfolioManagementStudy } from "./portfolio-management";
import { storeSupportStudy } from "./store-support";
import { supplyChainOperationsStudy } from "./supply-chain-operations";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  portfolioManagementStudy,
  apiLifecycleStudy,
  dependencyHealthStudy,
  storeSupportStudy,
  supplyChainOperationsStudy,
  bbDailyStudy,
  creoMark1Study,
  hikeJobsServiceStudy,
  hikeMovieTicketsStudy,
  hikeTotalOsLocalizationStudy,
  bigbasketRatingsReviewsStudy,
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export type { CaseStudy } from "./types";
