"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
	navigation: {
		name: string;
		href: string;
	}[];
}

const Nav = ({ navigation }: NavProps) => {
	const pathName = usePathname();
	const isActive = (path: string) => {
		return pathName?.split("/").pop() === path;
	};

	return (
		<div className="flex gap-x-12">
			{navigation.map((item) => (
				<Link
					key={item.name}
					href={item.href}
					className={`text-sm font-semibold leading-6 transition-all delay-75 duration-300 ${
							isActive(item.name)
							? "text-indigo-500 text-bold scale-125"
							: "text-gray-900"
					}`}>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default Nav;
