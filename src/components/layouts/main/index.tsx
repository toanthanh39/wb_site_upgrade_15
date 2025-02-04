import { ComProps } from "@/types/Component";
import { cn } from "@/utils/utils";

export default function Main({ children, className }: ComProps) {
	return (
		<main className={cn("container", className)}>{children && children}</main>
	);
}
