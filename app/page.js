import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "DaQi UAV - Advanced Unmanned Aerial Systems",
	description: "Professional grade UAVs, motors, and fiber optic solutions for industrial applications."
};

// Structured Data
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: `${process.env.ROOT_URL}`
		}
	]
};

export default function Home() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<Hero />
			<FeaturedCategories />
			<CustomizableOptions />
			<CustomizableProcess />
			<ProductionCapacity />
			<FAQ />
			<Testimonials />
		</>
	);
}
