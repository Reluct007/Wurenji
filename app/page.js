import CustomizableOptions from "@/components/features/customizable-options";
import CustomizableProcess from "@/components/features/customizable-process";
import FeaturedCategories from "@/components/features/featured-categories";
import ProductionCapacity from "@/components/features/production-capacity";
import Testimonials from "@/components/features/testimonials";
import Hero from "@/components/features/hero";
import FAQ from "@/components/features/faq";

// Metadata
export const metadata = {
	title: "Home",
	description: "Wurenji UAV - Leading manufacturer of high-performance FPV racing drones (Mark 7'', Mark 10'') and heavy-lift industrial UAVs (13''-15'' hexacopters). Featuring up to 160km/h speed, 18kg payload capacity, 50-minute flight time, and 15km video transmission. Professional drone solutions with OEM customization for racing, aerial photography, industrial inspection, and logistics."
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
