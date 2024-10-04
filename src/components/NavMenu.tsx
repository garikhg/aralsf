import {getNavMenu} from "@/lib/wordpress";
import NavigationBarMenu from "@/components/NavigationBarMenu";

export default async function NavMenu({location}: { location: string }) {
    const navMenu = await getNavMenu( location || 'primary' );
    return <NavigationBarMenu menuItems={navMenu?.items || []}/>;
};
