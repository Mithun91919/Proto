import type { CaseStudy } from "./types";

export const storeSupportStudy: CaseStudy = {
  slug: "store-support",
  label: "Store Support Platform",
  org: "Walmart Global Tech",
  timeframe: "2020–2021",
  discipline: "Store operations · Mobile product design",
  title: "Helping store associates diagnose and resolve technical issues before raising a support ticket",
  subtitle:
    "Store associates rely on technology throughout the day — handheld devices, printers, store networks, applications, kiosks, and other systems. When something stopped working, the existing support experience was largely built around reporting the problem.",
  story:
    "I worked on redesigning that journey around a different question: Can we help someone understand and resolve the issue before they need to raise a ticket? The existing experience gave associates a way to report technical problems, but several things made that harder than it needed to be. Issues were organised into broad categories that did not always match how associates described a problem. Search was weak, troubleshooting guidance was limited, and unresolved tickets often still required support teams to gather context later. The shortest path through the product was often straight to a form.",
  contributions: [
    "Redesigned support from ticket-first to resolution-first model",
    "Reorganised issue classification around associate mental models",
    "Designed guided troubleshooting workflows with diagnostic checks",
    "Implemented search as primary entry point alongside categorisation",
    "Created escalation path that preserved context for support teams",
  ],
  role: "UX Designer",
  scope: [
    "Mobile support experience",
    "Issue classification and discovery",
    "Troubleshooting guidance",
    "Escalation workflows",
    "Search and information architecture",
  ],
  metrics: [
    { value: "~5,900", label: "Daily users" },
    { value: "~580,000", label: "Device footprint" },
    { value: "7,000+", label: "Weekly support searches" },
  ],
  chapters: [
    {
      number: "01",
      title: "The product was good at collecting tickets, less good at preventing them",
      intro:
        "The existing experience gave associates a way to report technical problems, but several barriers made that harder than it needed to be.",
      body: [
        "Issues were organised into broad categories that did not always match how associates described a problem. Search was weak, troubleshooting guidance was limited, and unresolved tickets often still required support teams to gather context later.",
        "The shortest path through the product was often straight to a form.",
      ],
      callout:
        "The goal was not fewer tickets at any cost. It was better help at the right moment.",
    },
    {
      number: "02",
      title: "We reorganised support around how people described problems",
      intro:
        "One of the first challenges was classification — the system reflected the support organisation more than the mental model of someone standing in a store trying to fix something.",
      body: [
        "Research and card sorting helped us reorganise issues into four clearer starting points: Store department or area, Digital tools/apps/devices, Wireless and store network, Personnel and training.",
        "The goal was simple: let people begin with what they recognised rather than asking them to understand the support structure first.",
      ],
    },
    {
      number: "03",
      title: "Then we put resolution before escalation",
      intro:
        "The biggest shift was not visual. It was what happened between identifying a problem and submitting a ticket.",
      body: [
        "For common issues, the experience introduced guided troubleshooting that helped associates check likely causes and try known resolutions first.",
        "This gave straightforward problems a chance to be resolved immediately while improving the information passed to support teams when escalation was still necessary.",
        "Not everyone thinks in categories. Experienced associates often already knew the device, application, or issue they were looking for. Search therefore became a second entry point rather than an afterthought. Results were grouped more clearly, useful guidance could appear in the flow, and information gathered during search and troubleshooting could help prefill a support request if escalation was required.",
      ],
    },
    {
      number: "04",
      title: "What changed",
      intro:
        "The product reached roughly 5,900 daily users across a device footprint of approximately 580,000, with more than 7,000 support searches each week.",
      body: [
        "The more important product shift was from 'Which form do I submit?' to 'What happened, and what can I do next?'",
        "During the documented period, those figures show the scale of the experience and the growing role of search and self-service. They are not presented as proof that every issue was resolved by the redesign.",
      ],
    },
  ],
  lessons: [
    {
      label: "Insight",
      title: "The best support experience is not always a support ticket",
      body: "Sometimes the most useful thing a product can do is help someone avoid entering the support system at all.",
    },
    {
      label: "Insight",
      title: "Good classification reduces work on both sides",
      body: "When people can describe a problem using language that makes sense to them, they get better guidance and support teams receive better context when escalation is necessary.",
    },
  ],
};
