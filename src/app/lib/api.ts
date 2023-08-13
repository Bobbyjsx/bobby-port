import axios, { AxiosResponse } from "axios";

// let API_BASE_URL = process.env.FAVQS_BASE_URL;
// const API_KEY = process.env.FAVQS_API_KEY;

// export const fetchWithToken = async <T>(
// 	path?: string,
// 	token?: string
// ) => {
// 	const url = path ?? API_BASE_URL;
// 	const key = token ?? API_KEY;

// 	const config = {
// 		headers: {
// 			Authorization: `Token token=${key}`,
// 			"Content-Type": "application/json",
// 		},
// 	};

// 	try {
// 		const response = await fetch(
// 			"https://favqs.com/api/quotes",
// 			config
// 		);
// 		console.log("response: ", response);
// 		return response;
// 	} catch (error) {
// 		console.error("Error occurred while fetching data:", error);
// 		throw error;
// 	}
// };

export const getleg = async <T>(path: string) => {
	try {
		const response = await fetch("https://type.fit/api/quotes", {
			next: { revalidate: 0, },
			cache: 'no-cache'
		});
		return response;
	} catch (error) {
		console.error("Error occurred while fetching data:", error);
		throw error;
	}
};

export const get = async <T>(path: string) => {
	try {
		const res = await axios.get(path)
		return res.data
	} catch (err) {
		console.error("Error occurred while fetching data:", err)
		throw err
	}
}