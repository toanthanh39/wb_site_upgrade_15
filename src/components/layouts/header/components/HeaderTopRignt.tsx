"use client";

import Popup from "@/components/composite/Popup";
import Flex from "@/components/ui/Flex";
import Text from "@/components/ui/Text";
import useToggle from "@/lib/hooks/useToggle";
import Notification from "./Notification";

type Props = {
	title: string;
};
export default function HeaderTopRignt({ title }: Props) {
	const { state, toggle } = useToggle(false);

	return (
		<div className="w-1/2">
			<Flex gap={2} justify="end">
				<Text.span className="cursor-pointer" onClick={toggle}>
					{title}
				</Text.span>
				<Notification />
			</Flex>
			<Popup
				open={state}
				onOpenChange={toggle}
				title={<Text.p size="lg">Heading</Text.p>}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod
					quas officiis, ullam similique iusto harum alias voluptatum facilis,
					nisi corrupti veritatis asperiores exercitationem earum dolore neque?
					Animi, obcaecati consequuntur.
				</p>
			</Popup>
		</div>
	);
}
