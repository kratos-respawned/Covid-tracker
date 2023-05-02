"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navmenu = () => {
  return (
    <NavigationMenu className="justify-start my-5 ">
      <NavigationMenuList className="   rounded-md bg-muted p-1 space-x-2 border child:px-1.5 child:py-1  ">
        <NavigationMenuItem className="bg-muted-foreground/30 rounded-md">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Overview</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Analytics</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Reports</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>Notifications</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navmenu;
