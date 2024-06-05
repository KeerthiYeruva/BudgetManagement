import { createStore } from "zustand";
import { notifySuccess, updateLocalStorage } from "../utils/util";

// Define the BudgetStore interface
interface BudgetStoreProp {
  budgets: Budgets;
  updateBudgets: (budgets: Budgets) => void;
  // getBudgets: () => Budgets;
}

const getInitialData = () => {
  const storedState = localStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.budgets || {};
};

// Create the budget store
export const useBudgetStore = createStore<BudgetStoreProp>((set) => ({
  budgets: getInitialData(),
  updateBudgets: (budgets) => {
    set({ budgets });
    updateLocalStorage("budgets", budgets);
    notifySuccess("Budgets updated successfully");
  },
  // getBudgets: () => useBudgetStore.getState().budgets,
}));
