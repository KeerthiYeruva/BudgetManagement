import React, { useState } from "react";
import { useStore } from "zustand";
import { useGoalStore, useNotificationStore } from "../../../store";
import { Button, TextField, Typography, Grid } from "@mui/material";
import { notifySuccess } from "../../../utils/util";

const SetGoal: React.FC = () => {
  const { addGoal } = useStore(useGoalStore);
  const { addNotification } = useStore(useNotificationStore);
  const [goalName, setGoalName] = useState("");
  const [goalBudget, setGoalBudget] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const budget = parseFloat(goalBudget);

    if (goalName.trim() === "" || isNaN(budget) || budget <= 0) {
      addNotification("Invalid goal data", "error");
      return;
    }

    const newGoal = {
      id: Date.now(),
      name: goalName,
      budget: budget,
    };

    addGoal(newGoal);
    notifySuccess("Goal added successfully");
    setGoalName("");
    setGoalBudget("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Set Goal</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="goalNameInput"
            label="Goal Name"
            variant="outlined"
            fullWidth
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            placeholder="Enter goal name"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="goalBudgetInput"
            label="Budget"
            variant="outlined"
            fullWidth
            type="number"
            value={goalBudget}
            onChange={(e) => setGoalBudget(e.target.value)}
            placeholder="Enter budget"
            required
            inputProps={{ min: "0.01", step: "0.01" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Set Goal
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SetGoal;
