import {getNavMenu} from "@/lib/wordpress";
import NavigationBarMenu from "@/components/NavigationBarMenu";

const NavMenu = async ({location}: { location: string }) => {
    const navMenu = await getNavMenu( location || 'primary' );
    return <NavigationBarMenu menuItems={navMenu?.items || []}/>;
};

export default NavMenu;
