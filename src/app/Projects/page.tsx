"use client";
import { Project } from "./project-modal/[page]";
import { useState } from "react";
import { Modal } from "@/app/components/common/Modal";
import Image from "next/image";

export type PROJECT = {
	name: string;
	description: string;
	image: string;
	githubLink: string;
	liveURL: string;
	stack?: string[];
	sub?: string;
};
const projects: PROJECT[] = [
	{
		name: "IP Tracker",
		description:
			"IP Tracker is a web application that allows users to track the geolocation of an IP address. It utilizes the geo.ipify API to fetch location data and displays it on a map.",
		image: "/projects/ip-tracker.png",
		githubLink: "https://github.com/yourusername/ip-tracker",
		stack: ["Next.js", "Tailwind CSS", "REST API", "Axios"],
		liveURL: "https://ip-tracker-ten-neon.vercel.app/",
		sub: "Geolocate IP addresses and track their locations.",
	},
	{
		name: "Survey Form Builder",
		description:
			"Survey Form Builder is a tool that allows users to create custom survey forms by dragging and dropping form elements. Users can then preview and share the survey forms with others.",
		image: "/projects/surveyform.png",
		githubLink:
			"https://github.com/yourusername/survey-form-builder",
		stack: [
			"Next.js",
			"Tailwind CSS",
			"React",
			"React-hook-form",
		],
		liveURL: "https://gformreact.vercel.app/compiler",
		sub: "Create and share custom survey forms effortlessly.",
	},
	{
		name: "NextNews",
		description:
			"NextNews is a news aggregator website that displays the latest news headlines from various sources. Users can filter news by category and read the full articles on external sites.",
		image: "/projects/next-news.png",
		githubLink: "https://github.com/yourusername/next-news",
		stack: [
			"Next.js",
			"Tailwind CSS",
			"News API",
			"REST API",
			"Axios",
		],
		liveURL: "https://next-news-eta-teal.vercel.app/",
		sub: "Stay updated with the latest news from around the world.",
	},
];

const Page = () => {
	const [open, setOpen] = useState(false);
	const [idx, setIdx] = useState<number | null>(null);

	return (
		<div className="flex w-full items-center justify-center h-full">
			<div className=" flex items-center justify-center">
				<div className="grid lg:grid-cols-3 w-10/12 gap-12 grid-cols-1 ">
					{projects.map((product, index) => (
						<div
							key={product.name}
							className="">
							<div className="relative">
								<div className="relative h-72 w-full overflow-hidden rounded-lg">
									{product.image && (
										<Image
											width={1000}
											height={1000}
											src={product.image}
											alt={product.name}
											className="h-full w-full object-cover object-center"
										/>
									)}
								</div>
								<div className="relative mt-4 px-2">
									<h3 className="text-sm font-medium text-gray-900">
										{product.sub}
									</h3>
								</div>
								<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
									<div
										aria-hidden="true"
										className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
									/>
									<p className="relative text-lg font-semibold text-white">
										{product.name}
									</p>
								</div>
							</div>
							<div className="mt-6 px-2">
								<button
									className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
									onClick={() => {
										setIdx(index);
										setOpen(true);
									}}>
									view
								</button>
								<Modal
									isOpen={open}
									setIsOpen={() => {
										setOpen(false);
									}}>
									{idx !== null && (
										<Project
											project={projects[idx]}
										/>
									)}
								</Modal>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Page;
