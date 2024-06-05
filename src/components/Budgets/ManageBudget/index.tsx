import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useStore } from "zustand";
import { useBudgetStore } from "../../../store";

const ManageBudgets: React.FC = () => {
  const { updateBudgets, budgets } = useStore(useBudgetStore);
  const [editedBudgets, setEditedBudgets] = useState<Budgets>(budgets);

  useEffect(() => {
    setEditedBudgets(budgets);
  }, [budgets]);

  const handleEditBudget = (category: string, value: number) => {
    setEditedBudgets((prevBudgets) => ({
      ...prevBudgets,
      [category]: value,
    }));
  };

  const handleSaveBudgets = () => {
    updateBudgets(editedBudgets);
  };

  return (
    <div>
      <Typography variant="h2">Manage Budgets</Typography>
      {Object.keys(editedBudgets).length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography variant="h6">No budgets available</Typography>
        </Box>
      ) : (
        <>
          {Object.entries(editedBudgets).map(([category, budget]) => (
            <div key={category} style={{ marginBottom: "1rem" }}>
              <TextField
                label={`${category} Budget`}
                type="number"
                value={budget}
                onChange={(e) =>
                  handleEditBudget(category, parseFloat(e.target.value))
                }
                fullWidth
              />
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveBudgets}
          >
            Save Budgets
          </Button>
        </>
      )}
    </div>
  );
};

export default ManageBudgets;
