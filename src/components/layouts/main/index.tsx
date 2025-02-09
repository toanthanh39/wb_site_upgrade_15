import { ComProps } from "@/types/Component";
import { cn } from "@/utils/utils";

type MainProps = ComProps & {
	useContainer?: boolean;
};
export default function Main({
	children,
	className,
	useContainer = true,
}: MainProps) {
	return (
		<main
			className={cn("", className, {
				container: !!useContainer,
			})}>
			{children && children}
		</main>
	);
}
