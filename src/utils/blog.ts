interface BlogPost {
	slug: string;
	title: string;
	type: string;
	snippet: string;
	coverImage: string;
	date: string;
	topics: string;
	content?: string;
	readingTime?: number;
}

// Import blog post data from old blog
// This simulates fetching from the old blog files
export const BLOG_POSTS: BlogPost[] = [
	{
		slug: "push-notifications-expo",
		title: "Minimalist Approach to send Push Notifications with Expo",
		type: "post",
		snippet: "Example on how to send push notifications with Expo",
		coverImage: "/add-notification-blog.png",
		date: "28.01.2020",
		topics: "#reactnative #react #node #javascript #expo",
		readingTime: 7,
	},
	{
		slug: "adding-a-service-worker-into-your-next-js-application",
		title: "Adding a service worker into your Next.js application",
		type: "post",
		snippet:
			"What are service workers and how to add them to a Next.js application",
		coverImage: "/add-sw-blog.png",
		date: "14.10.2020",
		topics: "#pwa #nextjs #serviceworkers #javascript #react",
		readingTime: 5,
	},
	{
		slug: "SP_CS2",
		title: "Security Patterns - Case Study 2",
		type: "post",
		snippet: "Quick summary of Security Patterns Case Study 2",
		coverImage: "",
		date: "15.11.2019",
		topics: "#security #patterns",
		readingTime: 2,
	},
	{
		slug: "ITS_T1",
		title: "IT Security - Topic 1",
		type: "post",
		snippet: "Summary of IT Security Topic 1",
		coverImage: "",
		date: "05.10.2019",
		topics: "#security #it",
		readingTime: 3,
	},
];

// Function to get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPost[] {
	return [...BLOG_POSTS].sort((a, b) => {
		const dateA = a.date.split(".");
		const dateB = b.date.split(".");
		return (
			new Date(`${dateB[2]}-${dateB[1]}-${dateB[0]}`).getTime() -
			new Date(`${dateA[2]}-${dateA[1]}-${dateA[0]}`).getTime()
		);
	});
}

// Function to get a specific blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return BLOG_POSTS.find((post) => post.slug === slug);
}

// Function to get unique topics from all blog posts
export function getBlogTopics(): string[] {
	const allTopics = BLOG_POSTS.flatMap((post) =>
		post.topics.split(/\s+/).filter((topic) => topic.startsWith("#")),
	);
	return Array.from(new Set(allTopics)).sort();
}
