import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";
import Flex from "./Flex";

const inputVariants = cva(
	"h-full py-1 px-3 rounded-sm text-center relative max-w-[380px]",
	{
		variants: {
			variant: {
				default: "border-none",
				border: "border border-gray-300",
				line: "border border-gray-300 rounded-md",
			},
			size: {
				default: "text-sm",
				lg: "",
				sm: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	icon?: React.ReactNode;
}

export default function Input(props: InputProps) {
	const { variant, size, className, icon, ...prop } = props;
	return (
		<Flex className={cn(inputVariants({ variant, size, className }))}>
			{icon && icon}
			<input
				{...prop}
				className="flex-1 outline-none h-full w-full border-none py-1"
			/>
		</Flex>
	);
}
