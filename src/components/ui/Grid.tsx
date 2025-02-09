import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

const variants = cva("grid", {
	variants: {
		cols: {
			2: "grid-cols-2",
			3: "grid-cols-3",
			4: "grid-cols-4",
			5: "grid-cols-5",
			6: "grid-cols-6",
			12: "grid-cols-12",
		},

		gap: {
			2: "gap-0.5",
			4: "gap-1",
			8: "gap-2",
			12: "gap-3",
			16: "gap-4",
			24: "gap-6",
			32: "gap-8",
		},
	},
	defaultVariants: {
		cols: 2,
		justify: "start",
		align: "start",
	},
});
interface GridProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		VariantProps<typeof variants> {
	children?: React.ReactNode;
}

export default function Grid({
	children,
	className,
	cols,
	gap,
	...props
}: GridProps) {
	return (
		<div className={cn(variants({ cols, gap, className }))} {...props}>
			{children}
		</div>
	);
}
