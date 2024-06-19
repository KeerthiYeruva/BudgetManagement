import React, { useState } from "react";
import { useCategoryStore, useExpenseStore } from "../../../store";
import { useStore } from "zustand";
import { notifyError, notifySuccess } from "../../../utils/util";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

const AddExpense: React.FC = () => {
  const { addExpense } = useStore(useExpenseStore);
  const { addCategory, categories } = useStore(useCategoryStore);
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();

    if (!amount || isNaN(parseFloat(amount))) {
      alert("Please enter a valid amount.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const selectedDate = date.trim() !== "" ? date : currentDate;

    let selectedCategory = category;
    if (category === "new" && newCategory.trim() !== "") {
      const categoryExists = categories.some(
        (cat) => cat.name === newCategory.trim()
      );
      if (!categoryExists) {
        selectedCategory = newCategory.trim();
        addCategory({
          id: Math.floor(Math.random() * 1000),
          name: selectedCategory,
        });
      } else {
        notifyError("Category already exists");
        return;
      }
    }

    const newExpense: Expense = {
      id: Math.floor(Math.random() * 1000),
      date: new Date(selectedDate), // Convert string to Date
      category: selectedCategory,
      amount: parseFloat(amount),
      description,
    };
    addExpense(newExpense);

    notifySuccess("Expense added successfully");
    setDate(new Date().toISOString().split("T")[0]);
    setCategory("");
    setAmount("");
    setDescription("");
    setNewCategory("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <form onSubmit={handleSave}>
        <Typography variant="h4" component="h2" gutterBottom>
          Add Expense
        </Typography>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">
                <em>Select category...</em>
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.name}>
                  {cat.name}
                </MenuItem>
              ))}
              <MenuItem value="new">Add New Category</MenuItem>
            </Select>
          </FormControl>
          {category === "new" && (
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Enter new category..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          )}
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddExpense;
