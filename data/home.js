export const navbar = {
	brand: {
		name: "Wurenji UAV | 无人机",
		logo: "/images/product_2025_p1_0.png"
	},
	menu: [
		{ label: "首页 Home", href: "/" },
		{ label: "产品分类 Categories", href: "/collection" },
		{ label: "所有产品 Products", href: "/product" },
		{ label: "关于我们 About Us", href: "/about" },
		{ label: "联系我们 Contact Us", href: "/contact" }
	],
	button: {
		text: "获取报价 Get Quote",
		title: "Request a Quote | 获取报价",
		description: "告诉我们您的项目需求，我们将为您提供定制化解决方案 / Tell us about your project requirements and we'll get back to you with a customized solution."
	}
};

export const hero = {
	title: "专业无人机制造商 Professional UAV Manufacturer",
	focus: "无人机 UAV",
	bg_image: "/images/uav_intro_p1_0.jpg",
	description: "专注于FPV竞速无人机和重载工业无人机的研发制造，提供从7英寸到15英寸六轴的全系列产品，支持OEM定制和全球发货 / Specialized in FPV racing and heavy-lift industrial drones, offering complete product lines from 7-inch to 15-inch hexacopter, with OEM customization and global shipping.",
	button: [
		{
			title: "查看产品 View Products",
			variant: "default",
			href: "/product"
		},
		{
			title: "联系我们 Contact Us",
			variant: "outline",
			href: "/contact"
		}
	],
	feature: [
		{
			title: "高速飞行 High Speed",
			description: "最高时速160km/h / Max 160km/h"
		},
		{
			title: "超长续航 Long Endurance",
			description: "最长50分钟续航 / Up to 50min"
		},
		{
			title: "重载能力 Heavy Payload",
			description: "最大载重18公斤 / Max 18kg"
		},
		{
			title: "OEM定制 Customizable",
			description: "支持批量定制 / Bulk customization"
		}
	]
};

export const featuredCategories = {
	title: "核心产品系列 Our Core Product Lines",
	focus: "核心产品 Core Products",
	cta_text: "查看所有产品 View All Products",
	cta_link: "/product",
	description: "从高速FPV竞速机到重载工业无人机，我们提供全系列专业无人机解决方案 / From high-speed FPV racing drones to heavy-lift industrial UAVs, we offer complete professional drone solutions.",
	items: [
		{
			title: "FPV竞速无人机 / FPV Racing Drones",
			focus: "FPV Racing",
			slug: "/fpv-racing-drones",
			image: "/images/pd1.png",
			description: "7-10英寸高速FPV无人机，最高时速160km/h，图传距离15公里 / 7-10 inch high-speed FPV drones, max speed 160km/h, 15km video transmission."
		},
		{
			title: "重载无人机 / Heavy-Lift Drones",
			focus: "Heavy-Lift",
			slug: "/heavy-lift-drones",
			image: "/images/sc2.png",
			description: "13-15英寸专业重载机，载重6-18公斤，适合工业应用 / 13-15 inch professional heavy-lift drones, 6-18kg payload, for industrial applications."
		},
		{
			title: "长航时巡飞 / Long-Endurance UAVs",
			focus: "Long-Endurance",
			slug: "/long-endurance-uavs",
			image: "/images/uav_intro_p1_0.jpg",
			description: "超长续航巡飞无人机，最长50分钟飞行时间 / Ultra-long endurance patrol UAVs, up to 50 minutes flight time."
		},
		{
			title: "定制方案 / Custom Solutions",
			focus: "Custom",
			slug: "/custom-solutions",
			image: "/images/product_2025_p13_37.png",
			description: "支持OEM定制和批量订购，提供全球代发货服务 / OEM customization and bulk orders available, global dropshipping service."
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
			image: "/images/motor_catalog_p12_86.png",
			title: "Motor Winding",
			description: "Precision automated winding for consistent motor performance"
		},
		{
			image: "/images/motor_catalog_p14_98.png",
			title: "Carbon Fiber Lab",
			description: "Advanced layup and curing processes for lightweight airframes"
		},
		{
			image: "/images/motor_catalog_p16_110.png",
			title: "Assembly Line",
			description: "Clean-room assembly for sensitive electronics and optics"
		},
		{
			image: "/images/product_2025_p10_27.png",
			title: "Testing Range",
			description: "Indoor and outdoor flight testing facilities"
		},
		{
			image: "/images/product_2025_p10_28.png",
			title: "Quality Control",
			description: "Rigorous inspection of every component before shipment"
		},
		{
			image: "/images/product_2025_p10_29.png",
			title: "R&D Center",
			description: "Continuous innovation in aerodynamics and propulsion"
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
			image: "https://placehold.co/100x100/png",
			position: "Operations Director, SecurePatrol",
			comment: "The flight endurance of the DaQi long-range UAVs has revolutionized our border surveillance operations. Reliable and easy to maintain."
		},
		{
			name: "Sarah Miller",
			image: "https://placehold.co/100x100/png",
			position: "Lead Engineer, AeroTech Solutions",
			comment: "We source all our brushless motors from DaQi. The efficiency and build quality are consistently superior to other suppliers we've tested."
		},
		{
			name: "James Wilson",
			image: "https://placehold.co/100x100/png",
			position: "Project Manager, GridInspect",
			comment: "The fiber optic tether system provided by DaQi allows us to conduct unlimited-duration inspections in high-interference environments where radio links fail."
		},
		{
			name: "Robert Chen",
			image: "https://placehold.co/100x100/png",
			position: "CEO, AgriScan",
			comment: "Customized multispectral payloads on their drones have improved our crop yield analysis significantly. Excellent technical support."
		},
		{
			name: "Emily Davis",
			image: "https://placehold.co/100x100/png",
			position: "Logistics Manager, RapidDelivery",
			comment: "Their heavy-lift drones are robust and dependable. We rely on them for critical medical supply deliveries in remote areas."
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
