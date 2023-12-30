import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
	title: "Bobby | Personal Portfolio",
	description:
		" Godswill Ezeala | Developer | Personal Portfolio.",

	keywords:
		"frontend developer, portfolio, web development, Next.js, React, HTML, CSS, JavaScript, user-friendly, web experiences",
	openGraph: {
		title: "Frontend Developer Portfolio | Godswill Ezeala",
		description:
			"Explore the creative work of Godswill Ezeala, a passionate frontend developer specializing in crafting modern and user-friendly web experiences. View a collection of projects that showcase expertise in HTML, CSS, JavaScript, Next.js, Python, Nodejs and React.",
		images: [
			{
				url: "https://res.cloudinary.com/dyq13myey/image/upload/f_auto,q_auto/axt1o8kimshw26aezd2b",
			},
		],
		url: "https://godswillezeala.vercel.app",
		siteName: "Bobby",
		type: "website",
	},
	twitter: {
		title: "Frontend Developer Portfolio | Godswill Ezeala",
		description:
			"Explore the creative work of Godswill Ezeala, a passionate frontend developer specializing in crafting modern and user-friendly web experiences. View a collection of projects that showcase expertise in HTML, CSS, JavaScript, Next.js, Python, Java, Nodejs and React.",
		images: "https://res.cloudinary.com/dyq13myey/image/upload/f_auto,q_auto/axt1o8kimshw26aezd2b",
	},
	generator: "next.js, tsx",
	authors: [
		{
			name: "Godswill Ezeala",
			url: "https://github.com/Bobbyjsx",
		},
	],
	publisher: "Vercel",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
					<Header />
					{children}
					<Footer />
			</body>
		</html>
	);
}
