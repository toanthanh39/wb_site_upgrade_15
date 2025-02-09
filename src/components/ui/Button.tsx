import * as React from "react";
import { cva } from "class-variance-authority";

import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
	{
		// ring-colors-red-5 ring-1
		variants: {
			variant: {
				default:
					"border border-input bg-whitesmoke hover:bg-colors-gray-5 hover:text-whitesmoke",
				primary:
					"bg-colors-red-5 text-whitesmoke hover:bg-white hover:text-colors-red-5 border border-colors-red-5",
				primaryOuline:
					"border border-colors-red-5 bg-white text-colors-red-5 hover:bg-colors-red-5 hover:text-whitesmoke",
				outline:
					"border border-colors-gray-5 bg-white text-g hover:bg-colors-gray-5 hover:text-whitesmoke",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "bg-white text-colors-blue-5 border border-colors-blue-5 underline-offset-4 hover:underline hover:bg-colors-blue-5 hover:text-whitesmoke",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
