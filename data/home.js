export const navbar = {
	brand: {
		name: "Wurenji UAV",
		logo: "/logo.svg"
	},
	menu: [
		{ label: "Home", href: "/" },
		{ label: "Categories", href: "/collection" },
		{ label: "Products", href: "/product" },
		{ label: "About Us", href: "/about" },
		{ label: "Contact Us", href: "/contact" }
	],
	button: {
		text: "Get Quote",
		title: "Request a Quote",
		description: "Tell us about your project requirements and we'll get back to you with a customized solution."
	}
};

export const hero = {
	title: "Professional UAV Manufacturer",
	focus: "UAV",
	bg_image: "/images/uav_intro_p1_0.jpg",
	description: "Specialized in FPV racing and heavy-lift industrial drones, offering complete product lines from 7-inch to 15-inch hexacopter, with OEM customization and global shipping.",
	button: [
		{
			title: "View Products",
			variant: "default",
			href: "/product"
		},
		{
			title: "Contact Us",
			variant: "outline",
			href: "/contact"
		}
	],
	feature: [
		{
			title: "High Speed",
			description: "Max 160km/h"
		},
		{
			title: "Long Endurance",
			description: "Up to 50min"
		},
		{
			title: "Heavy Payload",
			description: "Max 18kg"
		},
		{
			title: "Customizable",
			description: "Bulk customization"
		}
	]
};

export const featuredCategories = {
	title: "Our Core Product Lines",
	focus: "Core Products",
	cta_text: "View All Products",
	cta_link: "/product",
	description: "From high-speed FPV racing drones to heavy-lift industrial UAVs, we offer complete professional drone solutions.",
	items: [
		{
			title: "FPV Racing Drones",
			focus: "FPV Racing",
			slug: "/fpv-racing-drones",
			image: "/images/pd1.png",
			description: "7-10 inch high-speed FPV drones, max speed 160km/h, 15km video transmission range."
		},
		{
			title: "Heavy-Lift Drones",
			focus: "Heavy-Lift",
			slug: "/heavy-lift-drones",
			image: "/images/sc2.png",
			description: "13-15 inch professional heavy-lift drones, 6-18kg payload capacity, for industrial applications."
		},
		{
			title: "Long-Endurance UAVs",
			focus: "Long-Endurance",
			slug: "/long-endurance-uavs",
			image: "/images/uav_intro_p1_0.jpg",
			description: "Ultra-long endurance patrol UAVs with up to 50 minutes flight time."
		},
		{
			title: "Custom Solutions",
			focus: "Custom",
			slug: "/custom-solutions",
			image: "/images/product_2025_p13_37.png",
			description: "OEM customization and bulk orders available with global dropshipping service."
		}
	]
};

export const customizableOptions = {
	title: "Tailored to Your Mission",
	focus: "Your Mission",
	description: "We understand that every mission is unique. Our platforms and components can be customized to meet your specific operational requirements.",
	items: [
		{
			title: "Payload Integration",
			id: "payload",
			description: "Flexible mounting options for various sensors and cameras",
			image: "/images/product_2025_p13_37.png",
			options: [
				{ title: "Optical Cameras", description: "High-resolution RGB cameras for inspection" },
				{ title: "Thermal Imaging", description: "IR sensors for night and heat detection" },
				{ title: "LiDAR", description: "Laser scanning for 3D mapping" },
				{ title: "Multispectral", description: "Sensors for agricultural analysis" },
				{ title: "Custom Payloads", description: "Integration of specialized equipment" }
			]
		},
		{
			title: "Flight Performance",
			id: "performance",
			description: "Optimized configurations for range, speed, or endurance",
			image: "/images/product_2025_p12_33.png",
			options: [
				{ title: "Extended Battery", description: "Increased capacity for longer flights" },
				{ title: "Heavy Lift", description: "Upgraded propulsion for heavier payloads" },
				{ title: "High Speed", description: "Aerodynamic tuning for rapid response" },
				{ title: "High Altitude", description: "Propellers and motors for thin air" },
				{ title: "All-Weather", description: "Weatherproofing for rain and dust resistance" }
			]
		},
		{
			title: "Communication",
			id: "communication",
			description: "Secure and reliable data links for any environment",
			image: "/images/fiber_catalog_p5_4.jpg",
			options: [
				{ title: "Fiber Optic Tether", description: "Unlimited data bandwidth and security" },
				{ title: "Long Range Radio", description: "Encrypted links for BVLOS operations" },
				{ title: "4G/5G Control", description: "Cellular network based command and control" },
				{ title: "Satellite Link", description: "Global connectivity for remote areas" },
				{ title: "Anti-Jamming", description: "Resilient systems for contested environments" }
			]
		},
		{
			title: "Structure & Materials",
			id: "materials",
			description: "Airframes built for durability and lightness",
			image: "/images/motor_catalog_p4_32.png",
			options: [
				{ title: "Carbon Fiber", description: "Standard for high strength-to-weight ratio" },
				{ title: "Kevlar Reinforcement", description: "Added impact protection for critical areas" },
				{ title: "Foldable Arms", description: "Compact design for easy transport" },
				{ title: "Quick Release", description: "Tool-less assembly for rapid deployment" },
				{ title: "Custom Colors", description: "Branding or camouflage options" }
			]
		},
		{
			title: "Software & AI",
			id: "software",
			description: "Intelligent features for autonomous operations",
			image: "/images/product_2025_p17_48.png",
			options: [
				{ title: "Object Tracking", description: "AI-powered target following" },
				{ title: "Waypoints", description: "Pre-planned autonomous flight paths" },
				{ title: "Swarm Control", description: "Coordinated multi-drone missions" },
				{ title: "Real-time Analytics", description: "Onboard data processing" },
				{ title: "Custom SDK", description: "Developer access for specialized apps" }
			]
		}
	]
};

export const customizableProcess = {
	title: "Our Partnership Process",
	focus: "Process",
	description: "From requirement analysis to deployment support, we work closely with you to ensure our UAV solutions meet your operational goals.",
	items: [
		{
			title: "Requirement Analysis",
			description: "We analyze your mission needs, environment, and payload requirements.",
			highlights: ["Mission profile assessment", "Payload compatibility check", "Environmental analysis"]
		},
		{
			title: "Solution Proposal",
			description: "Our engineers propose the optimal UAV configuration or component selection.",
			highlights: ["Technical specifications", "Performance estimations", "Cost-benefit analysis"]
		},
		{
			title: "Custom Engineering",
			description: "If needed, we modify existing platforms or design custom integration solutions.",
			highlights: ["CAD modeling", "Circuit design", "Software configuration"]
		},
		{
			title: "Prototyping & Testing",
			description: "Rigorous testing of the solution to ensure it meets performance standards.",
			highlights: ["Flight testing", "Endurance verification", "Payload integration test"]
		},
		{
			title: "Production & Delivery",
			description: "Manufacturing with strict quality control and timely delivery.",
			highlights: ["ISO quality checks", "Secure packaging", "Global logistics"]
		},
		{
			title: "Training & Support",
			description: "Comprehensive training for your pilots and ongoing technical support.",
			highlights: ["Operational training", "Maintenance guides", "24/7 technical support"]
		}
	]
};

export const productionCapacity = {
	title: "Manufacturing Excellence",
	focus: "Excellence",
	description: "State-of-the-art facilities dedicated to producing high-performance UAVs and precision components.",
	items: [
		{
			image: "/images/pd1.png",
			title: "FPV Racing Drones",
			description: "High-speed racing drones with carbon fiber frames and advanced flight controllers"
		},
		{
			image: "/images/pd2.png",
			title: "Mid-Size UAVs",
			description: "Versatile drones for professional aerial photography and industrial applications"
		},
		{
			image: "/images/sc2.png",
			title: "Heavy-Lift Systems",
			description: "Industrial-grade drones with 6-7kg payload capacity for demanding operations"
		},
		{
			image: "/images/sc3.png",
			title: "Flagship Hexacopters",
			description: "Ultra-heavy-lift 6-motor systems with 18kg capacity and 50-minute endurance"
		},
		{
			image: "/images/uav_intro_p1_0.jpg",
			title: "Flight Testing",
			description: "Comprehensive testing facilities ensuring reliability and performance standards"
		},
		{
			image: "/images/uav_intro_p6_6.jpg",
			title: "Quality Assurance",
			description: "Rigorous inspection and certification process for every drone before delivery"
		}
	]
};

export const faq = {
	title: "Frequently Asked Questions",
	focus: "Questions",
	description: "Common queries about our UAV products and services.",
	cta_prefix: "Need more details?",
	cta_text: "Contact Support",
	cta_link: "/contact",
	items: [
		{
			question: "Do you offer international shipping?",
			answer: "Yes, we ship our UAVs and components globally, handling necessary export documentation."
		},
		{
			question: "Can you customize the drone for specific payloads?",
			answer: "Absolutely. We specialize in integrating various sensors, cameras, and delivery mechanisms."
		},
		{
			question: "What is the warranty period?",
			answer: "We offer a standard 1-year warranty on airframes and motors, with extended support options available."
		},
		{
			question: "Do you provide pilot training?",
			answer: "Yes, we offer both remote and on-site training programs for flight operations and maintenance."
		},
		{
			question: "Are your fiber optic reels reusable?",
			answer: "Our fiber optic spools are designed for reliable deployment. We offer both single-use and reusable options depending on the application."
		}
	]
};

export const testimonials = {
	title: "Client Success Stories",
	focus: "Success Stories",
	description: "See how our UAV solutions are empowering industries around the world.",
	items: [
		{
			name: "David Zhang",
			image: "https://randomuser.me/api/portraits/men/32.jpg",
			position: "Operations Director, SecurePatrol",
			comment: "The flight endurance of Wurenji's FPV racing drones has revolutionized our surveillance operations. The 50-minute flight time and 15km range are game-changers."
		},
		{
			name: "Sarah Miller",
			image: "https://randomuser.me/api/portraits/women/44.jpg",
			position: "Lead Engineer, AeroTech Solutions",
			comment: "We've tested many heavy-lift drones, but Wurenji's 15'' hexacopter with 18kg payload capacity is unmatched. The redundancy and reliability are exceptional for our industrial applications."
		},
		{
			name: "James Wilson",
			image: "https://randomuser.me/api/portraits/men/52.jpg",
			position: "Project Manager, GridInspect",
			comment: "The Mark 10'' drone's 160km/h speed and stable video transmission make power line inspections incredibly efficient. Their OEM customization service perfectly matched our needs."
		},
		{
			name: "Robert Chen",
			image: "https://randomuser.me/api/portraits/men/67.jpg",
			position: "CEO, AgriScan",
			comment: "Wurenji's heavy-lift drones carry our agricultural sensors with ease. The 42-minute endurance allows us to cover large farmlands in a single flight. Excellent technical support."
		},
		{
			name: "Emily Davis",
			image: "https://randomuser.me/api/portraits/women/68.jpg",
			position: "Logistics Manager, RapidDelivery",
			comment: "Their 13'' heavy-lift drone with 6kg payload is perfect for our medical supply deliveries. Robust, dependable, and the dual battery system provides the reliability we need."
		}
	]
};

export const cta = {
	title: "Ready to Elevate Your Operations?",
	focus: "Elevate",
	description: "Contact us today to discuss your UAV requirements and get a competitive quote.",
	cards: [
		{
			title: "Sales Inquiry",
			href: "/contact",
			icon: "File",
			description: "Request a quote or product information."
		},
		{
			title: "Technical Support",
			href: "/contact",
			icon: "Book",
			description: "Get help with your existing products."
		}
	]
};

export const footer = {
	brand: "© 2025 DaQi UAV | All rights reserved.",
	policies: [
		{
			title: "Terms of Service",
			href: "/terms-of-service"
		},
		{
			title: "Privacy Policy",
			href: "/privacy-policy"
		}
	]
};
