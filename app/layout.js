import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: "Wurenji UAV - Professional Drone Manufacturer",
		template: "%s - Wurenji UAV"
	},
	description: "Professional manufacturer of FPV racing drones and heavy-lift industrial UAVs, offering complete product lines from 7-inch to 15-inch hexacopter.",
	openGraph: {
		title: "Wurenji UAV - Professional Drone Manufacturer",
		description: "Professional manufacturer of FPV racing drones and heavy-lift industrial UAVs.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Wurenji UAV"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "Wurenji UAV",
			template: "%s - Wurenji UAV"
		},
		description: "Professional manufacturer of FPV racing and heavy-lift drones.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "Wurenji UAV"
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<CTA />
				<Footer />
				<ScrollToTop />
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
