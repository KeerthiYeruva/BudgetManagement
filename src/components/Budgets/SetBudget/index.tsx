import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Button,
  Typography,
  InputLabel,
} from "@mui/material";
import { useBudgetStore, useCategoryStore } from "../../../store";
import { useStore } from "zustand";

const SetBudget: React.FC = () => {
  const { budgets, updateBudgets } = useStore(useBudgetStore);
  const { categories } = useStore(useCategoryStore);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoryBudget, setCategoryBudget] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSetBudget = () => {
    if (!selectedCategory) {
      setError("Please select a category.");
      return;
    }
    if (!categoryBudget || isNaN(Number(categoryBudget))) {
      setError("Please enter a valid budget.");
      return;
    }
    const updatedBudgets = {
      ...budgets,
      [selectedCategory]: parseFloat(categoryBudget),
    };
    updateBudgets(updatedBudgets);
    setSelectedCategory("");
    setCategoryBudget("");
    setError("");
  };

  return (
    <div>
      <Typography variant="h2">Set Budgets</Typography>
      {error && <div className="alert alert-danger">{error}</div>}
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel id="categoryNameInputLabel">Select Category:</InputLabel>
        <Select
          labelId="categoryNameInputLabel"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as string)}
        >
          <MenuItem value="">Select a category</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Budget"
        type="number"
        value={categoryBudget}
        onChange={(e) => setCategoryBudget(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Button variant="contained" color="primary" onClick={handleSetBudget}>
        Set Budget
      </Button>
    </div>
  );
};

export default SetBudget;
