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
import { CircleUserRound, Lightbulb, PiggyBank } from "lucide-react";

export const Navigation = () => {
  const { user } = useUser();
  return (
    // <div className="bg-card/80 py-3 px-8 w-3/4 m-auto rounded-4xl absolute left-2/4 -translate-x-2/4 top-10 z-20">
    //   <div className="flex gap-5">
    //     <Link href={"/"}>
    //       <Image
    //         src={"/logo.svg"}
    //         width={40}
    //         height={40}
    //         alt="fincelerate-logo"
    //       />
    //     </Link>
    //     <NavigationMenu viewport={false} className="flex-1 w-full max-w-full">
    //       <div className="flex justify-between items-center flex-1">
    //         <NavigationMenuList>
    //           <NavigationMenuItem>
    //             <NavigationMenuLink
    //               asChild
    //               className={navigationMenuTriggerStyle()}
    //             >
    //               <Link href="#">
    //                 <span className="flex gap-2 items-center">
    //                   <PiggyBank className="text-white" />
    //                   Explore & Invest
    //                 </span>
    //               </Link>
    //             </NavigationMenuLink>
    //           </NavigationMenuItem>
    //           <NavigationMenuItem>
    //             <NavigationMenuLink
    //               asChild
    //               className={navigationMenuTriggerStyle()}
    //             >
    //               <Link href="#">
    //                 <span className="flex gap-2 items-center">
    //                   <Lightbulb className="text-white" />
    //                   Educate Yourself
    //                 </span>
    //               </Link>
    //             </NavigationMenuLink>
    //           </NavigationMenuItem>
    //         </NavigationMenuList>
    //         <NavigationMenuLink
    //           asChild
    //           className={navigationMenuTriggerStyle()}
    //         >
    //           {user ? (
    //             <div className="flex flex-nowrap gap-2 items-center underline">
    //               <CircleUserRound color="white" size={24} />
    //               {user?.name}
    //             </div>
    //           ) : (
    //             <Link href={"/auth/login"}>
    //               <span className="flex gap-2 items-center underline">
    //                 <CircleUserRound color="white" />
    //                 Sign In
    //               </span>
    //             </Link>
    //           )}
    //         </NavigationMenuLink>
    //       </div>
    //     </NavigationMenu>
    //   </div>
    // </div>

    <nav className="bg-card/80 py-3 px-8 md:w-3/4 w-full m-auto rounded-4xl absolute left-2/4 -translate-x-2/4 top-10 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={40}
            height={40}
            alt="fincelerate-logo"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
