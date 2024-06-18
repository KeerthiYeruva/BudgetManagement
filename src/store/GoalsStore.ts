import { createStore } from "zustand";
import {
  isValidGoal,
  updateSessionStorage,
  notifySuccess,
  handleInvalidGoal,
  updateGoals as updateGoalsUtil,
  updateExpensesAndCategories,
} from "../utils/util";

interface GoalStore {
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  updateGoal: (goal: Goal) => void;
  updateGoals: (goals: Goal[]) => void;
  deleteGoal: (id: number) => void;
}

const getInitialData = (): Goal[] => {
  const storedState = sessionStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.goals || [];
};

export const useGoalStore = createStore<GoalStore>((set) => ({
  goals: getInitialData(),
  addGoal: (goal: Goal) => {
    if (!isValidGoal(goal)) {
      handleInvalidGoal();
      return;
    }

    set((state) => {
      const updatedGoals = updateGoalsUtil(state.goals, goal);
      updateExpensesAndCategories(updatedGoals);
      updateSessionStorage("goals", updatedGoals);
      notifySuccess("Goal added successfully");
      return { goals: updatedGoals };
    });
  },
  updateGoal: (goal: Goal) => {
    set((state) => {
      const updatedGoals = state.goals.map((g) =>
        g.id === goal.id ? goal : g
      );
      updateExpensesAndCategories(updatedGoals);
      updateSessionStorage("goals", updatedGoals);
      notifySuccess("Goal updated successfully");
      return { goals: updatedGoals };
    });
  },
  updateGoals: (goals: Goal[]) => {
    set(() => {
      updateExpensesAndCategories(goals);
      updateSessionStorage("goals", goals);
      return { goals };
    });
  },
  deleteGoal: (id: number) => {
    set((state) => {
      const updatedGoals = state.goals.filter((goal) => goal.id !== id);
      updateSessionStorage("goals", updatedGoals);
      notifySuccess("Goal deleted successfully");
      return { goals: updatedGoals };
    });
  },
}));
