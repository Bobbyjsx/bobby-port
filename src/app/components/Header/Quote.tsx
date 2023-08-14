// import { useState, useEffect } from "react";
// import { get } from "@/app/lib/api";
// import { useQuery } from "@tanstack/react-query";
// import { LoadingSpinner } from "../common/LoadingSpinner";
// // import { useLocalStorage } from "@/app/hooks/UseLocalStorage";

// interface Quote {
// 	text: string;
// 	author: string;
// }

// function getRandomNumberInRange(min: number, max: number) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const Quote = () => {

// 	// const [randomNumber, setRandomNumber] = useLocalStorage<number>("randomNumber", 0)
	
// 	const { data, isLoading, error, isSuccess } = useQuery<Quote[]>({
// 		queryKey: ["quotes"],
// 		queryFn: async () => {
// 			const data = await get<Quote[]>(
// 				"https://type.fit/api/quotes"
// 			);
// 			return data;
// 		},
// 	});

// 	const length = data?.length || 20;
	


// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			const newRandomNumber = getRandomNumberInRange(0, length);
// 			// setRandomNumber(newRandomNumber);
// 		}, 5000);

// 		// Stop generating numbers after a certain duration (e.g., 1 minute)
// 		setTimeout(() => {
// 			clearInterval(interval);
// 		}, 60000);

// 		// Cleanup interval on component unmount
// 		return () => clearInterval(interval);
// 	}, [length, ]);

// 	if (isLoading) {
// 		return <LoadingSpinner />;
// 	}

// 	if (error || !data || data.length === 0) {
// 		return null; // Handle error or no data case
// 	}

// 	const quote = data[0];

// 	return (
// 		<div>
// 			<div className="px-3 mx-3">
// 				<blockquote className="text-lg italic transition-opacity duration-500">
// 					<i>&quot;{quote?.text}&quot;</i>
// 				</blockquote>
// 				<h2 className="flex justify-end items-end transition-opacity duration-500">
// 					~ {quote?.author}
// 				</h2>
// 				<p className="text-xs  text-gray-400">Source: Type.fit.API</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Quote;
