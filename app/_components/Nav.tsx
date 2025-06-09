'use client'
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CircleUserRound, Lightbulb, PiggyBank } from "lucide-react";
import { auth0 } from "@/lib/auth";
import { useUser } from "@auth0/nextjs-auth0";

export const Navigation = () => {
  const { user } = useUser();
  return (
    <div className="bg-card/80 py-3 px-8 w-3/4 m-auto rounded-4xl absolute left-2/4 -translate-x-2/4 top-10 z-20">
      <div className="flex gap-5">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={40}
            height={40}
            alt="fincelerate-logo"
          />
        </Link>
        <NavigationMenu viewport={false} className="flex-1 w-full max-w-full">
          <div className="flex justify-between items-center flex-1">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#">
                    <span className="flex gap-2 items-center">
                      <PiggyBank className="text-white" />
                      Explore & Invest
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#">
                    <span className="flex gap-2 items-center">
                      <Lightbulb className="text-white" />
                      Educate Yourself
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              {user ? (
                <div className="flex flex-nowrap gap-2 items-center underline">
                  <CircleUserRound color="white" size={24} />
                  {user?.name}
                </div>
              ) : (
                <Link href={"/auth/login"}>
                  <span className="flex gap-2 items-center underline">
                    <CircleUserRound color="white" />
                    Sign In
                  </span>
                </Link>
              )}
            </NavigationMenuLink>
          </div>
        </NavigationMenu>
      </div>
    </div>
  );
};

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
