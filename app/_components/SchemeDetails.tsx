"use client";

import { Card, CardContent } from "@/components/ui/card";
import EChart from "@/components/ui/chart";
import {
  TypographyH1,
  TypographyP,
  TypographySmall,
} from "@/components/ui/typography";
import { graphic } from "echarts/core";

export const SchemDetails = () => {
  return (
    <div className="py-16 md:py-25">
      <div className="max-w-10/12 mx-auto">
        <div className="flex flex-col gap-0 md:gap-10">
          {/* Header Section */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 justify-center items-center md:w-2/5 text-center">
              <TypographyH1>Scheme Details</TypographyH1>
              <TypographyP className="text-secondary2">
                Compare key fund metrics, including performance, risks and
                returns, to make informed investment decisions with clarity and
                confidence.
              </TypographyP>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="md:grow h-[500px] md:h-[600px] w-full md:w-auto">
              <EChart
                option={{
                  legend: {
                    // data: ["Fund", "Benchmark", "Caregory Average"],
                    bottom: 0,
                    itemGap: 20,
                    textStyle: {
                      color: "#fff",
                      fontSize: 12,
                    },
                  },
                  tooltip: {
                    trigger: "axis",
                    axisPointer: {
                      type: "line",
                    },
                  },
                  xAxis: {
                    type: "category",
                    axisLabel: {
                      show: false,
                    },
                  },
                  yAxis: {
                    max: 100,
                    type: "value",
                    interval: 10,

                    axisLabel: {
                      formatter: "{value}%",
                    },
                    splitLine: {
                      show: true,
                      lineStyle: {
                        color: "#111",
                      },
                    },
                    axisTick: {
                      show: true,
                    },
                  },
                  series: [
                    {
                      name: "Fund",
                      type: "bar",
                      barWidth: 70,
                      roundCap: true,
                      label: {
                        show: true,
                        position: "top",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        formatter: (params) => {
                          const value = params.value?.toString().split(",")[1];
                          return `${value}%`;
                        },
                      },
                      itemStyle: {
                        borderRadius: [3, 3, 0, 0],
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#00A3D4",
                          },
                          {
                            offset: 1,
                            color: "#0066FF",
                          },
                        ]),
                      },
                      stack: "Gain",
                      datasetIndex: 0,
                    },
                    {
                      name: "Benchmark",
                      type: "bar",
                      barWidth: 70,
                      roundCap: true,
                      label: {
                        show: true,
                        position: "top",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        formatter: (params) => {
                          const value = params.value?.toString().split(",")[1];
                          return `${value}%`;
                        },
                      },
                      itemStyle: {
                        borderRadius: [3, 3, 0, 0],
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#BB86FC",
                          },
                          {
                            offset: 1,
                            color: "#2F0151",
                          },
                        ]),
                      },
                      stack: "Gain",
                      color: "hsla(267, 95%, 76%, 1)",
                      datasetIndex: 1,
                    },
                    {
                      name: "Caregory Average",
                      type: "bar",
                      barWidth: 70,
                      roundCap: true,
                      label: {
                        show: true,
                        position: "top",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#fff",
                        formatter: (params) => {
                          const value = params.value?.toString().split(",")[1];
                          return `${value}%`;
                        },
                      },
                      itemStyle: {
                        borderRadius: [3, 3, 0, 0],
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#FFE0B5",
                          },
                          {
                            offset: 1,
                            color: "#818100",
                          },
                        ]),
                      },
                      stack: "Gain",
                      color: "hsla(35, 100%, 85%, 1)",
                      datasetIndex: 2,
                    },
                  ],
                }}
                dataset={[
                  {
                    source: [["Fund", 21]],
                  },
                  {
                    source: [["Benchmark", 80]],
                  },
                  {
                    source: [["Caregory Average", 40]],
                  },
                ]}
              />
            </div>
            <div className="w-full md:w-auto basis-2/5">
              <Card className="border-none">
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Exense Ratio :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      <span className="text-success">1.2%</span>
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Exit Load :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      <span className="text-success">1.0%</span> if withdrawn
                      before 365 days
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      AUM (Fund Size) :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      <span className="text-success">₹37,319 Crs</span>
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Type of Fund :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      Open Ended(no locking)
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Age :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      10 yrs 10 m Since Jan 01, 2013
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 border-b py-4 md:py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Fund Manager :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      Deependra Sahu
                    </TypographySmall>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-5 py-6">
                    <TypographySmall className="md:basis-1/4 text-muted-foreground">
                      Bench Mark :
                    </TypographySmall>
                    <TypographySmall className="font-bold">
                      Nifty Large Cap 250 TRI
                    </TypographySmall>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemDetails;
