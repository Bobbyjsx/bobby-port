"use client";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

const progressOptions = {
	color: "#29D",
	startPosition: 0.3,
	stopDelayMs: 200,
	height: 3,
};

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NextNProgress {...progressOptions} />
			<QueryClientProvider client={queryClient}>
				<Toaster />
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}
