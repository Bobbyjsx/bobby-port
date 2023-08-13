import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Quote from "./Quote";
import { socials } from "./page";
import { Tooltip } from "../common/tooltip";

interface SideBarProps {
	isOpen: boolean;
	onClose: (value: boolean) => void;
	navigation: {
		name: string;
		href: string;
	}[];
}

export default function SideBar({
	isOpen,
	onClose,
	navigation,
}: SideBarProps) {
	return (
		<Transition.Root
			show={isOpen}
			as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				onClose={onClose}>
				<div className="fixed inset-0" />

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full">
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
													<div className="flex gap-5 shadow-inner rounded-l-full rounded-r-full p-4">
														{socials.map(
															(
																social,
																index
															) => {
																return (
																	<Tooltip
																		key={
																			index
																		}
																		content={
																			social.content
																		}
																		className="rounded-md">
																		<Link
																			href={
																				social.href
																			}
																			target="_blank">
																			<social.icon />
																		</Link>
																	</Tooltip>
																);
															}
														)}
													</div>
													{/* Todo */}
												</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
														onClick={() =>
															onClose(
																false
															)
														}>
														<span className="sr-only">
															Close
															panel
														</span>
														<XMarkIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											<div className="mt-6 flow-root">
												<div className="-my-6 divide-y divide-gray-500/10 ">
													<div className="space-y-2 py-6">
														{navigation.map(
															(
																item
															) => (
																<Link
																	prefetch={
																		true
																	}
																	key={
																		item.name
																	}
																	href={
																		item.href
																	}
																	className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 active:bg-gray-300"
																	onClick={() => {
																		onClose(
																			false
																		);
																	}}>
																	{
																		item.name
																	}
																</Link>
															)
														)}
													</div>
													<div className="py-6 shadow-inner flex absolute bottom-0">
														<Quote />
													</div>
												</div>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
