import React, { useState, useMemo } from "react";
import {
  CircularProgress,
  Button,
  TextField,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useStore } from "zustand";
import { useGoalStore } from "../../../store";

const ManageGoals: React.FC = () => {
  const { addGoal, deleteGoal, goals } = useStore(useGoalStore);

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [goalName, setGoalName] = useState("");
  const [goalBudget, setGoalBudget] = useState("");
  const [savingAmount, setSavingAmount] = useState("");
  const [savingDate, setSavingDate] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);

  const calculateTotalSaving = useMemo(
    () =>
      (goal: Goal): number => {
        if (goal?.savings && goal?.savings.length > 0) {
          return goal.savings.reduce(
            (total, saving) => total + saving.amount,
            0
          );
        }
        return 0;
      },
    []
  );

  const calculateProgress = useMemo(
    () =>
      (goal: Goal): number => {
        const totalSaving = calculateTotalSaving(goal);
        return (totalSaving / goal.budget) * 100;
      },
    [calculateTotalSaving]
  );

  const handleSelectGoal = (goal: Goal) => {
    setSelectedGoal(goal);
    setGoalName(goal.name);
    setGoalBudget(goal.budget.toString());
    setSavingAmount("");
    setSavingDate("");
    setOpenEditModal(true);
  };

  const handleSaveChanges = () => {
    if (selectedGoal) {
      const updatedGoal: Goal = {
        ...selectedGoal,
        name: goalName,
        budget: parseFloat(goalBudget),
        savings: [
          ...(selectedGoal.savings || []).filter(
            (s) => s.date.toISOString().split("T")[0] !== savingDate
          ),
          {
            date: new Date(savingDate), // Parse string to Date
            amount: parseFloat(savingAmount),
          },
        ],
      };
      addGoal(updatedGoal);
      setSelectedGoal(null);
      setGoalName("");
      setGoalBudget("");
      setSavingAmount("");
      setSavingDate("");
      setOpenEditModal(false);
    }
  };

  const handleCancelEdit = () => {
    setSelectedGoal(null);
    setGoalName("");
    setGoalBudget("");
    setSavingAmount("");
    setSavingDate("");
    setOpenEditModal(false);
  };

  return (
    <Grid container spacing={4} mt={4}>
      <Grid item xs={12}>
        <Typography variant="h2" mb={4}>
          Goals
        </Typography>
      </Grid>
      {goals.length === 0 ? (
        <Box textAlign="center" mt={4}>
          <Typography variant="h6">No goals available</Typography>
        </Box>
      ) : (
        goals.map((goal) => (
          <Grid item key={goal.id} xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h5" mb={2}>
                  {goal.name}
                </Typography>
                <Typography variant="body2" component="p" mb={1}>
                  Budget: ${goal.budget}
                </Typography>
                <Typography variant="body2" component="p" mb={1}>
                  Total Saving: ${calculateTotalSaving(goal)}
                </Typography>
                <CircularProgress
                  variant="determinate"
                  value={calculateProgress(goal)}
                />
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleSelectGoal(goal)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteGoal(goal.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
      <Dialog open={openEditModal} onClose={handleCancelEdit}>
        <DialogTitle>Edit Goal</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Goal Name"
              fullWidth
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
            />
          </Box>
          <TextField
            label="Budget"
            fullWidth
            type="number"
            value={goalBudget}
            onChange={(e) => setGoalBudget(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Saving Amount"
            fullWidth
            type="number"
            value={savingAmount}
            onChange={(e) => setSavingAmount(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Saving Date"
            fullWidth
            type="date"
            value={savingDate}
            onChange={(e) => setSavingDate(e.target.value)}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
          <Button variant="contained" onClick={handleCancelEdit}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ManageGoals;
