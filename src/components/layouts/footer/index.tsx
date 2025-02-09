import { SettingConst } from "@/common/constants/setting";
import CustomImage from "@/components/ui/CustomImage";
import Flex from "@/components/ui/Flex";
import Heading from "@/components/ui/Heading";
import LinkElement from "@/components/ui/Link";
import Text from "@/components/ui/Text";
import { getMultiSettingServer } from "@/services/api/setting/server";
import BaseApi from "@/services/axios/BaseApi";
import { FooterBottom, FooterMenu } from "@/types/Footer.type";
import detectSetting from "@/utils/detectSetting";
import { replaceSingleKey } from "@/utils/markdown";

const keys = [
	SettingConst.footer.footer_bottom,
	SettingConst.footer.footer_menu,
	SettingConst.footer.footer_slogan_1,
	SettingConst.footer.footer_slogan_2,
];
async function getDataServer() {
	try {
		const res = await getMultiSettingServer<unknown>(keys.join(","));
		return res.items;
	} catch (error) {
		throw BaseApi.handleError(error);
	}
}

export default async function Footer() {
	const data = await getDataServer();
	const dataFooter = detectSetting<FooterMenu[]>(
		SettingConst.footer.footer_menu,
		data
	);
	console.log("🚀 ~ Footer ~ dataFooter:", dataFooter);

	const dataFooterBottom = detectSetting<FooterBottom>(
		SettingConst.footer.footer_bottom,
		data
	);

	const sologan1 = detectSetting<string>(
		SettingConst.footer.footer_slogan_1,
		data
	);

	const sologan2 = detectSetting<string>(
		SettingConst.footer.footer_slogan_2,
		data
	);

	// const proccessName = (name: string, index) => {
	// 	if(index !==3) return name
	// 	return name.split("\n").map((line, indexLink) => {
	// 		return (
	// 			<>
	// 				{line}
	// 				{indexLink < item.name.split("\n").length - 1 && (
	// 				)}
	// 			</>
	// 		);
	// 	})
	// }

	const proces = (text: string) => {
		const year = new Date().getFullYear();
		return replaceSingleKey(text, { current_year: year });
	};
	return (
		<footer className="bg-colors-gray-5 h-full w-screen py-10 mt-4">
			{dataFooter && (
				<section className="container text-whitesmoke ">
					<Flex gap={32}>
						{dataFooter.value.map((section, index) => {
							return (
								<div className="flex-auto" key={index}>
									<Heading
										variant="white"
										className="mb-4 whitespace-nowrap"
										level={3}
										size="h4">
										{section.title}
									</Heading>
									<ul className="flex flex-col gap-1">
										{section.menu.map((item, itemIndex) => {
											return (
												<li className="inline-flex gap-1" key={itemIndex}>
													{item?.icon && (
														<CustomImage
															src={item.icon}
															alt="icon"
															width={16}
															height={16}></CustomImage>
													)}
													{item.link !== "#" ? (
														<LinkElement
															size="sm"
															variant="primaryReverse"
															href={item.link}>
															{item.name}
														</LinkElement>
													) : (
														<Text.p variant="primaryReverse" size="sm">
															{item.name}
														</Text.p>
													)}
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
						<div className="flex-1 shrink-0 whitespace-nowrap">
							{sologan1 && (
								<Heading
									variant="white"
									className="mb-2 font-noto"
									level={3}
									size="h1">
									{sologan1.value}
								</Heading>
							)}

							{sologan2 && (
								<Heading
									variant="white"
									className="mb-2 font-noto"
									level={3}
									size="h1">
									{sologan2.value}
								</Heading>
							)}
						</div>
					</Flex>
				</section>
			)}

			{dataFooterBottom && (
				<section className="container pt-4 mt-4 border-t border-t-colors-gray-4">
					<Flex justify="between" align="center">
						<aside>
							{dataFooterBottom?.value?.texts?.map((text, index) => {
								return (
									<Text.p variant="secondary" key={index}>
										{proces(text)}
									</Text.p>
								);
							})}
						</aside>
						<CustomImage
							src={dataFooterBottom.value?.image ?? ""}
							height={40}
							width={106}
							alt={"Đã thông báo bộ công thương"}></CustomImage>
					</Flex>
				</section>
			)}
		</footer>
	);
}
