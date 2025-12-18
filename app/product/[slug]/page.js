import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import ContactForm from "@/components/widgets/contact-form";
import ProductCard from "@/components/widgets/product-card";
import PageHeader from "@/components/widgets/page-header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { product } from "@/data/product";

export const runtime = 'edge';

// Metadata

export default function Product({ params }) {
	const { slug } = params;

	// Convert slug to title format for matching
	const titleFromSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	const product_data = product.find((item) => 
		item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug.toLowerCase()
	);
	if (!product_data) return notFound();

	const related_product = product.filter(item => item.category === product_data.category && item.title !== product_data.title).slice(0, 4);

	const header = {
		title: product_data.title,
		focus: product_data.category,
		breadcrumb: [
			{
				label: "All Products",
				href: "/product"
			}
		],
		description: product_data.description
	};

	return (
		<>
			<PageHeader data={header} />

			<div className="container flex flex-col lg:flex-row justify-between mt-8 gap-8">
				<div className="w-full lg:w-2/3 text-justify">
					<Image src={product_data.image} alt={product_data.title} className="w-full border border-border rounded-lg" width={800} height={500} />
					{product_data.images && product_data.images.length > 0 && (
						<div className="grid md:grid-cols-2 gap-6 mt-6">
							{product_data.images.map((item, index) => (
								<Image key={index} src={item} alt={product_data.title} className="w-full border border-border rounded-lg" width={400} height={300} />
							))}
						</div>
					)}

					{product_data.features && product_data.features.length > 0 && (
						<div className="flex flex-col gap-6 mt-8">
							<h2 className="text-2xl font-bold">Key Features</h2>
							{product_data.features.map((feature, index) => (
								<div key={index} className="border-l-4 border-primary pl-4 py-2">
									<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
									<p className="text-base text-muted-foreground">{feature.description}</p>
								</div>
							))}
						</div>
					)}

					{product_data.product_description && (
						<div className="flex flex-col gap-4 mt-8">
							<h2 className="text-lg font-bold">Product Description</h2>
							{product_data.product_description.map((item, index) => (
								<p key={index} className="text-base text-muted-foreground">
									{item}
								</p>
							))}
						</div>
					)}

					{product_data.product_parameter && (
						<div className="flex flex-col gap-4 mt-8">
							<h2 className="text-lg font-bold">Product Parameter</h2>
							{product_data.product_parameter.map((item, index) => (
								<p key={index} className="text-base text-muted-foreground">
									{item}
								</p>
							))}
						</div>
					)}

					{product_data.faq && (
						<div className="flex flex-col gap-4 mt-8">
							<h2 className="text-lg font-bold">Product FAQ</h2>
							<Accordion type="single" collapsible className="w-full AccordionRoot">
								{product_data.faq.map((item, index) => (
									<AccordionItem key={index} value={`question-${index}`}>
										<AccordionTrigger className="font-medium text-muted-foreground hover:text-muted-foreground/60 hover:no-underline">{item.question}</AccordionTrigger>
										<AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					)}
				</div>

				<aside className="w-full lg:w-1/3 top-10 h-fit lg:sticky">
					<div className="flex flex-col gap-6">
						<span className="text-sm font-medium">Request a Quote</span>
						<div className="space-y-4">
							<ContactForm />
						</div>
					</div>
				</aside>
			</div>

			<div className="container mt-12 gap-6">
				<h2 className="text-lg font-bold">Related Products</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
					{related_product.map((item, index) => (
						<ProductCard key={index} data={item} />
					))}
				</div>
			</div>
		</>
	);
}
