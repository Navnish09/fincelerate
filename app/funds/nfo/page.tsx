"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  Calendar,
  FileText,
  Menu,
  Phone,
  Play,
} from "lucide-react";
import { useState } from "react";

import classes from "@/app/_styles/explore-funds.module.css";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH1,
  TypographyP
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";

const fundCategories = [
  "Axis Mutual Fund",
  "Bandhan Mutual Fund",
  "Baroda BNP Paribas Mutual Fund",
  "Edelweiss Mutual Fund",
  "Flexi Cap",
  "HDFC Mutual Fund",
  "Kotak Mutual Fund",
  "LIC Mutual Fund",
  "Mid Cap Fund",
  "Multi Cap Fund",
  "Value Fund",
];

export default function Component() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-2">
        {fundCategories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className="w-full justify-start text-left text-slate-300 hover:text-white hover:bg-slate-700 p-2 h-auto"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background:
          "linear-gradient(192.42deg, #1A1D34 -33.78%, #15191C 114.44%)",
      }}
      className="min-h-screen text-white pb-5"
    >
      {/* Hero Section */}
      <div
        className={cn(
          "bg-gradient-to-r from-purple-900 via-slate-800 to-purple-900 pt-44 flex flex-col gap-8",
          classes["exploreFundsHero"]
        )}
      >
        <div className="max-w-4xl mx-auto text-center">
          <TypographyH1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Funds
          </TypographyH1>
          <TypographyP className="mb-8 max-w-2xl mx-auto leading-relaxed">
            Browse investment options designed to align with your goals.
            Discover funds across categories and make informed decisions with
            ease with SIP or lumpsum Calculator for tailored investments
            options.
          </TypographyP>

          {/* Hero Navigation Tabs */}
          <div className="flex justify-center gap-8">
            <Button
              variant={"link"}
              className={`pb-2 text-lg font-medium transition-colors relative text-white hover:text-secondary2/80`}
            >
              <Link href={"/funds"}>All Funds</Link>
            </Button>
            <Button
              variant={"link"}
              className={`pb-2 text-lg font-medium transition-colors relative text-secondary2 underline`}
            >
              <Link href={"/funds/nfo"}>NFO</Link>
            </Button>
          </div>
        </div>
        {/* Fund Type Navigation Tabs */}
        <div className="border-b border-slate-700 bg-slate-950/30">
          <div className="flex items-center px-4 py-4">
            {/* Mobile Sidebar Trigger */}
            <Sheet
              open={isMobileSidebarOpen}
              onOpenChange={setIsMobileSidebarOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden mr-3 bg-slate-800 hover:bg-slate-700 flex-shrink-0"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 bg-[#12151E] border-slate-700 p-4"
              >
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="w-64 bg-slate-950 min-h-screen p-4 hidden lg:block m-4 rounded-2xl">
          <SidebarContent />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-10 lg:px-6">
          <div className="min-h-screen text-white">
            <div className="mx-auto">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                      Axis Nifty 500 Momentum Index Fund(G)
                    </h1>
                    <Badge className="bg-success text-success-foreground hover:bg-slate-600 text-xs">
                      New Fund Offer
                    </Badge>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <Button
                    variant="outline"
                    className="gap-2 px-4 py-2 border-primary rounded-full"
                  >
                    <Phone className="w-4 h-4" />
                    Book An Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 px-4 py-2 border-success rounded-full bg-gray-950/20"
                  >
                    Invest
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* NFO Period */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-helper2 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span className="text-base">
                    NFO Period: 01 Feb, 2025 - 20 Feb, 2025
                  </span>
                </div>
              </div>

              {/* Main Content Container */}
              <div className="flex flex-col gap-8">
                {/* Objective of Scheme */}
                <section>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Objective of Scheme
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    To provide returns before expenses that correspond to the
                    Nifty500 Momentum 50 TRI subject to tracking errors. There
                    is no assurance that the investment objective of the scheme
                    will be achieved.
                  </p>
                </section>

                {/* Scheme Details - With Border */}
                <section>
                  <Card className="border-2 bg-slate-950/50 border-none rounded-lg p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-helper2 rounded-sm"></div>
                      <h2 className="text-xl font-semibold text-white">
                        Scheme Details
                      </h2>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* Type and Category */}
                      <div>
                        <div className="text-slate-300 text-base">
                          <span className="font-medium">Type: Open Ended</span>
                          <span className="mx-4">|</span>
                          <span className="font-medium">
                            Category: Other Scheme - Other ETFs
                          </span>
                        </div>
                      </div>

                      {/* Minimum Subscription Amount */}
                      <Separator />
                      <div>
                        <TypographyP className="mb-3 text-muted-foreground">
                          Minimum Subscription Amount
                        </TypographyP>
                        <div className="font-semibold text-base">
                          <span className="text-success">Rs. 1000/-</span>
                          <span className="text-slate-300 mx-2">
                            and in multiples of Rs. 1/- thereafter
                          </span>
                        </div>
                      </div>

                      {/* Indicate Load Separately */}
                      <Separator />
                      <div>
                        <TypographyP className="mb-4 text-muted-foreground">
                          Indicate Load Separately
                        </TypographyP>
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-3 text-slate-300">
                            <span className="flex-shrink-0">1)</span>
                            <p>
                              If redeemed/switched out{" "}
                              <span className="text-helper2 font-medium">
                                within
                              </span>{" "}
                              15 days from the date of allotment:{" "}
                              <span className="text-helper2 font-bold">
                                0.25%
                              </span>
                            </p>
                          </div>
                          <div className="flex gap-3 text-slate-300">
                            <span className="flex-shrink-0">2)</span>
                            <p>
                              If redeemed/switched out{" "}
                              <span className="text-helper2 font-medium">
                                after
                              </span>{" "}
                              15 days from the date of allotment:{" "}
                              <span className="text-helper2 font-bold">
                                Nil
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </section>

                {/* Helpful Resources */}
                <section>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Helpful Resources
                  </h3>

                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Video Section */}
                    <div className="lg:w-96">
                      <div className="flex flex-col gap-3">
                        <div className="relative bg-slate-700 rounded-lg overflow-hidden aspect-video">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="lg"
                              className="bg-black/50 hover:bg-black/70 rounded-full w-16 h-16 p-0"
                            >
                              <Play className="w-6 h-6 text-white ml-1" />
                            </Button>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black/30 backdrop-blur-sm rounded px-3 py-1">
                              <span className="text-white text-sm font-medium">
                                INTRODUCTION
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-helper2 text-sm font-medium">
                          Watch a video here to learn more about this scheme
                        </p>
                      </div>
                    </div>

                    {/* Document Links */}
                    <div className="flex-1 flex flex-col gap-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left p-4 h-auto hover:bg-slate-800 group"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <FileText className="w-5 h-5 flex-shrink-0" />
                          <div className="flex-1 ">
                            <div className="flex gap-2 items-center text-secondary2 underline font-medium group-hover:text-secondary2/80 text-left">
                              Key Information Memorandum
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Button>

                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left p-4 h-auto hover:bg-slate-800 group"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <FileText className="w-5 h-5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex gap-2 items-center text-secondary2 underline font-medium group-hover:text-secondary2/80 text-left">
                              Scheme Information Document
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Button>

                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left p-4 h-auto hover:bg-slate-800 group"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <FileText className="w-5 h-5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex gap-2 items-center text-secondary2 underline font-medium group-hover:text-secondary2/80 text-left">
                              Statement of Additional Information
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
