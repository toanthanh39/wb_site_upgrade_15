"use client";

import { ComProps } from "@/types/Component";
import { Button } from "../ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";

type Props = ComProps & {
	triggerLabel?: React.ReactNode;
};
export default function PopoverUI(props: Props) {
	const { triggerLabel, children } = props;
	return (
		<Popover>
			<PopoverTrigger asChild>
				{triggerLabel ?? <Button variant="default">Open</Button>}
			</PopoverTrigger>
			<PopoverContent className="w-fit">{children}</PopoverContent>
		</Popover>
	);
}
