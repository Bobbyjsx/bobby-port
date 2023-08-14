import Services, {
	ServiceProps,
} from "@/app/components/modules/Services/Services";

const page = () => {
	const serviceTiles: ServiceProps[] = [
		{
			title: "Website Design and Development",
			services: [
				{
					name: "Custom website design and development",
					description:
						"Tailored to your needs with aesthetics and functionality.",
				},
				{
					name: "Responsive and mobile-friendly design",
					description:
						"Looks great and works seamlessly on all devices.",
				},
				{
					name: "User-friendly interfaces and intuitive navigation",
					description:
						"Easy-to-use interfaces and intuitive navigation.",
				},
				{
					name: "Integration of interactive elements",
					description:
						"Incorporates animations and interactive features.",
				},
			],
		},
		{
			title: "E-Commerce Solutions",
			services: [
				{
					name: "Secure and robust e-commerce platforms",
					description:
						"Builds online stores with strong security and scalability.",
				},
				{
					name: "Integration of popular payment gateways",
					description:
						"Enables seamless and secure online payments.",
				},
				{
					name: "Product catalog setup and inventory management",
					description:
						"Sets up comprehensive product catalogs and inventory systems.",
				},
				{
					name: "Shopping cart and checkout process optimization",
					description:
						"Streamlines the purchasing process for higher conversions.",
				},
			],
		},
		{
			title: "Web Application Development",
			services: [
				{
					name: "Dynamic and interactive web applications",
					description:
						"Builds feature-rich web applications with interactive elements.",
				},
				{
					name: "Customization and enhancement of existing web applications",
					description:
						"Modifies and improves existing web applications to meet requirements.",
				},
				{
					name: "Integration of APIs and third-party services",
					description:
						"Connects web applications with external APIs and services for extended functionality.",
				},
				{
					name: "Testing, debugging, and optimization",
					description:
						"Thoroughly tests, debugs, and optimizes web applications for better performance.",
				},
			],
		},
		{
			title: "Website Maintenance and Support",
			services: [
				{
					name: "Monitoring and optimization of website performance",
					description:
						"Monitors website performance and optimizes loading speed and responsiveness.",
				},
				{
					name: "Content updates and modifications",
					description:
						"Makes content updates, adds new pages, and modifies existing elements as needed.",
				},
				{
					name: "Technical support and troubleshooting",
					description:
						"Provides technical support and resolves issues or bugs that may arise.",
				},
			],
		},
		{
			title: "Search Engine Optimization (SEO)",
			services: [
				{
					name: "On-page optimization",
					description:
						"Optimizes website content, meta tags, and headers for improved search engine rankings.",
				},
				{
					name: "Keyword research and implementation",
					description:
						"Conducts keyword research and strategically implements relevant keywords on your website.",
				},
				{
					name: "Website speed optimization and mobile responsiveness",
					description:
						"Optimizes website performance, loading speed, and ensures mobile-friendly responsiveness.",
				},
				{
					name: "SEO audits and strategic recommendations",
					description:
						"Performs comprehensive SEO audits and provides strategic recommendations for better visibility.",
				},
			],
		},
		{
			title: "Website Analytics and Reporting",
			services: [
				{
					name: "Website analytics setup and configuration",
					description:
						"Sets up analytics tools to track and analyze website traffic, user behavior, and conversions.",
				},
				{
					name: "Comprehensive reporting and data analysis",
					description:
						"Generates detailed reports and performs data analysis to gain insights and make informed decisions.",
				},
				{
					name: "Conversion rate optimization",
					description:
						"Identifies and implements strategies to improve website conversions and maximize ROI.",
				},
				{
					name: "Performance monitoring and goal tracking",
					description:
						"Monitors website performance, tracks goals, and provides actionable insights for optimization.",
				},
			],
		},
		// Add more service objects with shortened descriptions
	];

	return (
		<main className="w-full h-full flex justify-center items-center md:p-8 my-5 p-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
				{serviceTiles.map((data) => {
					return (
						<div
							className=""
							key={data.title}>
							<Services
								title={data.title}
								services={data.services}
							/>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default page;
