import Helper from "@/utils/helper";
import { cn } from "@/utils/utils";
import React from "react";

type Props = {
	value: number;
	className?: string;
	minus?: string;
};

export default function Money({ value, className, minus }: Props) {
	return (
		<strong
			className={cn("font-inter	text-xs text-[#d72229] font-bold	", className)}>
			{minus && minus}
			{Helper.moneyFormat(value)}đ
		</strong>
	);
}
