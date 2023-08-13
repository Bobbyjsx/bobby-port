"use client"
import Link from "next/link";
import { Tooltip } from "../common/tooltip";
import { socials } from "../Header/page";

const Footer = () => {
	return (
		<footer className="relative bottom-0 w-full text-zinc-800 flex justify-center items-center flex-col border-t-2 pt-7 gap-3 text-center mt-16">
			<Link
				href="/"
				className="-pt-5 first-letter:text-indigo-600 first-letter:text-4xl text-2xl font-bold text-zinc-800">
				Bobby
			</Link>
			<p className="flex justify-center items-center">
				Frontend Developer
			</p>
			<div className="flex gap-5">
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
			<p className="text-gray-700 text-sm pb-1 md:mb-0 mb-5">
				{new Date().getFullYear()} Godswill.
			</p>
		</footer>
	);
};

export default Footer;
