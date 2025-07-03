"use client";

import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
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
export const ReturnDetails = () => {
  return (
    <div className="bg-card/30 py-25">
      <div className="max-w-10/12 mx-auto">
        <div className="flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-5 justify-center items-center w-2/5 text-center">
              <TypographyH1>Returns</TypographyH1>
              <TypographyP className="text-secondary2">
                Track your investment growth with real-time returns.
              </TypographyP>
            </div>
          </div>

          {/* Content Section */}
          <div className="">
            <Tabs defaultValue="sip" className="flex flex-col gap-10">
              <div className="w-3/9 m-auto justify-center flex">
                <TabsList className="w-full h-15 rounded-full">
                  <TabsTrigger
                    value="lumpsum"
                    className="grow py-4 rounded-full"
                  >
                    Lumpsum
                  </TabsTrigger>
                  <TabsTrigger value="sip" className="grow py-4 rounded-full">
                    SIP
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="sip">
                <div>
                  <DataTable
                    {...{
                      columns: [
                        {
                          accessorKey: "time",
                          header: "Time",
                        },
                        {
                          accessorKey: "absReturns",
                          header: "Annualized Returns",
                        },
                        {
                          accessorKey: "cagr",
                          header: "CAGR",
                        },
                        {
                          accessorKey: "catAverage",
                          header: "Category Average",
                        },
                        {
                          accessorKey: "benchmark",
                          header: "Benchmark",
                        },
                      ],
                      data: [
                        {
                          time: "1 Month",
                          absReturns: 100,
                          cagr: 2.34,
                          catAverage: 5.67,
                          benchmark: 6.78,
                        },
                        {
                          time: "3 Months",
                          absReturns: 500,
                          cagr: 3.45,
                          catAverage: -2.34,
                          benchmark: 4.56,
                        },
                        {
                          time: "6 Months",
                          absReturns: 800,
                          cagr: 4.56,
                          catAverage: 8.9,
                          benchmark: 9.12,
                        },
                        {
                          time: "1 Year",
                          absReturns: 1200,
                          cagr: 5.67,
                          catAverage: 10.56,
                          benchmark: 11.23,
                        },

                        {
                          time: "3 Years",
                          absReturns: 10000,
                          cagr: 10.23,
                          catAverage: 14.89,
                          benchmark: 13.45,
                        },
                        {
                          time: "5 Years",
                          absReturns: 13000,
                          cagr: 15.67,
                          catAverage: -17.12,
                          benchmark: 16.78,
                        },
                        {
                          time: "10 Years",
                          absReturns: 15000,
                          cagr: 18.45,
                          catAverage: 20.34,
                          benchmark: 19.56,
                        },
                        {
                          time: "15 Years",
                          absReturns: 18000,
                          cagr: 20.12,
                          catAverage: -22.45,
                          benchmark: 21.67,
                        },
                        {
                          time: "20 Years",
                          absReturns: 20000,
                          cagr: 22.34,
                          catAverage: 25.67,
                          benchmark: 24.89,
                        },
                      ],
                      align: "center",
                      pagination: false,
                      templates: {
                        catAverage: ({ cell }) => (
                          <NegativePositiveText
                            value={cell.getValue() as number}
                            renderValue={(value) => `${value.toFixed(2)}%`}
                          />
                        ),
                        benchmark: ({ cell }) => (
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
              <TabsContent value="lumpsum">
                <div>
                  <DataTable
                    {...{
                      columns: [
                        {
                          accessorKey: "time",
                          header: "Time",
                        },
                        {
                          accessorKey: "absReturns",
                          header: "Annualized Returns",
                        },
                        {
                          accessorKey: "cagr",
                          header: "CAGR",
                        },
                        {
                          accessorKey: "catAverage",
                          header: "Category Average",
                        },
                        {
                          accessorKey: "benchmark",
                          header: "Benchmark",
                        },
                      ],
                      data: [
                        {
                          time: "1 Month",
                          absReturns: 100,
                          cagr: 2.34,
                          catAverage: 5.67,
                          benchmark: 6.78,
                        },
                        {
                          time: "3 Months",
                          absReturns: 500,
                          cagr: 3.45,
                          catAverage: -2.34,
                          benchmark: 4.56,
                        },
                        {
                          time: "6 Months",
                          absReturns: 800,
                          cagr: 4.56,
                          catAverage: 8.9,
                          benchmark: 9.12,
                        },
                        {
                          time: "1 Year",
                          absReturns: 1200,
                          cagr: 5.67,
                          catAverage: 10.56,
                          benchmark: 11.23,
                        },

                        {
                          time: "3 Years",
                          absReturns: 10000,
                          cagr: 10.23,
                          catAverage: 14.89,
                          benchmark: 13.45,
                        },
                        {
                          time: "5 Years",
                          absReturns: 13000,
                          cagr: 15.67,
                          catAverage: -17.12,
                          benchmark: 16.78,
                        },
                        {
                          time: "10 Years",
                          absReturns: 15000,
                          cagr: 18.45,
                          catAverage: 20.34,
                          benchmark: 19.56,
                        },
                        {
                          time: "15 Years",
                          absReturns: 18000,
                          cagr: 20.12,
                          catAverage: -22.45,
                          benchmark: 21.67,
                        },
                        {
                          time: "20 Years",
                          absReturns: 20000,
                          cagr: 22.34,
                          catAverage: 25.67,
                          benchmark: 24.89,
                        },
                      ],
                      align: "center",
                      pagination: false,
                      templates: {
                        catAverage: ({ cell }) => (
                          <NegativePositiveText
                            value={cell.getValue() as number}
                            renderValue={(value) => `${value.toFixed(2)}%`}
                          />
                        ),
                        benchmark: ({ cell }) => (
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

export default ReturnDetails;
