import * as React from "react";

import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";
import Text from "./Text";

const tagVariants = cva("relative rounded-sm  w-fit px-2", {
	variants: {
		variant: {
			default: "bg-colors-gray-5 text-whitesmoke",
			primary: "bg-colors-red-5 text-whitesmoke",
		},
		size: {
			default: "text-sm",
			xs: "text-xs",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface TagProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tagVariants> {
	label: string;
}

export default function Tag({ className, variant, label, ...props }: TagProps) {
	return (
		<div className={cn(tagVariants({ variant }), className)} {...props}>
			<span> {label}</span>
		</div>
	);
}
