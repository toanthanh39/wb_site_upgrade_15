"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RecoilRoot } from "recoil";

export default function RootProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 0,
				retry: 2,
			},
		},
	});
	return (
		<React.Fragment>
			<QueryClientProvider client={queryClient}>
				<RecoilRoot>{children}</RecoilRoot>
			</QueryClientProvider>
		</React.Fragment>
	);
}
