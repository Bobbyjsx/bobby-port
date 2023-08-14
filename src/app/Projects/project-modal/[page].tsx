"use client";
import Link from "next/link";
import { PROJECT} from "@/app/Projects/page";
import Image from "next/image";

type Props = {
	project: PROJECT;
};
export const Project = ({ project }: Props) => {
	const { name, description, image, githubLink, liveURL, stack } =
		project 
	return (
		<section className="mx-auto w-full flex justify-center items-center">
			<div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ">
				<div>
					<div className="mx-auto flex items-center justify-center relative h-72 w-full overflow-hidden rounded-lg bg-green-100">
						<Image
							width={1000}
							height={1000}
							src={image}
							alt={name}
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="mt-3 text-center sm:mt-5">
						<h3 className="text-base font-semibold leading-6 text-gray-900 capitalize">
							{name}
						</h3>
						<div className="mt-2">
							<p className="text-sm text-gray-500">
								{description}
							</p>
						</div>
					</div>
				</div>
				<div className="s">
					<h3 className="text-base font-semibold leading-6 text-gray-900">
						Stack
					</h3>
					<ul className="mt-2 text-sm text-gray-500 list-disc pl-5">
						{stack?.map((lang, index) => {
							return (
								<li
									key={index}
									className="capitalize">
									{lang}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
					{githubLink && (
						<Link
							className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
							href={githubLink}>
							GitHub
						</Link>
					)}
					{liveURL && (
						<Link
							className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
							href={liveURL}>
							Live Link
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};


