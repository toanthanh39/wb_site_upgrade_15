import Anouncement from "./components/Anouncement";
import HeaderMid from "./components/HeaderMid";
import HeaderTop from "./components/HeaderTop";
import Menu from "./components/Menu";

export default function Header() {
	return (
		<header className=" w-screen">
			<Anouncement />
			<HeaderTop />
			<HeaderMid />
			<Menu />
		</header>
	);
}
