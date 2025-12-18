export default function sitemap() {
	return [
		{
			url: `${process.env.ROOT_URL}`,
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1
		}
	];
}
