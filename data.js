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
  },
  {
    title: "Informality and Mobility: Evidence from Russian Panel Data",
    authors: "<b>Fabian Slonimczyk</b>, Vladimir Gimpelson",
    venue: "Economics of Transition, 23:2, 299-341 (2015)",
    links: [
      { text: "Paper", url: "https://doi.org/10.1111/ecot.12064" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "Informality is a defining characteristic of labour markets in developing and transition countries. This paper analyzes patterns of mobility across different forms of formal and informal employment in Russia. Using the Russian Longitudinal Monitoring Survey household panel we estimate a dynamic multinomial logit model with individual heterogeneity and correct for the initial conditions problem. Simulations show that structural state dependence is weak and that transition rates from informal to formal employment are not lower than from non-employment. These results lend support to the integrated view of the labour market.",
    citation: `<pre><code>@article{slonimczyk-gimpelson-2015-informality,
    title  = {Informality and Mobility: Evidence from Russian Panel Data},
    author = {Fabian Slonimczyk and Vladimir Gimpelson},
    journal = {Economics of Transition},
    volume = {23},
    number = {2},
    pages  = {299--341},
    year   = {2015},
    url    = {https://doi.org/10.1111/ecot.12064}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  },
  {
    title: "Informal Employment in Emerging and Transition Economies",
    authors: "<b>Fabian Slonimczyk</b>",
    venue: "IZA World of Labor, 59.v2, 2014/22",
    links: [
      { text: "Paper", url: "https://wol.iza.org/articles/informal-employment-in-emerging-and-transition-economies/long" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "In developing and transition economies as much as half the labor force works in the informal sector (or “shadow economy”). Informal firms congest infrastructure and other public services but do not contribute the taxes needed to finance them. Informal workers are unprotected against such negative shocks as ill-health, but for certain groups there can be scarce opportunities to enter the formal sector. Reducing informality requires better enforcement, more reasonable regulation, and economic growth.",
    citation: `<pre><code>@article{slonimczyk-2014-informal-employment,
    title  = {Informal Employment in Emerging and Transition Economies},
    author = {Fabian Slonimczyk},
    journal = {IZA World of Labor},
    volume = {59},
    number = {v2},
    year   = {2014/22},
    url    = {https://wol.iza.org/articles/informal-employment-in-emerging-and-transition-economies/long}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  },
  {
    title: "The Effect of Taxation on Informal Employment: Evidence from the Russian Flat Tax Reform",
    authors: "<b>Fabian Slonimczyk</b>",
    venue: "Research in Labor Economics, 34, 2012",
    links: [
      { text: "Paper", url: "https://doi.org/10.1108/S0147-9121(2012)0000034005" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "The 2001 Russian tax reform reduced average tax rates for the personal income tax and the payroll or social tax. It also made the tax structure more regressive. Because individuals in the lower income bracket were for the most part not affected, it is possible to estimate the effects of the reform using a differences-in-differences approach. I study the effect of the reform on informal employment. Informality is defined using information on employment registration and self-employment. Applying parametric and semi-parametric techniques, I find evidence that the tax reform led to a significant reduction in the fraction of informal employees. Among the different forms of informality I study, the reform seems to have had the strongest effect on the prevalence of informal irregular activities. I also document stronger effects on individuals who benefited from the largest reductions in tax rates. The strong response to the tax reform is consistent with the emerging consensus in the literature on taxation that changes to the tax system lead to significant behavioral responses, although not necessarily in the form of a reduced labor supply.",
    citation: `<pre><code>@incollection{slonimczyk-2012-tax,
    title  = {The Effect of Taxation on Informal Employment: Evidence from the Russian Flat Tax Reform},
    author = {Fabian Slonimczyk},
    booktitle = {Research in Labor Economics},
    editor = {Lehmann, Hartmut and Tatsiramos, Konstantinos},
    volume = {34},
    chapter = {2},
    year   = {2012},
    url    = {https://doi.org/10.1108/S0147-9121(2012)0000034005}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  },
  {
    title: "Employment and Distribution Effects of the Minimum Wage",
    authors: "<b>Fabian Slonimczyk</b> and Peter Skott",
    venue: "Journal of Economic Behavior & Organization, 84:1, 55-99 (2012)",
    links: [
      { text: "Paper", url: "https://doi.org/10.1016/j.jebo.2012.03.005" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "This paper analyzes the effects of the minimum wage on wage inequality, relative employment and over-education. We show that over-education can be generated endogenously and that an increase in the minimum wage can raise both total and low-skill employment, and produce a fall in inequality. Evidence from the US suggests that these theoretical results are empirically relevant. The over-education rate has been increasing and our regression analysis suggests that the decrease in the minimum wage may have led to a deterioration of the employment and relative wage of low-skill workers.",
    citation: `<pre><code>@article{slonimczyk-skott-2012-minwage,
    title  = {Employment and Distribution Effects of the Minimum Wage},
    author = {Fabian Slonimczyk and Peter Skott},
    journal = {Journal of Economic Behavior & Organization},
    volume = {84},
    number = {1},
    pages  = {55--99},
    year   = {2012},
    url    = {}
}</code></pre>`,
    isNew: false,
    isPreprint: false,
    isSelected: false,
  },
  {
    title: "Earnings Inequality and Skill Mismatch in the U.S.: 1973-2002",
    authors: "<b>Fabian Slonimczyk</b>",
    venue: "Journal of Economic Inequality, 11, 163-194 (2013)",
    links: [
      { text: "Paper", url: "https://doi.org/10.1007/s10888-011-9212-1" },
      //{ text: "Code", url: "https://github.com/Arvid-pku/Godel_Agent" }
    ],
    abstract: "This paper shows that skill mismatch is a significant source of inequality in real earnings in the U.S. and that a substantial fraction of the increase in wage dispersion during the period 1973–2002 was due to the increase in mismatch rates and mismatch premia. In 2000–2002, surplus and deficit qualifications taken together accounted for 4.3 and 4.6% of the variance of log earnings, or around 15% of the total explained variance. The dramatic increase in over-education rates and premia accounts for around 20 and 48% of the increase in the Gini coefficient during the 30 years under analysis for males and females respectively. The surplus qualification factor is important in understanding why earnings inequality polarized in the last decades.",
    citation: `<pre><code>@article{slonimczyk-2013-mismatch,
    title  = {Earnings Inequality and Skill Mismatch in the U.S.: 1973--2002},
    author = {Fabian Slonimczyk},
    journal = {Journal of Economic Inequality},
    volume = {11},
    pages  = {163--194},
    year   = {2013},
    url    = {https://doi.org/10.1007/s10888-011-9212-1}
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
    title: "Beauty and Academic Job Market",
    description: "We develop a new method to measure physical attractiveness using deep vision models. We show that good looks are strongly associated with the length and sentiment of reference letters.",
    isSelected: true,
    demoPath: "photos/project-demo/beauty_job_market.png"
  },
  {
    title: "Measuring Product Quality Using Images",
    description: "We propose a novel approach to measure product quality using images and deep learning techniques (specifically CLIP).",
    isSelected: false,
    demoPath: "photos/project-demo/choropleth_clip.jpg"
  },
  {
    title: "Differential Treatment of Families with Children in the Moscow Housing Market",
    description: "We conduct a correspondence study in the Moscow housing market to examine differential treatment of families with children.",
    isSelected: true,
    demoPath: "photos/project-demo/diff_treatment.png"
  },  
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
  "ICEF MSc Economics & Finance, Machine Learning and Big Data in Economics and Finance (2019-Present)",  
  "ICEF BSc, Applied Economics (2016-2018)",
  "Econ BSc, Labor Economics (2015)",
  "Joint New Economic School-HSE Liberal Arts Program, Econometrics (2013-2014)",
  "Econ PhD, Microeconometrics (2010-2012)",
  "ICEF BSc, Time Series and Panel Data Econometrics (2009)",
  "Econ BSc, Time Series Econometrics (2009)",    
];

// Academic Services Data - Replace with your own services
const academicServices = [
  "Chair of Organizing Committee: ICEF Conference on Applied Economics 2018-2026",
  "Search and Hiring Committee: ICEF 2016-2026",
];

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "Good Looks and the Academic Job Market",
    venue: "ICEF Conference on Applied Economics",
    date: "October 2026",
    attachments: [
      { text: "Slides", url: "files/presentation_Good_Looks_Slonimczyk_Kimsanbaev_v0.pdf" }
    ],
  },
  {
    title: "Prompt-based Sentiment Extraction",
    venue: "AI and the Future of Social Welfare (LSE)",
    date: "June 2026",
    attachments: [
      { text: "Slides", url: "files/presentation_Slonimczyk_AIFSW.pdf" }
    ],
  },
  {
    title: "Beautiful Real Estate: Measuring Product Quality Using Images",
    venue: "ICEF Brown Bag Seminar",
    date: "April 2026",
    attachments: [
      { text: "Slides", url: "files/presentation_CLIP_Slonimczyk_Karapsin_v0.pdf" }
    ],
  },
  {
    title: "Prompt-based Sentiment Extraction",
    venue: "Digital Conference (TSE)",
    date: "January 2026",
    attachments: null,
  },
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "Biannual Russian National Award in Applied Economics, Democratizing Access to Higher Education in Russia, 2020",
  "Gaidar Award for Young Economists, Assessing the Impact of the Maternity Capital Policy, 2014",
  "Outstanding Contribution Award, The Effect of Taxation on Informal Employment, 2013",
  "Solomon Barkin Graduate Award, University of Massachusetts Amherst, 2008",
  "Fulbright Master Program Fellowship, 2002-2004",
];
