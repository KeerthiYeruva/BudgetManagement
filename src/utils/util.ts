import { v4 as uuidv4 } from "uuid";
import {
  useCategoryStore,
  useExpenseStore,
  useNotificationStore,
} from "../store";

// Utility functions
export const isValidExpense = (expense: Expense): boolean => {
  return expense.amount > 0;
};

export const handleInvalidExpense = (): void => {
  notifyError("Invalid expense data");
};

export const sortExpenses = (expenses: Expense[]): Expense[] => {
  return [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const isValidGoal = (goal: Goal): boolean => {
  return goal.name.trim() !== "" && goal.budget > 0;
};

export const handleInvalidGoal = (): void => {
  notifyError("Invalid goal data");
};

// Utility function to update goals with unique savings
export const updateGoals = (currentGoals: Goal[], newGoal: Goal): Goal[] => {
  const existingGoalIndex = currentGoals.findIndex((g) => g.id === newGoal.id);

  if (existingGoalIndex !== -1) {
    return currentGoals.map((goal) => {
      if (goal.id === newGoal.id) {
        const uniqueSavings = [...(goal.savings || [])];
        if (newGoal.savings) {
          newGoal.savings.forEach((newSaving) => {
            const existingSavingIndex = uniqueSavings.findIndex(
              (s) => s.date === newSaving.date
            );
            if (existingSavingIndex !== -1) {
              uniqueSavings[existingSavingIndex] = newSaving;
            } else {
              uniqueSavings.push(newSaving);
            }
          });
        }
        return { ...goal, ...newGoal, savings: uniqueSavings };
      }
      return goal;
    });
  } else {
    return [...currentGoals, newGoal];
  }
};

export const updateExpensesAndCategories = (goals: Goal[]): void => {
  const expenseStore = useExpenseStore.getState();
  const categoryStore = useCategoryStore.getState();

  goals.forEach((goal) => {
    const { name, savings } = goal;
    const categoryName = `savings_${name}`;

    let category = categoryStore.categories.find(
      (cat) => cat.name === categoryName
    );

    if (!category) {
      category = { id: uuidv4(), name: categoryName };
      categoryStore.addCategory(category);
    }

    if (savings) {
      savings.forEach((saving) => {
        const existingExpense = expenseStore.expenses.find(
          (expense) =>
            expense.date === saving.date && expense.category === categoryName
        );

        if (!existingExpense) {
          const expense = {
            id: uuidv4(),
            date: saving.date,
            category: categoryName,
            amount: saving.amount,
            description: `Savings towards ${name}`,
          };
          expenseStore.addExpense(expense);
        } else {
          expenseStore.updateExpense({
            ...existingExpense,
            amount: saving.amount,
          });
        }
      });
    }
  });
};

// Utility function to update session storage
export const updateSessionStorage = (key: string, value: any): void => {
  const currentState = JSON.parse(sessionStorage.getItem("appState") || "{}");
  const newState = { ...currentState, [key]: value };
  sessionStorage.setItem("appState", JSON.stringify(newState));
};

export const getSessionStorage = (key: string): any => {
  const currentState = JSON.parse(sessionStorage.getItem("appState") || "{}");
  return currentState[key];
};

// Utility function to notify success
export const notifySuccess = (message: string): void => {
  useNotificationStore.getState().addNotification(message, "success");
};

// Utility function to notify error
export const notifyError = (message: string): void => {
  useNotificationStore.getState().addNotification(message, "error");
};
