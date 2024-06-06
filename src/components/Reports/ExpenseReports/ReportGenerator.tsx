import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  Snackbar,
} from "@mui/material";
import { useStore } from "zustand";
import { useExpenseStore, useGoalStore } from "../../../store";
import * as XLSX from "xlsx";

const ReportGenerator = () => {
  const [criteria, setCriteria] = useState<string>("category");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { expenses } = useStore(useExpenseStore);
  const { goals } = useStore(useGoalStore);

  const generateExpenseReport = () => {
    if (expenses.length === 0) {
      console.log("No expenses to generate report.");
      return;
    }

    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(expenses);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "Expenses_Report.xlsx");

    setSnackbarOpen(true); // Show snackbar after report generation
  };

  const generateGoalReport = () => {
    if (goals.length === 0) {
      console.log("No goals to generate report.");
      return;
    }

    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(goals);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Goals");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "Goals_Report.xlsx");

    setSnackbarOpen(true); // Show snackbar after report generation
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Expense Report</Typography>
        {expenses.length === 0 ? (
          <Typography>No expenses available to generate a report.</Typography>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                value={criteria}
                onChange={(e) => setCriteria(e.target.value as string)}
                fullWidth
                variant="outlined"
                label="Criteria"
              >
                <MenuItem value="category">Category</MenuItem>
                <MenuItem value="date">Date</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={generateExpenseReport}
              >
                Generate Expense Report
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Goals Report</Typography>
        {goals.length === 0 ? (
          <Typography>No goals available to generate a report.</Typography>
        ) : (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateGoalReport}
            >
              Generate Goal Report
            </Button>
          </Grid>
        )}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Report generated successfully"
      />
    </Grid>
  );
};

export default ReportGenerator;
