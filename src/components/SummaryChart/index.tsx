import React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

interface SummaryChartProps {
  data: { label: string; value: number }[];
}

const SummaryChart: React.FC<SummaryChartProps> = ({ data }) => {
  return (
    <div>
      <h2>Summary Pie Chart</h2>
      <Stack direction="row">
        <PieChart
          series={[
            {
              paddingAngle: 5,
              innerRadius: 60,
              outerRadius: 80,
              data,
            },
          ]}
          margin={{ right: 5 }}
          width={200}
          height={200}
          legend={{ hidden: true }}
        />
      </Stack>
    </div>
  );
};

export default SummaryChart;
