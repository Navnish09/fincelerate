import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DatasetComponentOption } from "echarts/components";
import type { EChartsOption } from "echarts/types/dist/shared";
import EChart from "@/components/ui/chart";
import { LoadingSpinner } from "@/components/ui/loader";

type Props = {
  heading: string;
  loading?: boolean;
  dataset: DatasetComponentOption[];
  options: EChartsOption;
  height?: number;
};

// For example, a pie chart configuration could look like this:
// {
//       color: [
//         "hsla(46, 98%, 76%, 1)",
//         "hsla(16, 100%, 62%, 1)",
//         "hsla(194, 91%, 70%, 1)",
//       ],
//       tooltip: {
//         trigger: "item",
//       },
//       legend: {
//         orient: "horizontal",
//         left: "center",
//         textStyle: {
//           color: "#fff",
//           fontSize: 14,
//           fontWeight: "bold",
//         },
//         itemGap: 30,
//       },
//       series: [
//         {
//           name: "Portfolio",
//           type: "pie",
//           radius: ["50%", "70%"],
//           avoidLabelOverlap: false,
//           padAngle: 2,
//           itemStyle: {
//             borderRadius: 8,
//           },
//           label: {
//             show: false,
//             fontSize: 16,
//             position: "center",
//             color: "#fff",
//             fontWeight: "bold",
//             formatter: "{b} {d}%",
//           },
//           emphasis: {
//             // disabled: true,
//             // focus: "self",
//             label: {
//               show: true,
//               fontSize: 14,
//               color: "#fff",
//               fontWeight: "bold",
//               formatter: "{b} {d}%",
//             },
//           },
//           labelLine: {
//             show: false,
//           },
//         },
//       ],
//     }

export const BasicChartCard = ({
  heading,
  options,
  dataset,
  height = 500,
  loading,
}: Props) => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col flex-grow w-full max-w-full overflow-hidden">
      <Card className="relative z-10">
        <CardHeader>
          <h5 className="w-4/12 whitespace-nowrap">{heading}</h5>
        </CardHeader>

        <CardContent ref={parentRef}>
          <div style={{ height }}>
            {loading ? (
              <div className="flex justify-center items-center h-full w-full">
                <LoadingSpinner />
              </div>
            ) : (
              <EChart
                option={options}
                dataset={dataset}
                parentRef={parentRef.current || window}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicChartCard;
