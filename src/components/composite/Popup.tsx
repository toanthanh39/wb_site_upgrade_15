import { cn } from "@/utils/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/Dialog";

type Props = {
	open: boolean;
	onOpenChange?: (open: boolean) => void;
	animate?: "fade" | undefined;
	title?: string | React.ReactNode;
	children?: React.ReactNode;
};
export default function Popup({
	open,
	onOpenChange,
	animate,
	title,
	children,
}: Props) {
	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent
					aria-describedby="hidden-dialog-description"
					onInteractOutside={(e: any) => {
						e.preventDefault();
						// if (document.querySelector(".popover-class-open")) {
						// 	e.preventDefault();
						// 	return;
						// }
						// if (closeOnMark) {
						// 	return;
						// }
					}}
					className={cn(
						" w-fit min-w-[330px] sm:max-w-[425px] lg-max-w-[1200px] max-h-screen rounded-[8px]  border-none",

						{
							"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]":
								false,

							"data-[state=open]:animate-modal-down data-[state=closed]:animate-modal-up":
								true,
						}
					)}>
					<DialogHeader>
						<DialogTitle className={cn(" text-center")}>
							{title && title}
						</DialogTitle>
					</DialogHeader>
					{children && children}
				</DialogContent>
				{/* <DialogDescription></DialogDescription> */}
			</Dialog>
		</>
	);
}
