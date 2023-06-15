import NavList from "@/components/elements/nav-list";
import { NAV_LIST_DATA } from "@/configs/navListData";
import NavItem from "./NavItem";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <NavList customStyle={{ position: "relative" }}>
      {NAV_LIST_DATA.map((item, index) => (
        <NavItem key={item.label} data={item} />
      ))}
    </NavList>
  );
};

export default NavMenu;
