// data.ts
export const portfolioData = {
    skills: [
        { id: "01", category: "CORE & LANGUAGES", items: ["Python", "C++", "JavaScript", "SQL", "NoSQL", "Git & GitHub", "NeoVim","Linux","System Design"] },
        { id: "02", category: "FRONTEND", items: ["Next.js 14", "ReactJS", "Tailwind CSS","Tauri","SEO"] },
        { id: "03", category: "BACKEND & INFRA", items: ["FastAPI", "Express.js", "PostgreSQL", "Docker", "Kubernetes", "Microservices", "Vercel", "Render"] },
        { id: "04", category: "INTELLIGENCE (AI)", items: ["Agentic AI", "PyTorch", "LangChain", "LanGraph"] }
    ],
    experience: [
        {
            year: "JAN 2026 — PRESENT",
            company: "Capgemini",
            role: "Software Engineering Intern (Exceller)",
            points: [
                "Gained hands-on experience in the full Software Development Life Cycle (SDLC) using Agile Scrum methodologies.",
                "Full-stack program covering C#, Python, ASP.NET Core, Angular, React, JavaScript (ES6+), CI/CD with Azure DevOps, Git, GitHub Copilot, and Power Apps for end-to-end web application development."
            ]
        },
        {
            year: "APR 2024 — FEB 2025",
            company: "YCCE",
            role: "Web Developer",
            points: [
                "Developed ICASET website using Next.js, achieving Top-3 Google ranking for 10+ conference keywords.",
                "Resulted in 500+ attendee registrations and 1,000+ daily page views during peak traffic."
            ]
        },
        {
            year: "JAN 2023 — FEB 2024",
            company: "YCCE Student Council",
            role: "Technical Head",
            points: [
                "Orchestrated 2+ hackathons (ENIGMA, CODERUSH 1.0) with 250+ participants.",
                "Conducted weekly departmental coding contests for 50+ students."
            ]
        },
        {
            year: "AUG 2024 — PRESENT",
            company: "CTSC (College Tech Society)",
            role: "Optimum Head (Media & Branding)",
            points: [
                "Directed media and branding operations for college fests with 3,000+ attendees.",
                "Boosted Instagram engagement by 2.5x through high-quality visuals."
            ]
        }
    ],
    education: {
        year: "2022 — 2026",
        school: "Yeshwantrao Chavan College Of Engineering",
        degree: "Bachelor of Technology in Computer Technology | CGPA: 8.55",
        location: "Nagpur, India"
    },
    projects: [
        {
            title: "CERES",
            desc: "AI-Based Smart OS Automation. Tauri-based system with an NLP-to-OS script pipeline using Whisper.",
            tags: ["TAURI", "PYTHON", "WHISPER"],
            image: "/images/ceres.png",
            link: "https://github.com/Piyush22070/ceres"
        },
        {
            title: "ACS Sentinel - Autonomous Cloud Reliability Agent",
            desc : "Engineered a self-healing Kubernetes agent using LangGraph and Python, automating failure remediation for 3 critical scenarios (DB crash, zombie tasks, security)",
            tags: ["LANGGRAPH", "KUBERNETES", "PYTHON"],
            image: "/images/acs.png",
            link: "https://github.com/Piyush22070/acs"
        },
        {
            title: "Codify",
            desc: "Remote Code Execution System. Cloud-based real-time executor with Next.js 14, Tailwind, TS, and MongoDB.",
            tags: ["NEXT.JS", "DOCKER", "CI/CD"],
            image: "/images/codify.png",
            link: "https://github.com/Piyush22070/codify-server"
        },
        {
            title: "Smart Grading System",
            desc: "Subjective Answer Evaluation System. Leverages BERT for semantic analysis and Gemini OCR.",
            tags: ["NLP", "FASTAPI", "BERT"],
            image: "/images/eval.jpg",
            link: "https://github.com/Piyush22070/CT-6-final-year-project"
        },
        {
            title: "Transformer Translator",
            desc: "English-to-German translator using PyTorch & 'Attention Is All You Need' architecture. Trained on 25k+ sentence pairs.",
            tags: ["PYTORCH", "NLP", "TRANSFORMER"],
            image: "/images/transformer.png",
            link: "https://github.com/Piyush22070/Transformer"
        }

    ],
    creative: [
        {
            title: "Tech Vlogging",
            desc: "Creating content on AI & Engineering. Visit Channel.",
            icon: "fab fa-youtube",
            link: "https://www.youtube.com/@PiyushBhoyar-Vlogs"
        },
        {
            title: "Video Production",
            desc: "High-retention editing & storytelling for tech narratives.",
            icon: "fas fa-film",
            link: "https://www.youtube.com/@PiyushBhoyar-Vlogs"
        }
    ],
    distinctions: [
        { 
            title: "Smart India Hackathon Finalist", 
            desc: "Selected for the grand finale of the world's biggest open innovation model.",
            image: "/images/sih.jpeg"
        },
        { 
            title: "Winner - Web Reshape Hackathon", 
            desc: "VNIT Nagpur (Axis'25). Ranked 1st of 100+ teams.",
            image: "/images/vnit.jpeg"
        },
        { 
            title: "Winner - Hackathon (Sipna)", 
            desc: "Secured 1st Runner Up among 250+ participants.",
            image: "/images/sipna.jpeg"
        },
        { 
            title: "Winner - St. Vincent Palloti", 
            desc: "Secured 1st Position by building 'Sarti' Mutual Fund Manager.",
            image: "/images/palloti.jpg"
        },
        { 
            title: "3-Star Coder", 
            desc: "CodeChef (Max Rating: 1600). Solved 300+ competitive problems.",
            image: "/images/cc.png"
        }
    ],
    contact: {
        location: "Nagpur, Maharashtra, India",
        email: "piyushbhoyar6480@gmail.com",
        links: {
            linkedin: "https://www.linkedin.com/in/piyush-bhoyar",
            github: "https://github.com/Piyush22070",
            twitter: "https://x.com/piyushbhoyar131",
            instagram: "https://www.instagram.com/_piyush_bhoyar/",
            youtube: "https://www.youtube.com/@PiyushBhoyar-Vlogs"
        }
    },
    certificates: [
    { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", link: "https://coursera.org/verify/MTTVIGOC8DBH" },
    { title: "Developing AI Applications with Python and Flask", issuer: "IBM", link: "https://coursera.org/verify/JLSTYM51QJ47" },
    { title: "Developing Back-End Apps with Node.js and Express", issuer: "IBM", link: "https://coursera.org/verify/M7A4RB45VDC7" },
    { title: "Developing Front-End Apps with React", issuer: "IBM", link: "https://coursera.org/verify/PYKR5GCTRF3W" },
    { title: "Generative AI: Elevate your Career", issuer: "IBM", link: "https://coursera.org/verify/31PWERJ6WVIM" },
    { title: "Full Stack Software Developer Assessment", issuer: "IBM", link: "https://coursera.org/verify/FII2FVPCUIQ2" },
    { title: "Python for Data Science, AI & Development", issuer: "IBM", link: "https://coursera.org/verify/4CNR1VICI6KC" },
    { title: "Introduction to Cloud Computing", issuer: "IBM", link: "https://coursera.org/verify/L96GKBEQ1FIE" },
    { title: "Introduction to Software Engineering", issuer: "IBM", link: "https://coursera.org/verify/926GB7UKZC21" },
    { title: "Developing Apps with Git & GitHub", issuer: "IBM", link: "https://coursera.org/verify/K5RMF093788U" },
    { title: "HTML, CSS, & JavaScript Intro", issuer: "IBM", link: "https://coursera.org/verify/HPSV1GKMH8NQ" },
    { title: "Software Developer Career Guide and Interview Preparation", issuer: "IBM", link: "https://coursera.org/verify/8CW9NKZSGPEK" },
    ],
    videos: [
    {
        title: "AI OS Automation Demo",
        desc: "Ceres agent performing system tasks via voice commands.",
        videoSrc: "/videos/CERES-demo.mp4", 
        thumbnail: "/images/ceres.jpg"
    },
    ],
};