export const dynamic = 'force-static'

export default function sitemap() {
	return [
		{
			url: `https://wurenji-3gs.pages.dev`,
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1
		}
	];
}
