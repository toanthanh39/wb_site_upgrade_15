import { cva } from "class-variance-authority";

const variants = cva("", {
	variants: {
		variant: {
			default: "text-color-gray-5",
			primary: "text-colors-red-5",
			secondary: "text-color-gray-4",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const sizes = cva("", {
	variants: {
		size: {
			default: "24px",
			lg: "16px",
			sm: "14px",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export { variants, sizes };
