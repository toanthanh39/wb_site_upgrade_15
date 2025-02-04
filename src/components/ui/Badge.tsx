import * as React from "react";

import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const badgeVariants = cva("relative cursor-pointer", {
	variants: {
		variant: {
			default: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {
	count?: number;
}

export default function Badge({
	className,
	variant,
	children,
	count = 0,
	...props
}: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props}>
			<span className="absolute top-0 right-0 w-4 h-4 translate-x-1/4 -translate-y-1/4 text-xs flex items-center justify-center rounded-full bg-colors-red-5 text-white text-center">
				{count}
			</span>
			{children && children}
		</div>
	);
}
