import { Tooltip } from "@/app/components/common/tooltip";
import Image from "next/image";

export interface ServiceProps {
	title: string;
	services: {
		name: string;
		description: string;
	}[];
}

export default function Services({ title, services }: ServiceProps) {
	return (
		<div className="flex flex-col gap-5 md:w-96 border-indigo-200 border-2 rounded-md shadow-inner p-6  w-full h-[500px]">
			<h1 className="text-2xl font-sans underline underline-offset-2 text-zinc-800 capitalize">
				{title}
			</h1>
			<div className="flex justify-center items-center">
				<ul className="flex flex-col gap-5">
					{services.map((service) => (
						<li
							key={service.name}
							className="list-disc  leading-relaxed ">
							{service.description}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
