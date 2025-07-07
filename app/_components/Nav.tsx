"use client";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useUser } from "@auth0/nextjs-auth0";
import {
  AlignJustify,
  CircleUserRound,
  Lightbulb,
  PiggyBank,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const { user } = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-card/80 w-11/12 md:w-3/4 m-auto rounded-4xl absolute left-2/4 -translate-x-2/4 top-8 z-20">
      <div className="relative py-3 px-8 w-full">
        <div className="flex gap-5 ">
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
              <NavigationMenuList className="hidden md:flex">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/funds">
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
              <div className="flex gap-2 items-center">
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
                <div
                  className="md:hidden"
                  onClick={() => {
                    setOpenMenu((prev) => !prev);
                  }}
                >
                  <AlignJustify />
                </div>
              </div>
            </div>
          </NavigationMenu>
        </div>
        <NavigationMenu
          className={cn(
            "bg-card md:hidden top-full mt-2 rounded-2xl left-0 border absolute justify-between w-full max-w-full",
            !openMenu ? "hidden" : ""
          )}
          id="navbar-cta"
        >
          <div className="w-full">
            <NavigationMenuList className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <NavigationMenuItem className="block md:p-0 text-white rounded-sm md:bg-transparent">
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/funds">
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
