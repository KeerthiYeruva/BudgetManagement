import React, { useState } from "react";
import { useStore } from "zustand";
import { useExpenseStore } from "../../../store";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ExpenseReportTable: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("date");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [filterByCategory, setFilterByCategory] = useState<string>("All");
  const { expenses } = useStore(useExpenseStore);

  let filteredExpenses = expenses;
  if (filterByCategory !== "All") {
    filteredExpenses = expenses.filter(
      (expense) => expense.category === filterByCategory
    );
  }

  // Sorting logic
  if (sortBy === "date") {
    if (sortOrder === "asc") {
      filteredExpenses.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else {
      filteredExpenses.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
  } else if (sortBy === "amount") {
    if (sortOrder === "asc") {
      filteredExpenses.sort((a, b) => a.amount - b.amount);
    } else {
      filteredExpenses.sort((a, b) => b.amount - a.amount);
    }
  }

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Expense Report Table
      </Typography>
      {expenses.length === 0 ? (
        <Typography>No expenses available to display.</Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
            <FormControl>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Sort Order</InputLabel>
              <Select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Filter By Category</InputLabel>
              <Select
                value={filterByCategory}
                onChange={(e) => setFilterByCategory(e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                {Array.from(
                  new Set(expenses.map((expense) => expense.category))
                ).map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredExpenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>${expense.amount}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default ExpenseReportTable;
