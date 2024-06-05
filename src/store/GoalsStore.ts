import { createStore } from "zustand";
import {
  isValidGoal,
  updateLocalStorage,
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

const getInitialData = () => {
  const storedState = localStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.goals || [];
};

export const useGoalStore = createStore<GoalStore>((set) => ({
  goals: getInitialData(),
  addGoal: (goal) => {
    if (!isValidGoal(goal)) {
      handleInvalidGoal();
      return;
    }

    set((state) => {
      const updatedGoals = updateGoalsUtil(state.goals, goal);
      updateExpensesAndCategories(updatedGoals);
      updateLocalStorage("goals", updatedGoals);
      // notifySuccess("Goal added successfully");
      return { goals: updatedGoals };
    });
  },
  updateGoal: (goal) => {
    set((state) => {
      const updatedGoals = state.goals.map((g) =>
        g.id === goal.id ? goal : g
      );
      updateLocalStorage("goals", updatedGoals);
      // notifySuccess("Goal updated successfully");
      return { goals: updatedGoals };
    });
  },
  updateGoals: (goals) => {
    set(() => {
      updateLocalStorage("goals", goals);
      // notifySuccess("Goals updated successfully");
      return { goals };
    });
  },
  deleteGoal: (id) => {
    set((state) => {
      const updatedGoals = state.goals.filter((goal) => goal.id !== id);
      updateLocalStorage("goals", updatedGoals);
      notifySuccess("Goal deleted successfully");
      return { goals: updatedGoals };
    });
  },
}));
