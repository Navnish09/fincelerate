"use client";

import EChart from "@/components/ui/chart";
import { DataTable } from "@/components/ui/data-table";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TypographyH1,
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";

const NegativePositiveText = ({
  value,
  renderValue,
}: {
  value: number;
  renderValue?: (value: number) => React.ReactNode;
}) => {
  const isNegative = value < 0;

  return (
    <span
      className={cn("text-sm font-semibold", {
        ["text-success"]: !isNegative,
        ["text-destructive"]: isNegative,
      })}
    >
      {renderValue ? renderValue(value) : value}
    </span>
  );
};

const data = [
  { label: "Banks", value: 80 },
  { label: "Automobiles", value: 70 },
  { label: "Information Technology", value: 60 },
  { label: "Power", value: 50 },
  { label: "Pharmaceuticals", value: 40 },
];

export const PortfolioDetails = () => {
  return (
    <div className="py-16 md:py-25">
      <div className="max-w-10/12 mx-auto">
        <div className="flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 justify-center items-center md:w-2/5 text-center">
              <TypographyH1>Portfolio</TypographyH1>
              <TypographyP className="text-secondary2">
                Track your investment growth with real-time returns.
              </TypographyP>
            </div>
          </div>

          {/* Content Section */}
          <div className="">
            <Tabs defaultValue="assetClass" className="flex flex-col gap-10">
              <div className="w-full md:w-3/9 m-auto justify-center flex">
                <TabsList className="w-full h-15 rounded-full">
                  <TabsTrigger
                    value="assetClass"
                    className="grow py-4 rounded-full"
                  >
                    Asset Class
                  </TabsTrigger>
                  <TabsTrigger
                    value="sectors"
                    className="grow py-4 rounded-full"
                  >
                    Sectors
                  </TabsTrigger>
                  <TabsTrigger
                    value="equityHolding"
                    className="grow py-4 rounded-full"
                  >
                    Equity Holdings
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="assetClass" className="md:py-10">
                <div className="flex flex-col-reverse md:flex-row gap-10">
                  <div className="basis-3/5">
                    <div className="flex flex-col gap-5 border-b pb-10">
                      <div className="flex justify-between items-center">
                        <TypographyH4>Equity</TypographyH4>
                        <div className="flex w-1/5 gap-5">
                          <span className="block rounded-xs h-6 w-6 bg-[#68CCF1]"></span>
                          <TypographyH4>80%</TypographyH4>
                        </div>
                      </div>
                      <TypographySmall className="text-muted-foreground">
                        Aims for long-term growth by investing in stocks. Expect
                        higher returns, but with greater ups and downs along the
                        way.
                      </TypographySmall>
                    </div>
                    <div className="flex flex-col gap-5 border-b py-10">
                      <div className="flex justify-between items-center">
                        <TypographyH4>Debt</TypographyH4>
                        <div className="flex w-1/5 gap-5">
                          <span className="block rounded-xs h-6 w-6 bg-[#FEE388]"></span>
                          <TypographyH4>18.2%</TypographyH4>
                        </div>
                      </div>
                      <TypographySmall className="text-muted-foreground">
                        Seeks steady, reliable returns through bonds and similar
                        assets. Lower risk compared to equities, ideal for
                        stability.
                      </TypographySmall>
                    </div>
                    <div className="flex flex-col gap-5 border-b py-10">
                      <div className="flex justify-between items-center">
                        <TypographyH4>Cash and Cash Equivalent</TypographyH4>
                        <div className="flex w-1/5 gap-5">
                          <span className="block rounded-xs h-6 w-6 bg-[#FF713D]"></span>
                          <TypographyH4>1.8%</TypographyH4>
                        </div>
                      </div>
                      <TypographySmall className="text-muted-foreground">
                        Keeps your investment liquid and stable—great for
                        short-term needs or quick access to your money.
                      </TypographySmall>
                    </div>
                  </div>
                  <div className="md:basis-1/2 grow w-full h-[350px] md:h-[500px]">
                    <EChart
                      option={{
                        color: [
                          "hsla(46, 98%, 76%, 1)",
                          "hsla(16, 100%, 62%, 1)",
                          "hsla(194, 91%, 70%, 1)",
                        ],
                        // tooltip: {
                        //   trigger: "item",
                        // },
                        // legend: {
                        //   orient: "horizontal",
                        //   left: "center",
                        //   textStyle: {
                        //     color: "#fff",
                        //     fontSize: 14,
                        //     fontWeight: "bold",
                        //   },
                        //   itemGap: 30,
                        // },
                        series: [
                          {
                            name: "Portfolio",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            padAngle: 2,
                            itemStyle: {
                              borderRadius: 8,
                            },
                            label: {
                              show: false,
                              fontSize: 16,
                              position: "center",
                              color: "#fff",
                              fontWeight: "bold",
                              formatter: "{b} {d}%",
                            },
                            emphasis: {
                              scaleSize: 10,
                              label: {
                                show: true,
                                fontSize: 14,
                                color: "#fff",
                                fontWeight: "bold",
                                formatter: "{b} {d}%",
                              },
                            },
                            labelLine: {
                              show: false,
                            },
                          },
                        ],
                      }}
                      dataset={[
                        {
                          source: [
                            ["Debt", 18.2],
                            ["Cash and Cash Equivalent", 1.8],
                            ["Equity", 80],
                          ],
                        },
                      ]}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sectors" className="md:py-10">
                <div className="flex flex-col gap-10">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 md:gap-6"
                    >
                      <div className="rounded-r-full flex flex-col md:flex-row md:items-center w-full bg-card md:gap-5 rounded-l-full overflow-hidden">
                        <div className="basis-1/5 flex-shrink-0">
                          <div className="inline-flex py-0.5 md:border-t-4 md:border-secondary px-4">
                            <TypographyP className="font-medium">
                              {item.label}
                            </TypographyP>
                          </div>
                        </div>

                        <div className="flex-1 relative px-4 md:px-0 pb-2 md:pb-0">
                          <Progress
                            value={item.value}
                            className="h-3 md:h-4 bg-card [&>div]:bg-gradient-to-r [&>div]:from-secondary2 [&>div]:to-secondary"
                          />
                        </div>
                      </div>

                      <div className="w-12 md:w-16 flex-shrink-0 text-right">
                        <TypographyH4 className="text-secondary2 font-bold">
                          {item.value}%
                        </TypographyH4>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="equityHolding" className="md:py-10">
                <div className="flex flex-col gap-5 animate-in">
                  <TypographySmall>
                    Discover how your investments are distributed across{" "}
                    <span className="text-helper2">
                      369 equity holdings — keep scrolling for deeper insights.
                    </span>
                  </TypographySmall>
                  <DataTable
                    {...{
                      columns: [
                        {
                          accessorKey: "stockName",
                          header: "Stock Name",
                        },
                        {
                          accessorKey: "sectors",
                          header: "Sectors",
                        },
                        {
                          accessorKey: "holdings",
                          header: "Percentage Holdings",
                        },
                      ],
                      data: [
                        {
                          stockName: "ABSL AMC Limited",
                          sectors: "Chemical",
                          holdings: 0.65,
                        },
                        {
                          stockName: "Axis Asset Management Co. Ltd.",
                          sectors: "Information Technology",
                          holdings: 0.65,
                        },
                        {
                          stockName:
                            "Baroda BNP Paribas Asset Management India Private",
                          sectors: "Banking",
                          holdings: 1.2,
                        },
                        {
                          stockName: "Bharti Airtel Ltd.",
                          sectors: "Telecommunications",
                          holdings: -1.5,
                        },

                        {
                          stockName: "HDFC Bank Ltd.",
                          sectors: "Banking",
                          holdings: 2.5,
                        },
                        {
                          stockName: "Infosys Ltd.",
                          sectors: "Information Technology",
                          holdings: -1.8,
                        },
                        {
                          stockName: "Reliance Industries Ltd.",
                          sectors: "Energy",
                          holdings: 3.0,
                        },
                        {
                          stockName: "Tata Consultancy Services Ltd.",
                          sectors: "Information Technology",
                          holdings: 1.2,
                        },
                        {
                          stockName: "Hindustan Unilever Ltd.",
                          sectors: "Consumer Goods",
                          holdings: 0.8,
                        },
                        {
                          stockName: "ICICI Bank Ltd.",
                          sectors: "Banking",
                          holdings: -0.5,
                        },
                      ],
                      align: "left",
                      pagination: false,
                      templates: {
                        holdings: ({ cell }) => (
                          <NegativePositiveText
                            value={cell.getValue() as number}
                            renderValue={(value) => `${value.toFixed(2)}%`}
                          />
                        ),
                      },
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
