import { SettingConst } from "@/common/constants/setting";
import NavLink from "@/components/composite/NavLink";
import CustomImage from "@/components/ui/CustomImage";
import Flex from "@/components/ui/Flex";
import Heading from "@/components/ui/Heading";
import LinkElement from "@/components/ui/Link";
import { getSettingServer } from "@/services/api/setting/server";
import { HomeMenu } from "@/types/Header.type";
import { detectTimeServer } from "@/utils/detectServer";
import { checkActiveDate, cn } from "@/utils/utils";

async function getDataServer() {
	const data = await getSettingServer<HomeMenu[]>(SettingConst.menu.menu_home);

	return data;
}
export default async function Menu() {
	const { value: menus } = await getDataServer();
	const timeServer = await detectTimeServer();
	return (
		<nav
			className="overflow-x-auto md:overflow-x-visible container hide-scroll-bar py-2 relative"
			aria-label="Main Navigation">
			<ul className="flex gap-4 md:gap-0 flex-nowrap whitespace-nowrap md:whitespace-normal relative">
				{menus.map((item, index) => {
					const show = checkActiveDate(
						timeServer,
						item.from_time,
						item.to_time
					);
					const isEventLink = item.is_event ?? false;
					const isSubmenu = !!item?.submenu;

					if (!show) return null;
					return (
						<li key={index} className="flex-auto inline-block group">
							<NavLink
								variant={isEventLink && "primary"}
								weight={isEventLink && "bold"}
								href={item.link}
								prefetch={true}>
								{item.name}
							</NavLink>
							{isSubmenu && <SubMenu submenu={item.submenu}></SubMenu>}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

const SubMenu = ({ submenu }: { submenu: HomeMenu["submenu"] }) => {
	return (
		<Flex
			justify="between"
			align={"start"}
			gap={2}
			className="absolute top-full hidden left-0 w-full h-max z-10  group-hover:flex bg-white shadow-lg p-9">
			<div className="basis-1/2 grid grid-cols-3 gap-2">
				{submenu?.category.map((sub, index) => {
					return (
						<div
							className={cn("col-span-1", {
								"col-span-2": index > 0,
							})}
							key={sub.id}>
							<Heading weight="bold" level={3} size="h5" className="mb-2">
								{sub.type}
							</Heading>
							<ul
								className={cn("", {
									"grid grid-cols-2 gap-2": index > 0,
								})}>
								{sub.details.map((subLink, index) => {
									return (
										<li key={index}>
											<LinkElement href={subLink.link}>
												{subLink.title}
											</LinkElement>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>

			<Flex
				className="basis-1/2"
				direction="row"
				gap={4}
				align="start"
				justify="start">
				{submenu?.images.map((img) => {
					<CustomImage
						src={img.url}
						alt={img.alt}
						width={162}
						height={162}
						loading="lazy"
						layout="responsive"
					/>;
				})}
			</Flex>
		</Flex>
	);
};
