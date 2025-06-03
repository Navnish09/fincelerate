import { ArrowDown, ArrowRight, Search } from "lucide-react";
import classes from "@/app/_styles/home-page.module.css";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import MarketInsightsSlider from "./_components/Carousal";
export default function Home() {
  return (
    <>
      <div className={cn("pt-36 m-auto h-[95dvh]", classes["heroImage"])}>
        <main className="flex flex-col items-center px-4 pt-5 pb-64 w-3/4 mx-auto relative z-10 gap-44 h-full">
          <div className="inline-flex flex-col gap-5 w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              <span className="text-[#00e5c0] font-extrabold">Invest</span> with{" "}
              <span className="text-[#00e5c0] font-extrabold">Purpose</span>
            </h1>
            <button className="inline-flex max-w-max items-center gap-2 border border-[#00e5c0] text-[#00e5c0] hover:bg-[#00e5c0]/10 px-6 py-2 rounded-full transition-colors">
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search topics like 'How to start investing' or 'Mutual Funds'..."
              className="rounded-full h-12 focus-visible:ring-[#00e5c0]/50 focus-visible:ring-2"
            />
            <Search
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-background p-3 rounded-full border-3 border-foreground z-20 hover:bg-gray-900 transition-colors cursor-pointer">
            <ArrowDown className="text-[#00e5c0]" size={24} />
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
              From Discovery to Growth, We've Got You Covered.
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
      <MarketInsightsSlider />
    </>
  );
}
