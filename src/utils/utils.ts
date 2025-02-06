import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const initArray = <T>(current: number, defaultData: T) => {
	return Array.from(new Array(current)).map((i) => defaultData);
};

export const checkActiveDate = (
	timeserver: number,
	fromTime?: number,
	toTime?: number
): boolean => {
	const executionAt = timeserver
		? timeserver / 1000
		: Math.floor(Date.now() / 1000);
	if (fromTime && toTime) {
		if (
			(fromTime <= executionAt && toTime === 0) ||
			(fromTime <= executionAt && executionAt <= toTime)
		) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
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
