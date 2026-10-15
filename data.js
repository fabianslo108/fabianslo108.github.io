// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
const publications = [
  {
    title: "Democratizing Access to Higher Education in Russia: The Consequences of the Unified State Exam Reform",
    authors: "Marco Francesconi, <b>Fabian Slonimczyk</b>, Anna Yurko",
    links: [
      { text: "Paper", url: "https://doi.org/10.1016/j.euroecorev.2019.04.007" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "This is the first paper that evaluates the effects of a reform requiring Russian universities to make admission decisions based on the results of a national high-school exam. We show the reform led to a threefold increase in geographic mobility rates among high-school graduates from small cities and towns to start college. This is robust to different techniques, samples, and specifications. The reform was also accompanied by increases in students’ expectations to attend university, parental transfers, and educational expenditures. There is no evidence the reform affected parental labor supply, divorce, and employment outcomes of graduates who did not move.",
    citation: `<pre><code>@article{francesconi-etal-2019-democratizing,
    title  = {Democratizing Access to Higher Education in Russia: The Consequences of the Unified State Exam Reform},
    author = {Marco Francesconi and Fabian Slonimczyk and Anna Yurko},
    journal = {European Economic Review},
    volume = {117},
    pages  = {56--82},
    year   = {2019},
    url    = {https://doi.org/10.1016/j.euroecorev.2019.04.007}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  },
  {
    title: "Assessing the Impact of the Maternity Capital Policy in Russia",
    authors: "<b>Fabian Slonimczyk</b>, Anna Yurko",
    links: [
      { text: "Paper", url: "https://doi.org/10.1016/j.labeco.2014.03.004" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "With declining population and fertility rates below replacement levels, Russia is currently facing a demographic crisis. Starting in 2007, the federal government has pursued an ambitious pro-natalist policy. Women who give birth to at least two children are entitled to “maternity capital” assistance ($11,000). In this paper we estimate a structural dynamic programming model of fertility and labor force participation in order to evaluate the effectiveness of the policy. We find that the program increased long-run fertility by about 0.15 children per woman.",
    citation: `<pre><code>@article{slonimczyk-yurko-2014-maternity,
    title  = {Assessing the Impact of the Maternity Capital Policy in Russia},
    author = {Fabian Slonimczyk and Anna Yurko},
    journal = {Labour Economics},
    volume = {30},
    pages  = {265--281},
    year   = {2014},
    url    = {https://doi.org/10.1016/j.labeco.2014.03.004}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  }

];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// Projects Data - Replace with your own projects
const projects = [
  {
    title: "Gödel Agent",
    description: "A self-referential agent framework for recursive self-improvement implemented with Monkey Patching. (<a href=\"https://github.com/Arvid-pku/Godel_Agent\" target=\"_blank\" rel=\"noopener\">Project Homepage</a>)",
    badges: [
      { url: "https://github.com/Arvid-pku/Godel_Agent/releases", img: "https://img.shields.io/badge/Version-1.0-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/blob/main/LICENSE.md", img: "https://img.shields.io/badge/License-MIT-blue" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/stargazers", img: "https://img.shields.io/github/stars/Arvid-pku/Godel_Agent" },
      { url: "https://github.com/Arvid-pku/Godel_Agent/network/members", img: "https://img.shields.io/github/forks/Arvid-pku/Godel_Agent" },
      { url: "https://arxiv.org/abs/2410.04444", img: "https://img.shields.io/badge/Doc-Paper-red" }
    ],
    isSelected: true,
    demoPath: "photos/project-demo/godel-agent.png"
  }
];

// Helper functions to filter projects
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// Research Experience Data - Replace with your own experience
const researchExperience = [
  {
    period: "Month YYYY - Month YYYY",
    institution: "Your Institution Name",
    mentor: "Prof. Mentor Name",
    description: "Brief description of your research work and achievements."
  }
];

// Teaching Data - Replace with your own teaching experience
const teaching = [
  "Teaching Assistant, Institution, Course Name, Semester YYYY, with Prof. Name"
];

// Academic Services Data - Replace with your own services
const academicServices = [
  "Reviewer: Conference YYYY",
  "Volunteer: Conference YYYY"
];

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "Your Talk Title",
    venue: "Venue Name",
    date: "Mon DD, YYYY",
    attachments: [
      { text: "Slides", url: "files/your-talk/slides.pdf" }
    ]
  }
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "Your Award Name, Institution, Month YYYY"
];
