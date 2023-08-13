import { ChatBubbleBottomCenterIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

const InfoDetails = () => {
  return (
		<div className="flex-col flex gap-y-8 justify-start items-start md:w-96  w-full h-full max-h-max">
			<h3 className="font-sans  font-bold text-base capitalize text-black flex w-full  items-center gap-x-5">
				<span>
					{" "}
					<ChatBubbleBottomCenterIcon className="text-indigo-600 w-5 h-5" />
				</span>
				talk to me
			</h3>
			<div className="flex flex-col gap-1">
				<h3 className="font-normal text-sm capitalize text-gray-400">
					email
				</h3>
				<Link
					href="mailto:ezealagodswill@gmail.com"
					className="transition-all duration-400 delay-150 underline hover:no-underline hover:text-indigo-500 underline-offset-2 decoration-indigo-400">
					ezealagodswill@gmail.com
				</Link>
			</div>
			<div className="flex flex-col gap-1">
				<h3 className="font-normal text-sm capitalize text-gray-400">
					whatsApp
				</h3>
				<p>(+234)7041647572</p>
			</div>
			<div className="flex flex-col gap-1 ">
				<h3 className="font-normal text-sm capitalize text-gray-400">
					twitter
				</h3>
				<Link
					href="https://twitter.com/ezealagodswill"
					className="transition-all duration-400 delay-150 underline hover:no-underline hover:text-indigo-500 underline-offset-2 decoration-indigo-400"
					target="_blank">
					Ezeala Godswill
				</Link>
			</div>
			<div className="-mt-3">
				<p className="font-sans text-sm capitalize text-black flex w-full justify-center items-center gap-x-5">
					Write me{" "}
					<span>
						<ArrowRightIcon className="text-indigo-600 w-5 h-5" />
					</span>{" "}
				</p>
			</div>
		</div>
  );
}

export default InfoDetails