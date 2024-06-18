import { createStore } from "zustand";
import { notifySuccess, updateSessionStorage } from "../utils/util";

// Define the BudgetStore interface
interface BudgetStoreProp {
  budgets: Budgets;
  updateBudgets: (budgets: Budgets) => void;
}

const getInitialData = (): Budgets => {
  const storedState = sessionStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.budgets || {};
};

// Create the budget store
export const useBudgetStore = createStore<BudgetStoreProp>((set) => ({
  budgets: getInitialData(),
  updateBudgets: (budgets: Budgets) => {
    set({ budgets });
    updateSessionStorage("budgets", budgets);
    notifySuccess("Budgets updated successfully");
  },
}));
