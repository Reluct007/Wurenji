import ScrollToTop from "@/components/widgets/scroll-to-top";
import Navbar from "@/components/features/navbar";
import Footer from "@/components/features/footer";
import { Toaster } from "@/components/ui/sonner";
import CTA from "@/components/features/cta";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata = {
	title: {
		default: "DaQi UAV - Professional UAV Solutions & Components",
		template: "%s - DaQi UAV"
	},
	description: "Leading manufacturer of long-range UAVs, high-performance motors, and fiber optic communication systems for unmanned aerial vehicles.",
	openGraph: {
		title: "DaQi UAV - Professional UAV Solutions",
		description: "Leading manufacturer of long-range UAVs, high-performance motors, and fiber optic communication systems.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "DaQi UAV"
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "DaQi UAV",
			template: "%s - DaQi UAV"
		},
		description: "Leading manufacturer of long-range UAVs and components.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "DaQi UAV"
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
