import classes from "@/app/_styles/home-page.module.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight, CalendarClock, Search } from "lucide-react";
import Image from "next/image";
import MarketInsightsSlider from "./_components/Carousal";
import { Marquee } from "./_components/Marquee";
export default function Home() {
  return (
    <>
      <div className={cn("pt-36 m-auto h-[95dvh]", classes.heroImage)}>
        <main className="flex flex-col items-center px-4 pt-5 pb-64 w-11/12 md:w-3/4 mx-auto relative z-10 gap-44 h-full">
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
              endIcon={<Search className=" text-gray-400" size={18} />}
            />
          </div>
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-background p-3 rounded-full border-3 border-foreground z-20 hover:bg-gray-900 transition-colors cursor-pointer">
            <ArrowDown className="text-helper" size={24} />
          </button>
        </main>
      </div>
      <div className="m-auto bg-foreground hero-image">
        <section className="py-20 px-4 w-11/12 md:max-w-4/6 m-auto">
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
        <div className="flex flex-col gap-5 md:gap-10 items-center p-5">
          <TypographyH3 className="md:w-1/4 text-center font-normal">
            Your Financial Goals, One Conversation Away.
          </TypographyH3>
          <TypographyH2 className="text-center">
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
        <div className="flex flex-col gap-5">
          <TypographyH1 className="text-center text-secondary-foreground/65 text-5xl font-extrabold">
            Watch. Learn. Invest.
          </TypographyH1>

          <Carousel className="w-full">
            <div className="flex flex-col md:gap-5">
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
                  <CarouselItem key={index} className="p-5 md:basis-1/3">
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
    </>
  );
}
