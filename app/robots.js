export const dynamic = 'force-static'

export default function robots() {
	return {
		rules: {
			userAgent: "*",
			disallow: "/"
		},
		sitemap: `https://wurenji-3gs.pages.dev/sitemap.xml`
	};
}
