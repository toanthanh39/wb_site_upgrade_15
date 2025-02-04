import Helper from "@/utils/helper";
import { cn } from "@/utils/utils";
import React from "react";
import Text from "./Text";

type Props = {
	value: number;
	className?: string;
	minus?: string;
};

export default function Money({ value, className, minus }: Props) {
	return (
		<Text.span variant={"primary"} className={cn("font-bold	", className)}>
			{minus && minus}
			{Helper.moneyFormat(value)}đ
		</Text.span>
	);
}
