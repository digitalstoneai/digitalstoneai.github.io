const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  const closeNav = () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    navMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof Node &&
      !navMenu.contains(target) &&
      !navToggle.contains(target) &&
      navMenu.classList.contains("is-open")
    ) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

const projectStarter = document.querySelector("[data-project-starter]");
const projectMessage = document.querySelector("[data-project-message]");

const projectStarterTemplates = {
  "automate-process": `I want to automate a repetitive business process.

The current process is:
My goal is:
The tools or platforms involved are:
The biggest friction point is:
What a successful outcome would look like:`,
  "ai-agent": `I need an AI agent or assistant for my workflow.

The agent should help with:
The information it needs access to:
The tasks it should complete or support:
Who will use it:
Important guardrails or limits:`,
  "ai-generation": `I want help with AI image/video generation or a content system.

The type of content I want to create is:
The style or brand direction is:
The platforms or output formats are:
The current bottleneck is:
The goal for the system is:`,
  "lead-capture": `I need a better client intake, lead capture, or follow-up system.

Where leads currently come from:
What happens after someone reaches out:
The information I need to collect:
The handoff or booking process:
The biggest leak in the current process:`,
  "rag-system": `I need a RAG or document knowledge-base system.

The documents or knowledge source are:
Who needs to ask questions:
The type of answers needed:
Accuracy or review requirements:
Where the output should go:`,
  reporting: `I want reporting, dashboards, or business intelligence support.

The data sources are:
The decisions I need better insight into:
The metrics that matter most:
How often I need updates:
Who needs to receive the report:`,
  "drone-rov": `I need help with drone, ROV, inspection, or technical field workflows.

The field workflow is:
The footage, files, or inspection data involved:
The review or reporting process today:
The technical bottleneck is:
The ideal output or report would be:`,
  "custom-ai": `I want to explore a custom AI project and need help shaping it.

The rough idea is:
The problem I want to solve:
Who this would help:
What I have already tried:
What I want to figure out next:`,
};

if (projectStarter instanceof HTMLSelectElement && projectMessage instanceof HTMLTextAreaElement) {
  projectStarter.addEventListener("change", () => {
    const template = projectStarterTemplates[projectStarter.value];
    if (!template) return;

    const hasUserContent = projectMessage.value.trim().length > 0;
    if (!hasUserContent || projectMessage.dataset.starterApplied === "true") {
      projectMessage.value = template;
      projectMessage.dataset.starterApplied = "true";
      projectMessage.focus();
    }
  });

  projectMessage.addEventListener("input", () => {
    projectMessage.dataset.starterApplied = "false";
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
