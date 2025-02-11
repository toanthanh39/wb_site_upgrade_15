import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

const variants = cva("flex w-full", {
	variants: {
		direction: {
			row: "flex-row",
			col: "flex-col",
		},
		justify: {
			center: "justify-center",
			end: "justify-end",
			start: "justify-start",
			between: "justify-between",
		},
		align: {
			center: "items-center",
			start: "items-start",
			end: "items-end",
			between: "items-between",
		},
		gap: {
			0: "",
			2: "gap-0.5",
			4: "gap-1",
			8: "gap-2",
			12: "gap-3",
			16: "gap-4",
			24: "gap-6",
			32: "gap-8",
			48: "gap-12",
		},
	},
	defaultVariants: {
		direction: "row",
		justify: "start",
		align: "start",
		gap: 0,
	},
});
interface FlexProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		VariantProps<typeof variants> {
	children?: React.ReactNode;
}

export default function Flex({
	children,
	className,
	direction,
	justify,
	align,
	gap,
	...props
}: FlexProps) {
	return (
		<div
			className={cn(variants({ align, direction, justify, gap, className }))}
			{...props}>
			{children}
		</div>
	);
}
