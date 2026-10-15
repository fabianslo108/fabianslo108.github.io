// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
const publications = [
  {
    title: "Measuring Product Quality Using Images: The CLIP Q-Score and an Application to Real Estate",
    authors: "<b>Fabian Slonimczyk</b>, Danila Karapsin",
    venue: "arxiv, 2608.01544 (2026)",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2608.01544" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "The CLIP Q-score is a novel, safe, fully reproducible, and computationally efficient method for extracting objective product quality metrics from visual data using contrastive language-image pre-training. We introduce the technique and provide an extensive application to real estate data from an online platform (∼500,000 images). Our open-source metric aligns with LLM assessments and proves to be a powerful predictor of housing market prices for both sales and rentals. We also show that a higher CLIP Q-store is associated with better liquidity (reduced time on the market), especially for properties on sale.",
    citation: `<pre><code>@techreport{slonimczyk-karapsin-2026-quality,
    title  = {Measuring Product Quality Using Images: The CLIP Q-Score and an Application to Real Estate},
    author = {Fabian Slonimczyk and Danila Karapsin},
    year   = {2026},
    type   = {arxiv},
    number = {2608.01544},
    url    = {https://arxiv.org/abs/2608.01544}
}</code></pre>`,
    isNew: true,
    isPreprint: true,
    isSelected: true,
  },  {
    title: "This Candidate is [MASK]. PLM-based Sentiment Extraction and Reference Letters",
    authors: "<b>Fabian Slonimczyk</b>",
    venue: "arxiv, 2410.16325 (2025)",
    links: [
      { text: "Paper", url: "https://arxiv.org/abs/2410.16325" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "I propose a relatively simple way to deploy pre-trained large language models (LLMs) in order to extract sentiment and other useful features from text data. The method, which I refer to as prompt-based sentiment extraction, offers multiple advantages over other methods used in economics and finance. In particular, it accepts the text input as is (without pre-processing) and produces a sentiment score that has a probability interpretation. Unlike other LLM-based approaches, it does not require any fine-tuning or labeled data. I apply my prompt-based strategy to a hand-collected corpus of confidential reference letters (RLs). I show that the sentiment contents of RLs are clearly reflected in job market outcomes. Candidates with higher average sentiment in their RLs perform markedly better regardless of the measure of success chosen. Moreover, I show that sentiment dispersion among letter writers negatively affects the job market candidate's performance. I compare my sentiment extraction approach to other commonly used methods for sentiment analysis: `bag-of-words' approaches, fine-tuned language models, and querying advanced chatbots. No other method can fully reproduce the results obtained by prompt-based sentiment extraction. Finally, I slightly modify the method to obtain `gendered' sentiment scores (as in Eberhardt et al., 2023). I show that RLs written for female candidates emphasize `grindstone' personality traits, whereas male candidates' letters emphasize `standout' traits. These gender differences negatively affect women's job market outcomes.",
    citation: `<pre><code>@techreport{slonimczyk-2025-sentiment,
    title  = {This Candidate is [MASK]. PLM-based Sentiment Extraction and Reference Letters},
    author = {Fabian Slonimczyk},
    year   = {2025},
    type   = {arxiv},
    number = {2410.16325},
    url    = {https://arxiv.org/abs/2410.16325}
}</code></pre>`,
    isNew: true,
    isPreprint: true,
    isSelected: true,
  },
  {
    title: "Democratizing Access to Higher Education in Russia: The Consequences of the Unified State Exam Reform",
    authors: "Marco Francesconi, <b>Fabian Slonimczyk</b>, Anna Yurko",
    venue: "European Economic Review, 117, 56-82 (2019)",
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
    venue: "Labour Economics, 30, 265-281 (2014)",
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
    period: "Sep 2015 - Present",
    institution: "ICEF, NRU Higher School of Economics",
    description: "Associate Professor (tenured)",
  },
  {
    period: "Sep 2009 - Aug 2015",
    institution: "ICEF, NRU Higher School of Economics",
    description: "Assistant Professor",
  },
  {
    period: "Spring 2016",
    institution: "INSEAD, Fontainebleau, France",
    description: "Visiting Professor",
  },
  {
    period: "2013 - Present",
    institution: "Institute for the Study of Labor (IZA), Bonn, Germany",
    description: "Research Fellow",
  },

];

// Teaching Data - Replace with your own teaching experience
const teaching = [
  "ICEF MSc Economics & Finance, Advanced Econometrics (2010-Present)",
  "ICEF MSc Economics & Finance, Big Data and Machine Learning for Economics and Finance (2019-Present)",  
  "ICEF BSc, Applied Economics (2014-2018)",
  "Econ BSc, Labor Economics (2012-2013)",  
  "Econ BSc, Time Series Econometrics (2009)",    
];

// Academic Services Data - Replace with your own services
const academicServices = [
  "Chair of Organizing Committee: ICEF Conference on Applied Economics 2018-2026",
  "Search and Hiring Committee: ICEF 2016-2026"
];

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "Good Looks and the Academic Job Market",
    venue: "ICEF Conference on Applied Economics",
    date: "Oct 16, 2026",
    attachments: [
      { text: "Slides", url: "files/presentation_Good_Looks_Slonimczyk_Kimsanbaev_v0.pdf" }
    ]
  }
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "Biannual Russian National Award in Applied Economics, Democratizing Access to Higher Education in Russia, 2020",
  "Gaidar Award for Young Economists, Assessing the Impact of the Maternity Capital Policy, 2014",
  "Outstanding Contribution Award, The Effect of Taxation on Informal Employment, 2013",
  "Solomon Barkin Graduate Award, University of Massachusetts Amherst, 2008",
  "Fulbright Master Program Fellowship, 2002-2004",
];
