import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useExpenseStore } from "../../../store";
import { useStore } from "zustand";

interface ExpenseProps {
  expense: Expense;
}

const ExpenseListItem: React.FC<ExpenseProps> = ({ expense }) => {
  const { deleteExpense } = useStore(useExpenseStore);

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <TableRow>
      <TableCell>{expense.date}</TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell>${expense.amount}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const ManageExpenses: React.FC = () => {
  const expenses = useStore(useExpenseStore, (state) => state.expenses);

  return (
    <div>
      <h2>Manage Expenses</h2>
      {expenses.length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography variant="h6">No expenses available</Typography>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense) => (
                <ExpenseListItem key={expense.id} expense={expense} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ManageExpenses;
