"use client";
import Helper from "@/utils/helper";
import { useEffect, useMemo, useRef, useState } from "react";

type IntersectionObserverInit = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
};

type Props = {
	processEntry?: (entry: IntersectionObserverEntry) => void;
	options?: IntersectionObserverInit;
};
export default function useIntersectionObserver({
	options = {},
	processEntry,
}: Props) {
	const ref = useRef<HTMLElement>(null);
	const callbackRef = useRef<(entry: any) => void>(() => {});
	const setCallback = (
		callback: (entry: IntersectionObserverEntry) => void
	) => {
		callbackRef.current = callback;
	};

	useEffect(() => {
		// if (!Helper.isServer()) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					processEntry?.(entry);
					// setCallback(entry);
					observer.disconnect(); // Dừng theo dõi sau khi phần tử đã giao nhau
				}
			},
			{ ...options }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return { ref, setCallback } as const;
}
