import React, { useState } from "react";
import { BarChart, axisClasses } from "@mui/x-charts";
import { Select, MenuItem, Typography } from "@mui/material";
import moment from "moment";
import { useStore } from "zustand";
import { useExpenseStore } from "../../../store";

const ExpensesBarChart: React.FC = () => {
  const { expenses } = useStore(useExpenseStore);
  const [selectedInterval, setSelectedInterval] = useState<string>("weekly");

  const formatDate = (dateString: string) => {
    const date = moment(dateString);
    if (selectedInterval === "weekly") {
      const weekStart = moment(date).startOf("isoWeek");
      return `${weekStart.format("MMM DD")}`;
    } else if (selectedInterval === "monthly") {
      return date.format("MMM YYYY");
    } else if (selectedInterval === "yearly") {
      return date.format("YYYY");
    }
    return dateString;
  };

  const aggregatedExpenses: { [key: string]: number } = {};
  expenses.forEach((expense) => {
    const formattedDate = formatDate(expense.date);
    if (aggregatedExpenses[formattedDate]) {
      aggregatedExpenses[formattedDate] += expense.amount;
    } else {
      aggregatedExpenses[formattedDate] = expense.amount;
    }
  });

  const dataset = Object.entries(aggregatedExpenses).map(([date, amount]) => ({
    date,
    amount,
  }));

  // Rest of the component
  const chartSettings = {
    yAxis: [
      {
        label: "Amount",
      },
    ],
    width: 800,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };

  const valueFormatter = (value: number | null) => `$${value || 0}`;

  const handleIntervalChange = (selectedInterval: string) => {
    setSelectedInterval(selectedInterval);
  };

  return (
    <div>
      <Select
        value={selectedInterval}
        onChange={(e) => handleIntervalChange(e.target.value)}
        className="form-select mt-3"
      >
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
        <MenuItem value="yearly">Yearly</MenuItem>
      </Select>
      {expenses.length === 0 ? (
        <Typography>No expenses available to display.</Typography>
      ) : (
        <div className="d-flex justify-content-center">
          <BarChart
            dataset={dataset}
            borderRadius={10}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "date",
                colorMap: {
                  type: "ordinal",
                  colors: ["yellow", "orange"],
                },
              },
            ]}
            series={[
              {
                dataKey: "amount",
                label: "Amount",
                valueFormatter,
                color: "yellow",
              },
            ]}
            {...chartSettings}
          />
        </div>
      )}
    </div>
  );
};

export default ExpensesBarChart;
