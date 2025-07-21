interface Project {
	title: string;
	type: string;
	technologies: string[];
	description: string;
	url: string;
	githubUrl?: string;
	stars?: number;
}

export const LINKS = [
	{
		url: "/",
		name: "About",
	},
	{
		url: "/projects",
		name: "Projects",
	},
	{
		url: "/blog",
		name: "Blog",
	},
];

export const TOOLS = [
	{
		title: "Sprite your SVGs",
		slug: "sprite-your-svgs",
		description:
			"Transform and optimize your SVGs by generating an efficient sprite. Reduce HTTP requests, style with CSS, and externalize icon data.",
	},
	{
		title: "EmojiSense",
		slug: "emoji-sense",
		description:
			"AI-powered emoji suggestion tool that helps you find the perfect emojis for your text. Get customized emoji recommendations instantly.",
	},
	{
		title: "BTC 100K Countdown",
		slug: "btc-100k",
		description:
			"A real-time Bitcoin price tracker that shows the progress towards $100,000, powered by Pyth Network's price feeds.",
	},
	{
		title: "Gift Helper",
		slug: "gift-helper",
		description:
			"AI-powered gift suggestion tool that helps you find the perfect gift for your family, friends, and anyone else you want to give a gift to.",
	},
	{
		title: "Quiz Generator",
		slug: "quiz-generator",
		description:
			"Transform your blog posts into interactive quizzes powered by AI.",
	},
];

export const EDUCATION = [
	{
		title: "Master in Informatics Security",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"I've completed my master in Informatics Engineering at the University of Coimbra with a final grade of 18/20.",
		date: "2018 - 2020",
	},
	{
		title: "Bachelor in Computer Science",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"I've completed my bachelor in Informatics Engineering at the University of Coimbra with a final grade of 16/20.",
		date: "2015 - 2018",
	},
	{
		title: "English Language Certification - B2",
		description: "Completed my first English language certification.",
		date: "2015",
	},
];

export const PAST_EXPERIENCE_HOMEPAGE = [
	{
		title: "Fullstack Developer",
		place: "OpenBB",
		placeUrl: "https://openbb.co",
		description: `First engineering hire at OpenBB, leading web development for enterprise data analysis platform. Architected [OpenBB Workspace](https://pro.openbb.co) from concept to production - a React-based platform that consolidates data sources and enables AI workflows for organizations of all types. Built with React, TypeScript, Zustand, and modern web technologies for secure deployment on-premises and private cloud. Also contributed to [openbb.co](https://openbb.co) company website built with Remix, and [my.openbb.co](https://my.openbb.co) product management platform.`,
		date: "2021 - Present",
	},
	{
		title: "Web Performance Researcher",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"Awarded research scholarship from FCT (Portuguese science agency) to conduct independent research on web application performance. Focused on comparative analysis between web and native applications across mobile platforms, examining computational performance, user experience, and technical feasibility. Research demonstrated that modern web technologies can achieve native-level performance for complex operations. Delivered comprehensive thesis available [here](/master_thesis.pdf) and published findings on web technology capabilities.",
		date: "2019 - 2020",
	},
	{
		title: "Freelance Fullstack Developer",
		place: "",
		description: `In 2018, I built the credential platform for Queima das Fitas, one of the biggest festivals in Portugal - it enabled the creation of the credentials and included an application (in Flutter) to read the QR codes at the festivals' entrance. I have also built a [native application for a high school in my hometown](https://appadvice.com/app/myesjf/1462460664) and a different [application for Queima das Fitas](https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/) which later evolved into [EveApp](https://www.facebook.com/EveApp2019/). All these applications were built using React Native. Later, I developed several applications professionally including a website for a nation-wide radio [ruc.pt](https://ruc.pt) using Next.js, TailwindCSS for the frontend and Wordpress, GraphQL for the backend, as well as other web applications using Next.js and Firebase for clients in Upwork freelancing platform.`,
		date: "2018 - 2020",
	},
];

export const HIGHLIGHTS_HOMEPAGE = [
	{
		title: "OpenBB Workspace: Enterprise Data Platform",
		description:
			"Architected React-based data analysis platform serving enterprise clients. Built for secure AI integration and flexible data workflows beyond traditional use cases.",
		url: "https://pro.openbb.co",
	},
	{
		title: "Real-Time Data Infrastructure",
		description:
			"Designed architecture connecting diverse data sources with real-time streaming capabilities. Built WebSocket infrastructure and optimized chart rendering for large datasets.",
		url: "https://www.youtube.com/watch?v=LWUioH_ncQk",
	},
	{
		title:
			"Web vs Native Application Performance Research",
		description:
			"Masters thesis comparing web and native application performance across mobile devices. Research demonstrated web applications can achieve native-level performance for data-intensive operations.",
		url: "/master_thesis.pdf",
	},
];

export const PROJECTS: Project[] = [
	{
		title: "OpenBB Website",
		type: "website",
		technologies: [
			"remix.run",
			"TailwindCSS",
			"TypeScript",
			"mdx-bundler",
			"Posthog",
			"Directus",
		],
		description: "Company website built with Remix.run featuring server-side rendering, headless CMS integration, and analytics. Optimized for performance and SEO.",
		url: "https://openbb.co",
	},
	{
		title: "OpenBB Workspace",
		type: "web app",
		technologies: ["React", "TailwindCSS", "Zustand", "Tanstack/React Query"],
		description: "Enterprise data analysis platform with AI integration. Built React-based architecture for secure on-premises deployment, real-time data streaming, and flexible workflows.",
		url: "https://pro.openbb.co",
	},
	{
		title: "ollama-reply",
		type: "browser extension",
		technologies: [
			"React",
			"Vite",
			"TypeScript",
			"TailwindCSS",
			"shadcn-ui",
			"Ollama",
		],
		description:
			"An open-source browser extension that leverages the power of the Ollama Llama3 model to generate engaging replies for social media growth.",
		url: "https://github.com/jose-donato/ollama-reply",
	},
	{
		title: "Race Stack",
		type: "web app",
		technologies: [
			"Remix",
			"TailwindCSS",
			"TypeScript",
			"Cloudflare Pages",
			"Cloudflare D1",
			"Drizzle ORM",
		],
		description:
			"A Remix run stack built for the edge, utilizing Cloudflare Pages and D1 for optimal performance.",
		url: "https://github.com/jose-donato/race-stack",
	},
	{
		title: "Sprite Your SVGs",
		type: "web app",
		technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
		description:
			"Web-based SVG optimization tool built with SvelteKit. Generates efficient sprites, reduces HTTP requests, and provides real-time preview with performance metrics.",
		url: "https://github.com/jose-donato/sprite-your-svgs",
	},
	{
		title: "OpenBB Docs",
		type: "website",
		technologies: ["docussaurus", "TailwindCSS", "TypeScript", "React"],
		description: "The company website for OpenBB.",
		url: "https://docs.openbb.co",
		githubUrl: "",
	},
	{
		title: "OpenBB Hub",
		type: "website",
		technologies: ["remix.run", "TailwindCSS", "TypeScript"],
		description: "The company website for OpenBB.",
		url: "https://hub.openbb.co",
	},
	{
		title: "OpenBB Platform",
		type: "desktop app",
		technologies: ["Python", "Plotly", "Pydantic", "FastAPI", "Pandas"],
		description: "An open source product for investment research.",
		url: "https://github.com/OpenBB-finance/OpenBB",
	},
	{
		title: "Credential Platform for Queima das Fitas",
		type: "mobile app",
		technologies: ["Flutter", "Flask", "MySQL"],
		description:
			"A platform for creating credentials for one of the biggest festivals in Portugal.",
		url: "",
	},
	{
		title: "Native Application for a High School",
		type: "mobile app",
		technologies: ["React Native", "Expo"],
		description: "A native application for a high school in my hometown.",
		url: "https://appadvice.com/app/myesjf/1462460664",
	},
	{
		title: "Application for Queima das Fitas",
		type: "mobile app",
		technologies: ["React Native", "Expo"],
		description: "A mobile application dedicated to Queima das Fitas.",
		url: "https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/",
	},
	{
		title: "RUC.pt",
		type: "website",
		technologies: ["Next.js", "TailwindCSS", "Wordpress", "GraphQL"],
		description: "A website for a nation-wide radio.",
		url: "https://ruc.pt",
	},
	{
		title: "Smart contracts to sign up presences in classrooms",
		type: "web app",
		technologies: [
			"web3",
			"React",
			"Material-UI",
			"truffle",
			"ganache",
		],
		description:
			"Project done for Informatics Security and Law course. It uses smart contracts to register the presence of students in a classroom and for teachers to check which students are present.",
		url: "https://gitlab.com/presences",
	},
	{
		title: "Learning elliptic-curve cryptography",
		type: "web app",
		technologies: ["Next.js", "Material-UI"],
		description:
			"Web App developed for Cryptography course in Masters. It has a backend in Node.js to calculate the elliptic curves.",
		url: "https://elliptic-curves-frontend.now.sh",
	},
	{
		title: "Public Key Infrastructure with blockchain",
		type: "web app",
		technologies: ["Node.js", "Blockchain", "React", "Material-UI"],
		description:
			"Backend uses node.js and implements a simple blockchain to store the PKI certificates. The frontend is a React application.",
		url: "https://gitlab.com/pki1",
	},
	{
		title: "Mihi Jewellery",
		type: "website",
		technologies: ["Next.js", "DatoCMS", "TailwindCSS", "TypeScript"],
		description:
			"Ecommerce catalog developed for a jewellery company. Uses DatoCMS and Next.js with TailwindCSS and Cloudinary for media management.",
		url: "https://mihi-jewellery.com",
	},
	{
		title: "Pensec",
		type: "desktop app",
		technologies: ["Python", "nmap", "searchsploit"],
		description:
			"Project done for Security Auditing course. Python application that aims to be an all-in-one pentesting tool.",
		url: "https://github.com/jose-donato/pensec",
	},
	{
		title: "presentation-helper",
		type: "web app",
		technologies: ["Next.js", "Firebase", "TailwindCSS", "PWA"],
		description:
			"Productivity tool to help you and your attendees ace in presentations. It is a PWA with excellent lighthouse scores.",
		url: "https://github.com/jose-donato/presentation-helper",
	},
];

export const SOCIALS = [
	{
		url: "https://github.com/jose-donato",
		icon: "mdi-github",
		name: "GitHub",
	},
	{
		url: "https://twitter.com/intent/follow?screen_name=josedonato__",
		icon: "mdi-twitter",
		name: "Twitter",
	},
	{
		url: "https://www.linkedin.com/in/jose-donato/",
		icon: "mdi-linkedin",
		name: "LinkedIn",
	},
];
