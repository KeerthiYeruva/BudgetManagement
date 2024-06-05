import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useStore } from "zustand";
import { useCategoryStore } from "../../store";

const ManageCategories: React.FC = () => {
  const { addCategory, deleteCategory, categories } =
    useStore(useCategoryStore);
  const [newCategory, setNewCategory] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddCategory = (event: FormEvent) => {
    event.preventDefault();
    if (newCategory.trim() === "") {
      setError("Category name cannot be empty");
      return;
    }
    const category: Category = {
      id: uuidv4(),
      name: newCategory.trim(),
    };
    addCategory(category);
    setNewCategory("");
    setError(null);
  };

  const handleDeleteCategory = (id: number) => {
    deleteCategory(id);
  };

  return (
    <div className="container-fluid d-flex justify-content-center vh-100">
      <div>
        <Typography variant="h4" gutterBottom>
          Manage Categories
        </Typography>
        <form onSubmit={handleAddCategory}>
          <div className="mb-3">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              fullWidth
              placeholder="Enter category name"
            />
            {error && (
              <Typography variant="body2" color="error" mt={2}>
                {error}
              </Typography>
            )}
          </div>
          <Box mb={3} mt={3}>
            <Button type="submit" variant="contained" color="primary">
              Add Category
            </Button>
          </Box>
        </form>
        {categories.length === 0 ? (
          <Box textAlign="center" mt={4}>
            <Typography variant="h6">No categories available</Typography>
          </Box>
        ) : (
          <List>
            {categories.map((category: Category) => (
              <ListItem key={category.id}>
                <ListItemText primary={category.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

export default ManageCategories;
