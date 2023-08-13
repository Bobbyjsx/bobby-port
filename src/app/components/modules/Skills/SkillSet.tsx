import { Tooltip } from "@/app/components/common/tooltip";
import Tippy from "@tippyjs/react";
import Image from "next/image";

interface SkillSetProps {
	name: string;
	skills: {
		name: string;
		href: string;
	}[];
}

export default function SkillSet({ skills, name }: SkillSetProps) {
	return (
		<div className="flex flex-col gap-5 md:w-96 border-indigo-200 border-2 rounded-md shadow-inner p-6  w-full">
			<h1 className="text-2xl font-sans underline underline-offset-2 text-zinc-800 capitalize">
				{name}
			</h1>
			<div className="grid grid-cols-3 gap-5 h-[250px] justify-center items-center">
				{skills.map((language) => {
					return (
						<Tooltip
							key={language.name}
							content={language.name}
							className="rounded-md capitalize"
							intent={"neutral"}>
							<div className="flex flex-col justify-center items-center">
								<div className="w-20 h-20">
									<Image
										src={language.href}
										alt={language.name}
										width={1000}
										height={1000}
										className="rounded-md h-full w-full object-contain"
									/>
								</div>
								<h2 className="text-center text-sm md:text-md font-bold text-zinc-800 font-serif md:hidden flex">
									{language.name}
								</h2>
							</div>
						</Tooltip>
					);
				})}
			</div>
		</div>
	);
}
