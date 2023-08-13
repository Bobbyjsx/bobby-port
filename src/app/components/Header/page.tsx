"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBar from "./SideBar";
import Nav from "./Nav";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { Tooltip } from "../common/tooltip";

const navigation = [
	{ name: "Skills", href: "/Skills" },
	// { name: "Services", href: "/Services" },
	{ name: "Projects", href: "/Projects" },
	{ name: "Contact", href: "/Contact" },
];

export const socials = [
	{
		href: "https://www.twitter.com/ezealagodswill",
		content: "Twitter",
		icon: FiTwitter,
	},
	{
		href: "https://www.github.com/bobbyjsx",
		content: "Github",
		icon: FiGithub,
	},
	{
		href: "https://www.linkedin.com/in/godswill-ezeala-30a785253/",
		content: "Linkedin",
		icon: FiLinkedin,
	},
];
export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white mb-14">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="-m-1.5 p-1.5 first-letter:text-indigo-600 first-letter:text-4xl text-2xl font-bold text-zinc-800">
						Bobby
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">
							Open main menu
						</span>
						<Bars3Icon
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<Nav navigation={navigation} />
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<div className="flex gap-5 shadow-inner rounded-l-full rounded-r-full p-4">
						{socials.map((social, index) => {
							return (
								<Tooltip
									key={index}
									content={social.content}
									className="rounded-md">
									<Link
										href={social.href}
										target="_blank">
										<social.icon />
									</Link>
								</Tooltip>
							);
						})}
					</div>
				</div>
			</nav>
			<SideBar
				isOpen={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				navigation={navigation}
			/>
		</header>
	);
}
