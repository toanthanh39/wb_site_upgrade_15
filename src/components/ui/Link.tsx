import React from "react";
import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

export interface LinkElementProps
	extends LinkProps,
		React.RefAttributes<HTMLAnchorElement>,
		VariantProps<typeof linkVariants> {
	children?: React.ReactNode | undefined;
	className?: string;
}

const linkVariants = cva("inline-block hover:text-colors-red-5", {
	variants: {
		variant: {
			default: "text-colors-gray-5",
			primary: "text-colors-red-5",
			secondary: "text-colors-gray-4",
			link: "text-colors-blue-5 underline-offset-4 hover:underline",
			primaryReverse: "text-whitesmoke",
			active: "text-colors-red-5 font-bold",
		},
		size: {
			default: "text-base",
			sm: "text-sm",
			xxs: "text-[10px]",
		},

		weight: {
			default: "",
			bold: "font-bold",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		weight: "default",
	},
});

export default function LinkElement({
	href,
	children,
	variant,
	size,
	weight,
	className,
}: LinkElementProps) {
	return (
		<Link
			className={cn(linkVariants({ variant, size, weight, className }))}
			href={href}>
			{children}
		</Link>
	);
}
