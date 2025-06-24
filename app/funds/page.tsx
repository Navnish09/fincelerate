"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  Calculator,
  ChevronDown,
  ChevronUp,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";

import classes from "@/app/_styles/explore-funds.module.css";
import {
  TypographyH1,
  TypographyH4,
  TypographyLarge,
  TypographyP,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FundComparison from "../_components/CompareFunds";

const fundCategories = [
  "ETF or Index",
  "ELSS",
  "Sectoral or Thematic",
  "Small Cap Fund",
  "Multi Cap Fund",
  "Contra Fund",
  "Focused Fund",
  "Large & Mid Cap Fund",
  "Flexi Cap Fund",
  "Mid Cap Fund",
  "Value Fund",
  "Dividend Yield Fund",
];

const fundData = [
  {
    id: 1,
    name: "ABSL Frontline Equity Fund (G)",
    company: "Aditya Birla Sun Life",
    nav: "₹ 143.88",
    returns: "22.33%",
    navDate: "as of Jan 31, 2024",
  },
  {
    id: 2,
    name: "SBI Long term Equity Fund (G)",
    company: "SBI Mutual Fund",
    nav: "₹ 143.88",
    returns: "22.33%",
    navDate: "as of Jan 31, 2024",
  },
  {
    id: 3,
    name: "ICICI Pru Value Discovery Fund (G)",
    company: "ICICI Prudential",
    nav: "₹ 143.88",
    returns: "22.33%",
    navDate: "as of Jan 31, 2024",
  },
  {
    id: 4,
    name: "Nippon India Large Cap Fund (G)",
    company: "Nippon India",
    nav: "₹ 143.88",
    returns: "22.33%",
    navDate: "as of Jan 31, 2024",
  },
  {
    id: 5,
    name: "ABSL AMC Limited(G)",
    company: "Aditya Birla Sun Life",
    nav: "₹ 143.88",
    returns: "22.33%",
    navDate: "as of Jan 31, 2024",
  },
];

export default function Component() {
  const [activeTab, setActiveTab] = useState("Equity");
  const [selectedFunds, setSelectedFunds] = useState<number[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedPeriods, setSelectedPeriods] = useState<{
    [key: number]: string;
  }>({});
  const [isComparisonExpanded, setIsComparisonExpanded] = useState(true);

  const tabs = [
    "Equity",
    "Hybrid",
    "Debt",
    "Solution Oriented",
    "Funds of Funds",
  ];

  const toggleFundSelection = (fundId: number) => {
    setSelectedFunds((prev) => {
      const newSelection = prev.includes(fundId)
        ? prev.filter((id) => id !== fundId)
        : [...prev, fundId];
      // Auto-expand when first fund is selected
      if (newSelection.length === 1 && prev.length === 0) {
        setIsComparisonExpanded(true);
      }
      return newSelection;
    });
  };

  const handlePeriodChange = (fundId: number, period: string) => {
    setSelectedPeriods((prev) => ({ ...prev, [fundId]: period }));
  };

  const removeFundFromComparison = (fundId: number) => {
    setSelectedFunds((prev) => prev.filter((id) => id !== fundId));
  };

  const clearAllComparisons = () => {
    setSelectedFunds([]);
  };

  const getSelectedFundsData = () => {
    return fundData.filter((fund) => selectedFunds.includes(fund.id));
  };

  const SidebarContent = () => (
    <div className="flex flex-col gap-4">
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
    <>
      <div
        style={{
          background:
            "linear-gradient(192.42deg, #1A1D34 -33.78%, #15191C 114.44%)",
        }}
        className="min-h-screen text-white relative"
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
            {!showComparison && (
              <div className="flex justify-center gap-8">
                <Button
                  variant={"link"}
                  className={`pb-2 text-lg font-medium transition-colors relative text-yellow-400 underline `}
                >
                  <Link href={"/funds"}>All Funds</Link>
                </Button>
                <Button
                  variant={"link"}
                  className={`pb-2 text-lg font-medium transition-colors relative text-white hover:text-yellow-300`}
                >
                  <Link href={"/funds/nfo"}>NFO</Link>
                </Button>
              </div>
            )}
          </div>
          {/* Fund Type Navigation Tabs */}
          {!showComparison && (
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

                {/* Scrollable Tabs Container */}

                <div className="flex-1 overflow-x-auto">
                  <div className="flex items-center gap-1 min-w-max lg:justify-center">
                    {tabs.map((tab) => (
                      <Button
                        key={tab}
                        variant={activeTab === tab ? "default" : "ghost"}
                        className={`px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                          activeTab === tab
                            ? ""
                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex relative">
          {/* Desktop Sidebar */}
          <div className="w-64 bg-slate-950 min-h-screen p-4 hidden lg:block m-4 rounded-2xl">
            <SidebarContent />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Input
                  placeholder="Search here for Fund Name"
                  className="bg-slate-950"
                  startIcon={<Search className="text-slate-400 w-4 h-4" />}
                />
              </div>
              <Select>
                <SelectTrigger className="w-full lg:w-48 bg-slate-950 border-slate-600 text-white">
                  <SelectValue placeholder="Advance AMC Funds (4)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Funds</SelectItem>
                  <SelectItem value="selected">Selected Funds</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full lg:w-32 bg-slate-950 border-slate-600 text-white">
                  <SelectValue placeholder="Growth" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="growth">Growth</SelectItem>
                  <SelectItem value="dividend">Dividend</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Selected AMCs Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TypographyH4 className=" font-semibold text-helper2">
                  Your Selected AMCs (4)
                </TypographyH4>
                <Button
                  variant="ghost"
                  className="text-slate-400 hover:text-white p-0"
                >
                  Clear Selection
                </Button>
              </div>
            </div>

            {/* Fund Cards */}
            <div className="flex flex-col gap-4">
              {fundData.map((fund, index) => (
                <Card
                  key={fund.id}
                  className={`border-none hover:bg-slate-750 transition-colors drop-shadow-lg
                  ${index % 2 === 0 ? "bg-[#191B27]" : "bg-[#1D1F34]"}
                  `}
                >
                  <CardContent className="">
                    <div className="flex flex-col gap-6">
                      {/* Top Section: Fund Info + Financial Data */}
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Fund Info with Calculator */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0"></div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-white text-lg mb-1 leading-tight">
                                {fund.name}
                              </h3>
                              <p className="text-sm text-slate-400">
                                {fund.company}
                              </p>
                            </div>
                          </div>

                          {/* Calculator below fund info */}
                          <div className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer transition-colors ml-16">
                            <Calculator className="w-4 h-4 text-secondary2" />
                            <span className="text-sm font-medium">
                              Calculator
                            </span>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Financial Data */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:flex-shrink-0">
                          {/* NAV */}
                          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <div className="text-sm text-slate-400 mb-2 font-medium">
                              NAV
                            </div>
                            <div className="text-helper font-bold text-xl mb-1">
                              {fund.nav}
                            </div>
                            <div className="text-xs text-slate-500">
                              {fund.navDate}
                            </div>
                          </div>

                          {/* Returns with Period Dropdown */}
                          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <div className="text-sm text-slate-400 mb-2 font-medium">
                              Per Annum
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-helper font-bold text-xl">
                                {fund.returns}
                              </div>
                              <Select
                                value={selectedPeriods[fund.id] || "5Y"}
                                onValueChange={(value) =>
                                  handlePeriodChange(fund.id, value)
                                }
                              >
                                <SelectTrigger className="w-16 h-8 bg-cyan-500 hover:bg-cyan-600 border-cyan-500 text-white text-xs font-medium">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1Y">1Y</SelectItem>
                                  <SelectItem value="3Y">3Y</SelectItem>
                                  <SelectItem value="5Y">5Y</SelectItem>
                                  <SelectItem value="10Y">10Y</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          {/* CTA Buttons */}
                          <div className="hidden lg:flex items-center gap-3">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-slate-400 hover:text-white hover:bg-slate-700"
                            >
                              <ShoppingCart className="w-5 h-5" />
                            </Button>
                            <Button
                              variant={"outline"}
                              className="rounded-full border-success font-semibold shadow-lg hover:shadow-xl transition-all bg-gray-950/20"
                            >
                              Invest now
                              <ArrowRight />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Mobile: Actions above CTA buttons */}
                      <div className="lg:hidden flex flex-col gap-4">
                        {/* Add to Compare */}
                        <div className="flex items-center justify-center gap-3">
                          <Checkbox
                            id={`compare-${fund.id}`}
                            checked={selectedFunds.includes(fund.id)}
                            onCheckedChange={() => toggleFundSelection(fund.id)}
                            className="border-slate-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <label
                            htmlFor={`compare-${fund.id}`}
                            className="text-sm text-slate-400 cursor-pointer hover:text-white transition-colors"
                          >
                            Add to Compare
                          </label>
                        </div>

                        {/* CTA Buttons - Full width on mobile */}
                        <div className="flex gap-3">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-slate-400 hover:text-white hover:bg-slate-700 flex-shrink-0"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </Button>
                          <Button
                            variant={"outline"}
                            className="flex-1 text-white rounded-full border-green-400 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all bg-gray-950/20"
                          >
                            Invest Now
                            <ArrowRight />
                          </Button>
                        </div>
                      </div>

                      {/* Desktop: CTA buttons and actions */}
                      <div className="hidden lg:flex lg:items-center justify-end">
                        {/* Add to Compare */}
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id={`compare-${fund.id}`}
                            checked={selectedFunds.includes(fund.id)}
                            onCheckedChange={() => toggleFundSelection(fund.id)}
                            className="border-white data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                          />
                          <label
                            htmlFor={`compare-${fund.id}`}
                            className="text-sm text-white-400 font-semibold cursor-pointer hover:text-white transition-colors"
                          >
                            Add to Compare
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Fund Comparison Section */}
        {/* Sticky Fund Comparison Section */}
        {!!selectedFunds.length && !showComparison && (
          <div className="sticky bottom-0 left-0 right-0 bg-[#12151E] shadow-lg z-50 transition-all duration-300 ease-in-out">
            {/* Toggle Header */}
            <div className="flex items-center justify-between px-4 lg:px-6 py-3 border-b ">
              <div className="flex items-center gap-3">
                <TypographyLarge className="text-helper2">
                  Compare Funds ({selectedFunds.length})
                </TypographyLarge>
                {selectedFunds.length >= 2 && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsComparisonExpanded(!isComparisonExpanded)}
                className="text-slate-400 hover:text-white hover:bg-slate-700 flex items-center gap-2"
              >
                {isComparisonExpanded ? (
                  <>
                    <span className="text-sm">Hide</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span className="text-sm">Show</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Expandable Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isComparisonExpanded ? "opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Selected Funds Display */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3">
                      {getSelectedFundsData().map((fund) => (
                        <div
                          key={fund.id}
                          className="flex w-full md:w-min justify-between md:justify-start items-center gap-5 bg-slate-950 rounded-sm p-5 group transition-colors"
                        >
                          <div className="flex gap-3 items-center">
                            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0"></div>
                            <span className="text-sm text-white font-medium truncate max-w-32">
                              {fund.company}
                            </span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="w-5 h-5 p-0 text-slate-400 hover:text-white hover:bg-slate-500 rounded-full"
                            onClick={() => removeFundFromComparison(fund.id)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 lg:flex-shrink-0">
                    <Button
                      className="rounded-full"
                      disabled={selectedFunds.length < 2}
                      onClick={() => {
                        setShowComparison(true);

                        // Scroll to top
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Compare
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary rounded-full shadow-2xl"
                      onClick={clearAllComparisons}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {showComparison && (
        <div className="absolute h-full w-full top-0 bottom-0 bg-[#060A20F2]">
          <FundComparison
            onClose={() => {
              setShowComparison(false);
              setIsComparisonExpanded(true);
            }}
          />
        </div>
      )}
    </>
  );
}
