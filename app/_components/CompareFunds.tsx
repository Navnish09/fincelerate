import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import {
  ArrowRight,
  Calendar,
  Phone,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

// Column configuration for the main comparison table
const comparisonColumns: {
  key: string;
  header: string;
  align: "left" | "center" | "right";
  width?: string;
  sticky?: boolean;
  isAction?: boolean;
}[] = [
  {
    key: "fund",
    header: "Fund",
    align: "left",
    sticky: true,
  },
  {
    key: "launchDate",
    header: "Launch Date",
    align: "center",
  },
  {
    key: "aum",
    header: "AUM(in Crores)",
    align: "center",
  },
  {
    key: "expenseRatio",
    header: "Expense Ratio",
    align: "center",
  },
  {
    key: "sharpRatio",
    header: "Sharp Ratio",
    align: "center",
  },
  {
    key: "alpha",
    header: "Alpha",
    align: "center",
  },
  {
    key: "beta",
    header: "Beta",
    align: "center",
  },
  {
    key: "standardDeviation",
    header: "Standard Deviation",
    align: "center",
  },
  {
    key: "sortinoRatio",
    header: "Sortino Ratio",
    align: "center",
  },
] as const;

// Column configuration for the returns table
const returnsColumns = [
  {
    key: "fund",
    header: "Fund",
    align: "left" as const,
    width: "max-w-48",
    sticky: true,
  },
  {
    key: "oneYear",
    header: "1 Yr (%)",
    align: "center" as const,
    width: "min-w-20",
  },
  {
    key: "threeYear",
    header: "3 Yr (%)",
    align: "center" as const,
    width: "min-w-20",
  },
  {
    key: "fiveYear",
    header: "5 Yr (%)",
    align: "center" as const,
    width: "min-w-20",
  },
  {
    key: "sinceInception",
    header: "Since Inception (%)",
    align: "center" as const,
    width: "min-w-24",
  },
  {
    key: "action",
    header: "",
    align: "center" as const,
    width: "w-20",
    isAction: true,
  },
];

export default function FundComparison({ onClose }: { onClose: () => void }) {
  const fundData = [
    {
      fund: "ABSL Frontline Equity Fund (G)",
      launchDate: "05/03/2020",
      aum: "8,528.35",
      expenseRatio: "1.89",
      sharpRatio: "0.48",
      alpha: "8.77",
      beta: "1.4",
      standardDeviation: "7.67",
      sortinoRatio: "17.89",
    },
    {
      fund: "SBI Long Term Equity Fund (G)",
      launchDate: "05/03/2020",
      aum: "8,528.35",
      expenseRatio: "1.89",
      sharpRatio: "0.48",
      alpha: "8.77",
      beta: "1.4",
      standardDeviation: "7.67",
      sortinoRatio: "17.89",
    },
    {
      fund: "ICICI Pru Value Discovery Fund (G)",
      launchDate: "05/03/2020",
      aum: "8,528.35",
      expenseRatio: "1.89",
      sharpRatio: "0.48",
      alpha: "8.77",
      beta: "1.4",
      standardDeviation: "7.67",
      sortinoRatio: "17.89",
    },
    {
      fund: "Nippon India Large Cap Fund (G)",
      launchDate: "05/03/2020",
      aum: "8,528.35",
      expenseRatio: "1.89",
      sharpRatio: "0.48",
      alpha: "8.77",
      beta: "1.4",
      standardDeviation: "7.67",
      sortinoRatio: "17.89",
    },
  ];

  const returnsData = [
    {
      fund: "ABSL Frontline Equity Fund (G)",
      oneYear: "3.98",
      threeYear: "18.35",
      fiveYear: "26.8",
      sinceInception: "18.20",
      isBenchmark: false,
      action: "good",
    },
    {
      fund: "SBI Long Term Equity Fund (G)",
      oneYear: "3.98",
      threeYear: "18.35",
      fiveYear: "26.8",
      sinceInception: "18.20",
      isBenchmark: false,
      action: "good",
    },
    {
      fund: "ICICI Pru Value Discovery Fund (G)",
      oneYear: "3.98",
      threeYear: "18.35",
      fiveYear: "26.8",
      sinceInception: "18.20",
      isBenchmark: false,
      action: "good",
    },
    {
      fund: "Nippon India Large Cap Fund (G)",
      oneYear: "3.98",
      threeYear: "18.35",
      fiveYear: "26.8",
      sinceInception: "18.20",
      isBenchmark: false,
      action: "good",
    },
    {
      fund: "Benchmark",
      oneYear: "3.98",
      threeYear: "18.35",
      fiveYear: "26.8",
      sinceInception: "18.20",
      isBenchmark: true,
      action: null,
    },
    {
      fund: "Category Average",
      oneYear: "3.74",
      threeYear: "17.5",
      fiveYear: "24.2",
      sinceInception: "16.89",
      isBenchmark: true,
      action: null,
    },
  ];

  const renderTableHeader = (columns: typeof comparisonColumns) => (
    <TableHeader>
      <TableRow className="border-slate-900 hover:bg-slate-950/50">
        {columns.map((column) => (
          <TableHead
            key={column.key}
            className={`text-helper font-medium ${
              column.align === "center"
                ? "text-center"
                : column.align === "right"
                ? "text-right"
                : "text-left"
            } ${column.width || ""}`}
          >
            {column.header.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < column.header.split("\n").length - 1 && <br />}
              </span>
            ))}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );

  const renderTableCell = (
    data: Record<string, string | boolean | null>,
    column: (typeof comparisonColumns)[0],
    rowIndex: number,
    isReturnsTable = false
  ) => {
    const value = data[column.key];
    const cellClass = `${
      column.align === "center"
        ? "text-center"
        : column.align === "right"
        ? "text-right"
        : "text-left"
    } ${column.width || ""}`;

    // Handle special cases
    if (column.key === "fund") {
      return (
        <TableCell
          key={column.key}
          className={`text-white font-medium py-5 ${cellClass}`}
        >
          {value}
        </TableCell>
      );
    }

    if (column.key === "action" && isReturnsTable) {
      return (
        <TableCell key={column.key} className={cellClass}>
          {data.action === "good" && (
            <Badge
              variant="outline"
              className="border-2 border-green-500/30 p-2 rounded-full cursor-pointer hover:bg-green-500/10 transition-colors"
            >
              Invest <ArrowRight />
            </Badge>
          )}
        </TableCell>
      );
    }

    return (
      <TableCell key={column.key} className={`text-slate-300 ${cellClass}`}>
        {value}
      </TableCell>
    );
  };

  const renderTable = (
    data: Record<string, string | boolean | null>[],
    columns: typeof comparisonColumns,
    isReturnsTable = false
  ) => (
    <div className="overflow-x-auto">
      <Table>
        {renderTableHeader(columns)}
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={`border-cyan-500/20 hover:bg-slate-800/30 ${
                isReturnsTable && row.isBenchmark ? "bg-purple-900/20" : ""
              }`}
            >
              {columns.map((column) =>
                renderTableCell(row, column, index, isReturnsTable)
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="min-h-screen text-white pt-30">
      {/* <div
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
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto py-10 px-5 space-y-5">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-end">
            <div
              className="w-6 h-6 bg-secondary2 rounded-full flex items-center justify-center"
              onClick={onClose}
            >
              <span className="text-secondary-foreground text-xs font-bold cursor-pointer">
                <X size={18} />
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Your Fund Comparison is Ready
          </h1>

          <TypographyP className="text-secondary2 max-w-2xl mx-auto">
            You&apos;ve selected these funds for comparison. Analyze their
            performance, risks, and returns to make an informed investment
            decision.
          </TypographyP>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span className="text-slate-300">Date as on:</span>
              <span className="text-helper font-medium">13-03-2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 " />
              <span className="text-slate-300">Category:</span>
              <span className="text-helper font-medium">Large Cap</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 " />
              <span className="text-slate-300">Option:</span>
              <span className="text-helper font-medium">Growth</span>
            </div>
          </div>
        </div>

        {/* Main Comparison Table */}
        <Card className="bg-slate-900/30 border-cyan-500/30">
          <CardContent className="p-0">
            {renderTable(fundData, comparisonColumns)}
          </CardContent>
        </Card>

        {/* Returns Section */}
        <div className="space-y-6 mt-10 md:mt-20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-white">Returns</h2>
            <TypographyP className="text-secondary2 max-w-4xl mx-auto">
              Track the historical performance of your selected funds across
              different time periods. Compare annualized returns over 1, 3, and
              5 years, along with performance since inception. Use this data to
              align your investments with your financial goals.
            </TypographyP>
          </div>

          <Card className="bg-slate-900/30 border-cyan-500/30">
            <CardContent className="p-0">
              {renderTable(returnsData, returnsColumns, true)}
            </CardContent>
          </Card>
        </div>
        <div className="bg-primary/35 py-5 px-10 rounded-sm">
          <div className="flex flex-col gap-5 items-center">
            <TypographyH4>
              Still Confused? Connect with our Experts
            </TypographyH4>
            <Button variant={"secondary2"} className="rounded-full">
              <Phone />
              Book An Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
