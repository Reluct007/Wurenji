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
		default: "Wurenji UAV - Professional FPV Racing & Heavy-Lift Drones Manufacturer",
		template: "%s | Wurenji UAV"
	},
	description: "Leading manufacturer of high-performance FPV racing drones and heavy-lift industrial UAVs. Offering Mark 7'', Mark 10'' racing drones, and 13''-15'' heavy-lift hexacopters with up to 18kg payload capacity, 50-minute flight time, and 15km video transmission range. OEM customization available.",
	keywords: [
		"FPV racing drone",
		"heavy-lift drone",
		"industrial UAV",
		"hexacopter",
		"professional drone manufacturer",
		"long-range FPV",
		"aerial photography drone",
		"commercial drone",
		"drone OEM",
		"high payload drone",
		"BetaFlight drone",
		"INAV compatible",
		"carbon fiber drone",
		"long endurance UAV",
		"industrial inspection drone"
	],
	openGraph: {
		title: "Wurenji UAV - Professional FPV Racing & Heavy-Lift Drones",
		description: "High-performance FPV racing drones (150-160km/h) and heavy-lift industrial UAVs (up to 18kg payload). Professional drone manufacturer with OEM customization.",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Wurenji UAV - Professional Drone Manufacturer"
			}
		],
		locale: "en_US",
		type: "website",
		siteName: "Wurenji UAV"
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: "Wurenji UAV - FPV Racing & Heavy-Lift Drones",
			template: "%s | Wurenji UAV"
		},
		description: "Professional FPV racing drones and heavy-lift UAVs. Up to 18kg payload, 50min flight time, 15km range. OEM available.",
		images: [
			{
				url: "/opengraph-image.png",
				alt: "Wurenji UAV Drones"
			}
		]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
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
