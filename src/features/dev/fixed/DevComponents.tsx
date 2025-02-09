"use client";
import PopoverUI from "@/components/composite/PopoverUI";
import { Button } from "@/components/ui/Button";
import Grid from "@/components/ui/Grid";

export default function DevComponents() {
	const title = "Xem thêm";
	return (
		<div className="fixed bottom-4 right-4">
			<PopoverUI>
				<Grid cols={6} gap={4}>
					<Button className="mx-auto block" variant="default">
						{title}
					</Button>

					<Button className="mx-auto block" variant="outline">
						{title}
					</Button>
					<Button className="mx-auto block" variant="primaryOuline">
						{title}
					</Button>
					<Button className="mx-auto block" variant="primary">
						{title}
					</Button>

					<Button className="mx-auto block" variant="link">
						{title}
					</Button>
				</Grid>
			</PopoverUI>
		</div>
	);
}
