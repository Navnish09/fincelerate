"use client";

import { ArrowUp, Info, ShoppingCart } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GaugeChart } from "@/components/ui/gauge";
import { Input } from "@/components/ui/input";

import { Pentagon } from "@/components/ui/pentagon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";

export const FundDetails = () => {
  const FormSchema = z.object({
    amount: z.number(),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted with data:", data);
    // Here you would typically handle the form submission, e.g., send the data to an API
    // For this example, we just log it to the console
  }
  return (
    <div className="bg-card/30 pt-45 pb-10">
      <div className="max-w-10/12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br bg-foreground rounded-full flex items-center justify-center">
              <span className="text-pink-800 font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col gap-2">
              <TypographyH3>Axis Nifty 500 Momentum</TypographyH3>
              <TypographySmall className="text-helper2">
                Category: ELSS
              </TypographySmall>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
            <Card className="py-3 rounded-xs text-center lg:text-left border-none">
              <CardContent>
                <div className="flex justify-between items-center gap-20">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col">
                      <TypographyP className="font-medium">NAV</TypographyP>
                      <TypographySmall className="text-helper text-xs">
                        As on 25 Dec 2024
                      </TypographySmall>
                    </div>
                    <div className="flex flex-col gap-1">
                      <TypographySmall className="text-green-600 flex gap-0.5 items-center">
                        <ArrowUp className="h-4 w-4" /> +0.25%
                      </TypographySmall>
                      <TypographySmall className="text-xs text-muted-foreground">
                        (1-D Change)
                      </TypographySmall>
                    </div>
                  </div>
                  <TypographyH3 className="text-success text-xl lg:text-2xl font-extrabold">
                    ₹143.88
                  </TypographyH3>
                </div>
              </CardContent>
            </Card>
            <Card className="py-3 rounded-xs text-center lg:text-left border-none">
              <CardContent>
                <div className="flex justify-between items-center gap-20">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col">
                      <TypographyP className="font-medium">Returns</TypographyP>
                      <TypographySmall className="text-helper text-xs">
                        Per Annum
                      </TypographySmall>
                    </div>
                    <div className="flex flex-col gap-1">
                      <TypographySmall className="text-xs text-muted-foreground">
                        since inception
                      </TypographySmall>
                      <TypographySmall className="text-xs text-muted-foreground">
                        01/03/1994
                      </TypographySmall>
                    </div>
                  </div>
                  <TypographyH3 className="text-success text-xl lg:text-2xl font-extrabold">
                    26.55%
                  </TypographyH3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center xl:flex-row gap-8 py-15">
          {/* Left Section - Gauge and Metrics */}
          <div className="flex-1">
            {/* Gauge Chart */}
            <div className="flex flex-col ml-25">
              <Pentagon
                pointTexts={[
                  <div key={"1"} className="flex gap-1">
                    <Info className="w-4 h-4 text-helper2" />
                    Std. Deviation
                  </div>,
                  <div key={"2"} className="flex gap-1">
                    <Info className="w-4 h-4 text-helper2" />
                    Alpha
                  </div>,
                  <div key={"3"} className="flex gap-1">
                    <Info className="w-4 h-4 text-helper2" />
                    Beta
                  </div>,
                  <div key={"4"} className="flex gap-1">
                    <Info className="w-4 h-4 text-helper2" />
                    Sharpe Ratio
                  </div>,
                  <div key={"5"} className="flex gap-1 flex-row-reverse mr-10">
                    <Info className="w-4 h-4 text-helper2" />
                    Sortino Ratio
                  </div>,
                ]}
                size={475}
              >
                <div className="w-[475px]">
                  <GaugeChart />
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs">
                        This Fund has Moderately High risk
                      </span>
                    </div>
                  </div>
                </div>
              </Pentagon>
            </div>
          </div>

          {/* Right Section - Investment Panel */}
          <div className="w-4/12">
            <Card className="bg-background border-none">
              <CardContent>
                <div className="flex flex-col gap-5">
                  <TypographyH2 className="text-lg font-semibold">
                    Enter Amount & Start Investing
                  </TypographyH2>

                  {/* SIP/Lumpsum Toggle */}
                  <Tabs defaultValue="sip" className="flex flex-col gap-10">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="sip">SIP</TabsTrigger>
                      <TabsTrigger value="lumpsum">Lumpsum</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sip">
                      <div>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-3/3 space-y-10"
                          >
                            <FormField
                              control={form.control}
                              name="amount"
                              render={({ field }) => (
                                <FormItem>
                                  <div className="flex justify-between">
                                    <FormLabel>Insallment amount</FormLabel>
                                    <FormDescription className="text-helper2 text-right text-xs">
                                      Minimum amount: ₹1000.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter installment amount..."
                                      size="lg"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex flex-col gap-5">
                              {/* Terms */}
                              <TypographySmall className="text-xs text-muted-foreground ">
                                By continuing, I agree to the declaration{" "}
                                <span className="text-secondary2 underline cursor-pointer">
                                  Terms & Conditions.
                                </span>
                              </TypographySmall>

                              {/* Add to Cart Button */}
                              <Button
                                variant={"outline"}
                                className="w-full"
                                size={"lg"}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </TabsContent>
                    <TabsContent value="lumpsum">
                      <div>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-3/3 space-y-10"
                          >
                            <FormField
                              control={form.control}
                              name="amount"
                              render={({ field }) => (
                                <FormItem>
                                  <div className="flex justify-between">
                                    <FormLabel>Insallment amount</FormLabel>
                                    <FormDescription className="text-helper2 text-right text-xs">
                                      Minimum amount: ₹1000.
                                    </FormDescription>
                                  </div>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter installment amount..."
                                      size="lg"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex flex-col gap-5">
                              {/* Terms */}
                              <TypographySmall className="text-xs text-muted-foreground ">
                                By continuing, I agree to the declaration{" "}
                                <span className="text-secondary2 underline cursor-pointer">
                                  Terms & Conditions.
                                </span>
                              </TypographySmall>

                              {/* Add to Cart Button */}
                              <Button
                                variant={"outline"}
                                className="w-full"
                                size={"lg"}
                              >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundDetails;
