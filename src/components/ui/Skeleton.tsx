import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const skeletonVariants = cva("relative", {
	variants: {
		variant: {
			default:
				"animate-pulse border-[1px] border-gray-200 bg-gray-200 w-full h-2 rounded-sm",
		},
		size: {
			default: "h-5 ",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
	className?: string;
}

export default function Skeleton({
	className,
	variant,
	...props
}: SkeletonProps) {
	return (
		<div
			className={cn(skeletonVariants({ variant }), className)}
			{...props}></div>
	);
}
