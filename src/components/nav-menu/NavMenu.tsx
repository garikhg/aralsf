import {getNavMenu} from "@/lib/wordpress";
import NavigationBar from "@/components/nav-menu/NavigationBar";

export default async function NavMenu({location}: { location: string }) {
    const navMenu = await getNavMenu( location || 'primary' );
    return <NavigationBar menuItems={navMenu?.items || []}/>;
};
