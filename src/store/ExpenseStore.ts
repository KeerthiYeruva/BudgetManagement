import { createStore } from "zustand";
import {
  isValidExpense,
  handleInvalidExpense,
  sortExpenses,
  updateSessionStorage,
  notifySuccess,
} from "../utils/util";
import { useGoalStore } from "./GoalsStore";

// Define the ExpenseStore interface
interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
}

const getInitialData = (): Expense[] => {
  const storedState = sessionStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.expenses || [];
};

export const useExpenseStore = createStore<ExpenseStore>((set) => ({
  expenses: getInitialData(),
  addExpense: (expense: Expense) => {
    if (!isValidExpense(expense)) {
      handleInvalidExpense();
      return;
    }

    set((state) => {
      const updatedExpenses = [...state.expenses, expense];
      const sortedExpenses = sortExpenses(updatedExpenses);
      updateSessionStorage("expenses", sortedExpenses);

      // Notify success
      notifySuccess("Expense added successfully");

      return { expenses: sortedExpenses };
    });
  },
  updateExpense: (expense: Expense) => {
    set((state) => {
      const updatedExpenses = state.expenses.map((exp) =>
        exp.id === expense.id ? expense : exp
      );
      updateSessionStorage("expenses", updatedExpenses);

      // Notify success
      notifySuccess("Expense updated successfully");

      return { expenses: updatedExpenses };
    });
  },
  deleteExpense: (id: number) => {
    set((state) => {
      const expenseToDelete = state.expenses.find(
        (expense) => expense.id === id
      );
      if (!expenseToDelete) return state;

      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== id
      );

      // Update related goal
      const goalStore = useGoalStore.getState();
      const updatedGoals = goalStore.goals.map((goal) => {
        if (expenseToDelete.category === `savings_${goal.name}`) {
          const updatedSavings = goal.savings
            ? goal.savings.filter(
                (saving) =>
                  !(
                    saving.date === expenseToDelete.date &&
                    saving.amount === expenseToDelete.amount
                  )
              )
            : [];
          return { ...goal, savings: updatedSavings };
        }
        return goal;
      });

      // Save the updated goals back to the GoalStore
      useGoalStore.getState().updateGoals(updatedGoals);

      updateSessionStorage("expenses", updatedExpenses);

      // Notify success
      notifySuccess("Expense deleted successfully");

      return { expenses: updatedExpenses };
    });
  },
}));
