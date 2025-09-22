interface Project {
	title: string;
	type: string;
	technologies: string[];
	description: string;
	url: string;
	githubUrl?: string;
	stars?: number;
	screenshot?: string;
	gif?: string;
}

interface Tool {
	title: string;
	slug: string;
	description: string;
	screenshot?: string;
	gif?: string;
}

export const LINKS = [
	{
		url: "/",
		name: "About",
	},
	{
		url: "/work",
		name: "Work",
	},
	{
		url: "/blog",
		name: "Blog",
	},
];

export const TOOLS: Tool[] = [
	{
		title: "Sprite your SVGs",
		slug: "sprite-your-svgs",
		description:
			"Transform and optimize your SVGs by generating an efficient sprite. Reduce HTTP requests, style with CSS, and externalize icon data.",
		screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
	},
	{
		title: "EmojiSense",
		slug: "emoji-sense",
		description:
			"AI-powered emoji suggestion tool that helps you find the perfect emojis for your text. Get customized emoji recommendations instantly.",
		gif: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center",
	},
	{
		title: "BTC 100K Countdown",
		slug: "btc-100k",
		description:
			"A real-time Bitcoin price tracker that shows the progress towards $100,000, powered by Pyth Network's price feeds.",
		screenshot: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop&crop=center",
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
			"Final grade of 18/20.",
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
];

export const PAST_EXPERIENCE_HOMEPAGE = [
	{
		title: "Fullstack Engineer",
		place: "OpenBB",
		placeUrl: "https://openbb.co",
		description: `Currently working at OpenBB with the mission of building modern investment research platforms for everyone. Our primary product, [OpenBB Workspace](https://pro.openbb.co), is a web application built with React, TailwindCSS, Zustand, and other amazing technologies that enable AI workflows while guaranteeing full control over your data. I've also contributed to other projects including [openbb.co](https://openbb.co), our company website built with remix.run, and [my.openbb.co](https://my.openbb.co), our product management platform. Sign up for OpenBB Workspace [today](https://pro.openbb.co).`,
		date: "2021 - Present",
	},
	{
		title: "Cybersecurity Researcher",
		place: "University of Coimbra",
		placeUrl: "https://www.uc.pt/en",
		description:
			"As part of my master internship, I was awarded a research scholarship from FCT (the Portuguese public agency that supports science, technology and innovation). This enabled me to work independently while having the support of my supervisor. It was a great challenge that came with a lot of freedom, but also with huge responsibilities. The focus of this internship (and my dissertation) was to assess whether web applications were already a viable alternative to native ones in mobile devices. Based on this, I delivered my master thesis, which was a comparative study between web and native applications, you can read it [here](/master_thesis.pdf). I also wrote about several cybersecurity topics, you can read them in my [blog](/blog).",
		date: "2019 - 2020",
	},
	{
		title: "Freelance Fullstack Engineer",
		place: "",
		description: `In 2018, I built the credentialing system for Queima das Fitas, one of Portugal's largest festivals, including a Flutter app for QR code entry. I also developed a [native app for my high school](https://appadvice.com/app/myesjf/1462460664) and [another for Queima das Fitas](https://noticias.uc.pt/multimedia/videos/queimapp-chegou-a-primeira-aplicacao-mobile-dedicada-a-queima-das-fitas/), which later inspired [EveApp](https://www.facebook.com/EveApp2019/), both built in React Native. Since then, I've worked professionally on multiple projects, such as [ruc.pt](https://ruc.pt) (a nationwide radio website) using Next.js, TailwindCSS, WordPress, and GraphQL, along with various web apps for clients on Upwork using Next.js and Firebase.`,
		date: "2018 - 2020",
	},
];

export const HIGHLIGHTS_HOMEPAGE = [
	{
		title: "Building OpenBB Workspace",
		description:
			"Leading the development of OpenBB Workspace, a performant web application highly customizable that enables AI workflows while guaranteeing full control over your data.",
		url: "https://pro.openbb.co",
	},
	{
		title: "Twitter Posts",
		description:
			"Explore the demos, tools, and projects I’ve recently shared on Twitter and learn a bit about my development journey.",
		url: "#twitter-demos",
	},
	{
		title: "Pyth Integration: Real-Time Data + AI",
		description:
			"Developed OpenBB's first real-time widget using Pyth Network integration, showcasing the future of finance through a combination of real-time data feeds, and AI capabilities.",
		url: "https://www.youtube.com/watch?v=LWUioH_ncQk",
	},
	{
		title:
			"Web Applications vs Native Applications",
		description:
			"In my master's thesis, I conducted a comparative study between web and native applications for mobile devices, exploring their reliability and performance.",
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
		description: "The company website for OpenBB.",
		url: "https://openbb.co",
		screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
	},
	{
		title: "OpenBB Workspace",
		type: "web app",
		technologies: ["React", "TailwindCSS", "Zustand", "Tanstack/React Query"],
		description: "Enterprise UI built for AI workflows.",
		url: "https://pro.openbb.co",
		gif: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
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
		screenshot: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
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
			"Transform and optimize your SVGs by generating an efficient sprite, reducing HTTP requests and externalizing icon data.",
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
		title: "Credential Platform",
		type: "mobile app",
		technologies: ["Flutter", "Flask", "MySQL"],
		description:
			"A platform for creating credentials for one of the biggest festivals in Portugal.",
		url: "",
	},
	{
		title: "High School App",
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
