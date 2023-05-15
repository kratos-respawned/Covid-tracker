"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navmenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname();
  
  return (
    <nav
      className={cn(
        " md:space-x-4 mb-8 mt-12 inline-flex h-10 items-center justify-center rounded-md bg-muted p-0.5 text-xs md:p-1 text-muted-foreground ",
        className
      )}
      {...props}
    >
      <Navigator title="Overview" link="/" currentPath={pathName} />
      <Navigator title="News" link="/news" currentPath={pathName} />
      <Navigator title="Statistics" link="/statistics" currentPath={pathName} />
      <Navigator
        title="Analytics"
        link="/analytics"
        currentPath={pathName}
      />
    </nav>
  );
};
export default Navmenu;
const Navigator = ({
  title,
  link,
  currentPath,
}: {
  title: string;
  link: string;
  currentPath: string;
}) => {
  const isActive = currentPath === link;
  return (
    <Link
      href={link}
      className={`
inline-flex items-center justify-center whitespace-nowrap rounded-sm px-1.5 sm:px-3 py-1.5 text-sm font-medium ring-offset-background 
transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  
           ${
             isActive
               ? " bg-background text-foreground shadow-sm "
               : " text-muted-foreground "
           } transition-colors hover:text-primary
          `}
    >
      {title}
    </Link>
  );
};
