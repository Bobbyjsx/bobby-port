"use client";
import SkillSet from "@/app/components/modules/Skills/SkillSet";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Skills = () => {
	const typedWords = [
		"Next.js",
		"React",
		"TypeScript",
		"JavaScript",
		"Python",
		"Tailwind",
	];
	const skills = {
		programming_languages: [
			{
				name: "JavaSctipt",
				href: "/Skills-assets/javaScript-logo.png",
			},
			{
				name: "Python",
				href: "/Skills-assets/python-logo.png",
			},
			{
				name: "TypeScript",
				href: "/Skills-assets/ts-logo.png",
			},
		],
		frontend: [
			{ name: "HTML", href: "/Skills-assets/html-logo.png" },
			{ name: "CSS", href: "/Skills-assets/css-logo.png" },
			{
				name: "Tailwind",
				href: "/Skills-assets/tailwind.png",
			},
			{
				name: "Reactjs",
				href: "/Skills-assets/react-logo.png",
			},
			{
				name: "NextJs",
				href: "/Skills-assets/nextjs-logo.png",
			},
			{
				name: "React Query",
				href: "/Skills-assets/react-query.png",
			},
			
		],
		backend: [
			{
				name: "nodeJs",
				href: "/Skills-assets/nodejs-logo.png",
			},
			{
				name: "Strapi",
				href: "/Skills-assets/strapi-logo.png",
			},
			{
				name: "Flask",
				href: "/Skills-assets/flask-logo.png",
			},
		],
		version_control: [
			{
				name: "GitHub",
				href: "/Skills-assets/github-logo.png",
			},
			{ name: "Git", href: "/Skills-assets/git-logo.png" },
		],
	};

	return (
		<main className="w-full md:h-screen- h-screen- flex justify-center items-center md:p-8 my-5 p-6">
			<div className="flex justify-center items-center md:flex-col flex-col gap-12 h-screen-">
				<div className="flex justify-start items-center md:flex-col flex-col">
					<h1 className="inline-block capitalize text-center text-2xl md:text-4xl font-bold text-zinc-800 font-serif w-full md:w-3/5">
						I build products with technologies like{" "}
						<span className="text-indigo-700">
							<Typewriter
								words={typedWords}
								loop={false}
								cursor
								cursorStyle="/"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
					<SkillSet
						skills={skills.programming_languages}
						name="Programming Languages"
					/>
					<SkillSet
						skills={skills.frontend}
						name="Frontend && Frameworks"
					/>
					{/* <SkillSet
						skills={skills.backend}
						name="Backend && CMS"
					/> */}
					<SkillSet
						skills={skills.version_control}
						name="version control"
					/>
				</div>
			</div>
		</main>
	);
};

export default Skills;
