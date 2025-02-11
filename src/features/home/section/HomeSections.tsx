import { SettingConst } from "@/common/constants/setting";
import Flex from "@/components/ui/Flex";
import { ProductCollection } from "@/features/product/list";
import ProductListSkeleton from "@/features/product/list/ProductListSkeleton";
import { getMultiSettingServer } from "@/services/api/setting/server";
import { SectionJson } from "@/types/Home.type";
import { detectTimeServer } from "@/utils/detectServer";
import detectSetting from "@/utils/detectSetting";
import Helper from "@/utils/helper";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { BrandHome } from "../brand";
import BrandHomeSkeleton from "../brand/BrandHomeSkeleton";

const keySettings = [
	SettingConst.home.setting_id_store_web_shop,
	SettingConst.home.settings_website_namperfume_net,
];
async function getDataServer() {
	const keys = keySettings.join(",");
	try {
		const data = await getMultiSettingServer<unknown>(keys, undefined, true);

		return data.items;
	} catch (error) {
		notFound();
	}
}

const shouldDisplay = (item: SectionJson, timeServer: number) => {
	return Helper.checkTimeServer(timeServer, item.from_time, item.to_time);
};

const renderSection = (
	item: SectionJson,
	index: number,
	timeServer: number
) => {
	const commonProps = {
		key: index,
		id: `shop_${item.type}_${item.id || ""}`,
	};
	switch (item.type) {
		case "section_banner":
			return <React.Fragment key={commonProps.key}></React.Fragment>;

		case "collection":
			if (!item.dataSource) return null;
			return (
				<Suspense
					fallback={<ProductListSkeleton></ProductListSkeleton>}
					key={commonProps.key}>
					<ProductCollection
						link={item.link}
						title={item.title}
						more={{ link: item.link_more, title: item.title_more }}
					/>
				</Suspense>
			);

		case "nmagazine":
			return <React.Fragment key={commonProps.key}></React.Fragment>;

		case "namperfumetv":
			return <React.Fragment key={commonProps.key}></React.Fragment>;

		default:
			return null;
	}
};

export default async function HomeSections() {
	const data = await getDataServer();
	const timeServer = await detectTimeServer();

	const dataSections = detectSetting<SectionJson[]>(
		SettingConst.home.settings_website_namperfume_net,
		data
	)?.value;

	return (
		<Flex className="container" direction="col" justify="start" gap={32}>
			<Suspense fallback={<BrandHomeSkeleton />}>
				<BrandHome />
			</Suspense>
			{dataSections &&
				dataSections.map((item, index) =>
					renderSection(item, index, timeServer)
				)}
		</Flex>
	);
}
