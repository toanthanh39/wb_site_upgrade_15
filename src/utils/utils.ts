import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { ComponentType, ReactElement } from "react";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const initArray = <T>(current: number, defaultData: T) => {
	return Array.from(new Array(current)).map((i) => defaultData);
};

// export const dynamicImport = <T extends {}>(
// 	componentPath: () => Promise<{ default: ComponentType<T> }>,
// 	skeletonComponent: ReactElement
// ) => {
// 	return dynamic(componentPath, {
// 		ssr: false,
// 		loading: () => skeletonComponent,
// 	});
// };
