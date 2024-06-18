import { createStore } from "zustand";
import { useExpenseStore } from "./ExpenseStore";
import { notifyError } from "../utils/util";

interface CategoryStore {
  categories: Category[];
  addCategory: (category: Category) => void;
  deleteCategory: (id: number) => void;
  getCategoryExpenses: (category: string) => number;
}

const getInitialData = (): Category[] => {
  const storedState = sessionStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.categories || [];
};

export const useCategoryStore = createStore<CategoryStore>((set) => ({
  categories: getInitialData(),
  addCategory: (category: Category) => {
    set((state) => {
      const newCategoryName = category.name.toLowerCase();
      const categoryExists = state.categories.some(
        (cat) => cat.name.toLowerCase() === newCategoryName
      );

      if (!categoryExists) {
        const updatedCategories = [...state.categories, category];
        sessionStorage.setItem(
          "appState",
          JSON.stringify({ ...state, categories: updatedCategories })
        );
        return { categories: updatedCategories };
      } else {
        notifyError("Category already exists");
        return state;
      }
    });
  },
  deleteCategory: (id: number) => {
    set((state) => {
      const updatedCategories = state.categories.filter((cat) => cat.id !== id);
      sessionStorage.setItem(
        "appState",
        JSON.stringify({ ...state, categories: updatedCategories })
      );
      return { categories: updatedCategories };
    });
  },
  getCategoryExpenses: (category: string) => {
    return useExpenseStore
      .getState()
      .expenses.filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  },
}));
