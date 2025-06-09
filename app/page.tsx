import classes from "@/app/_styles/home-page.module.css";
import { Input } from "@/components/ui/input";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographySmall,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowRight,
  CalendarClock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import MarketInsightsSlider from "./_components/Carousal";
import { Marquee } from "./_components/Marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className={cn("pt-36 m-auto h-[95dvh]", classes["heroImage"])}>
        <main className="flex flex-col items-center px-4 pt-5 pb-64 w-3/4 mx-auto relative z-10 gap-44 h-full">
          <div className="inline-flex flex-col gap-5 w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              <span className="text-helper font-extrabold">Invest</span> with{" "}
              <span className="text-helper font-extrabold">Purpose</span>
            </h1>
            <button className="inline-flex max-w-max items-center gap-2 border border-helper text-helper hover:bg-helper/10 px-6 py-2 rounded-full transition-colors">
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search topics like 'How to start investing' or 'Mutual Funds'..."
              className="rounded-full h-12 focus-visible:ring-helper/50 focus-visible:ring-2"
            />
            <Search
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-background p-3 rounded-full border-3 border-foreground z-20 hover:bg-gray-900 transition-colors cursor-pointer">
            <ArrowDown className="text-helper" size={24} />
          </button>
        </main>
      </div>
      <div className="m-auto bg-foreground hero-image">
        <section className="py-20 px-4 max-w-4/6 m-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Fincelerate Way
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              From Discovery to Growth, We&apos;ve Got You Covered.
            </p>

            <div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-foreground border-3 border-primary rounded-full flex items-center justify-center text-background font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Discover
                  </h3>
                  <p className="text-gray-600">
                    Explore tailored opportunities and resources that guide your
                    journey.
                  </p>
                </div>
              </div>
              <div className="w-px h-20 bg-gray-300 ml-6 mb-2"></div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-foreground border-3 border-primary rounded-full flex items-center justify-center text-background font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Understand
                  </h3>
                  <p className="text-gray-600">
                    Learn the fundamentals and gain insights to invest
                    confidently.
                  </p>
                </div>
              </div>
              <div className="w-px h-20 bg-gray-300 ml-6 mb-2"></div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-foreground border-3 border-primary rounded-full flex items-center justify-center text-background font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Grow
                  </h3>
                  <p className="text-gray-600">
                    Take action and watch your investments grow toward your
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-foreground text-muted-foreground py-10">
        <Marquee speed="fast">
          <div className="flex gap-10">
            <TypographyH4 className="text-7xl font-medium animate-in">
              Smart Investments for your bright future
            </TypographyH4>
            <Image
              src={"/logo.svg"}
              width={40}
              height={40}
              alt="fincelerate-logo"
            />
          </div>
        </Marquee>
      </div>
      <MarketInsightsSlider />
      <div className="py-15">
        <div className="flex flex-col gap-10 items-center">
          <TypographyH3 className="w-1/4 text-center font-normal">
            Your Financial Goals, One Conversation Away.
          </TypographyH3>
          <TypographyH2>
            <span className="text-helper font-extrabold">Connect</span> with an{" "}
            <span className="text-helper font-extrabold">
              Investment Expert
            </span>
          </TypographyH2>
          <button className="inline-flex max-w-max items-center gap-2 border border-helper hover:bg-helper/10 px-6 py-2 rounded-full transition-colors">
            <CalendarClock size={24} /> Book an Appointment
          </button>
        </div>
      </div>

      <div className="bg-foreground py-10">
        <div>
          <TypographyH1 className="text-center text-secondary-foreground/65 text-5xl font-extrabold">
            Watch. Learn. Invest.
          </TypographyH1>

          <Carousel className="w-full">
            <div className="flex flex-col gap-5">
              <div className="flex justify-end gap-3 px-10">
                <CarouselPrevious
                  variant={"outline"}
                  className="p-2 bg-foreground text-background hover:text-background rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                />
                <CarouselNext
                  variant={"outline"}
                  className="p-2 bg-foreground text-background hover:text-background rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                />
              </div>
              <CarouselContent className="-ml-1">
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="p-5 basis-1/3">
                    <div className="p-1">
                      <Card className="bg-card/80">
                        <CardContent className="flex aspect-auto items-center justify-center p-6 py-35"></CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
          <div className="flex justify-center mt-5">
            <Button className="rounded-3xl px-8">Explore more</Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <footer>
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-2">
                      <Image
                        src={"/logo.svg"}
                        width={40}
                        height={40}
                        alt="fincelerate-logo"
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      incelerate
                    </h2>
                  </div>
                  <p className="text-sm md:text-base">
                    Your journey, our guidance.
                  </p>
                  <p className="mt-2">
                    <span className="text-amber-500 font-medium">Invest</span>{" "}
                    with{" "}
                    <span className="text-amber-500 font-medium">
                      confidence.
                    </span>
                  </p>
                </div>

                <div className="flex space-x-4 mb-8">
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Twitter size={24} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Youtube size={24} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Facebook size={24} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                  <TypographyLarge>Quick Links</TypographyLarge>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 1</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 2</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 3</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 4</TypographySmall>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Why Fincelerate? */}
                <div className="flex flex-col gap-3">
                  <TypographyLarge>Why Fincelerate?</TypographyLarge>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>About Us</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Meet Our Team</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 3</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Link 4</TypographySmall>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="flex flex-col gap-3">
                  <TypographyLarge>Legal</TypographyLarge>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Privacy Policy</TypographySmall>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        <TypographySmall>Terms of Service</TypographySmall>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-foreground/10"></div>

            {/* Contact and copyright */}
            <div className="flex flex-col justify-between items-center my-5">
              <div className="flex flex-row items-center gap-10">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="" />
                  <span className="text-sm">+91-9871248691</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="text-sm">mail@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="border-t border-foreground/10 w-full"></div>
            <div className="text-sm text-gray-400 text-center mt-5">
              © 2025 Fincelerate Pvt Ltd.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
