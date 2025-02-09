import { cn } from "@/utils/utils";
import { cva, VariantProps } from "class-variance-authority";

const pVariants = cva("", {
	variants: {
		variant: {
			default: "text-colors-gray-5",
			secondary: "text-colors-gray-4",
			primary: "text-colors-red-5",
			link: "text-colors-blue-5 underline-offset-4 hover:underline",
			primaryReverse: "text-whitesmoke",
		},
		size: {
			default: "text-base",
			lg: "text-lg",
			sm: "text-sm",
			xxs: "text-[10px]",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

const smallVariants = cva("", {
	variants: {
		variant: {
			default: "text-colors-gray-5",
			primary: "text-colors-red-5",
			secondary: "text-colors-gray-4",
			link: "text-colors-blue-5 underline-offset-4 hover:underline",
			primaryReverse: "text-whitesmoke",
		},
		size: {
			default: "text-[10px]",
			sm: "text-[8px]",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

const spanVariants = cva("inline-block", {
	variants: {
		variant: {
			default: "text-colors-gray-5",
			primary: "text-colors-red-5",
			secondary: "text-colors-gray-4",
			link: "text-colors-blue-5 underline-offset-4 hover:underline",
			primaryReverse: "text-whitesmoke",
		},
		size: {
			default: "text-base",
			sm: "text-sm",
			xxs: "text-[10px]",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

interface PProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof pVariants> {}

interface SpanProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof spanVariants> {}

interface SmallProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof smallVariants> {}

export default function Text({
	variant,
	size,
	className,
	children,
	...props
}: PProps) {
	return (
		<p {...props} className={cn(pVariants({ variant, size, className }))}>
			{children}
		</p>
	);
}

Text.p = ({ variant, size, className, children, ...props }: PProps) => (
	<p {...props} className={cn(pVariants({ variant, size, className }))}>
		{children}
	</p>
);

Text.span = ({ variant, size, className, children, ...props }: SpanProps) => (
	<span {...props} className={cn(spanVariants({ variant, size, className }))}>
		{children}
	</span>
);

Text.small = ({ variant, size, className, children, ...props }: SmallProps) => (
	<small {...props} className={cn(smallVariants({ variant, size, className }))}>
		{children}
	</small>
);
