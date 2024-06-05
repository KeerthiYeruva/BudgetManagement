import { createStore } from "zustand";
import { useExpenseStore } from "./ExpenseStore";

interface CategoryStore {
  categories: Category[];
  addCategory: (category: Category) => void;
  deleteCategory: (id: number) => void;
  getCategoryExpenses: (category: string) => number;
}

const getInitialData = () => {
  const storedState = localStorage.getItem("appState");
  const appState = storedState ? JSON.parse(storedState) : {};
  return appState.categories || [];
};

export const useCategoryStore = createStore<CategoryStore>((set) => ({
  categories: getInitialData(),
  addCategory: (category) => {
    set((state) => {
      const newCategoryName = category.name.toLowerCase();
      const categoryExists = state.categories.some(
        (cat) => cat.name.toLowerCase() === newCategoryName
      );

      if (!categoryExists) {
        const updatedCategories = [...state.categories, category];
        localStorage.setItem(
          "appState",
          JSON.stringify({ ...state, categories: updatedCategories })
        );
        return { categories: updatedCategories };
      } else {
        return state;
      }
    });
  },
  deleteCategory: (id) => {
    set((state) => {
      const updatedCategories = state.categories.filter((cat) => cat.id !== id);
      localStorage.setItem(
        "appState",
        JSON.stringify({ ...state, categories: updatedCategories })
      );
      return { categories: updatedCategories };
    });
  },
  getCategoryExpenses: (category) => {
    return useExpenseStore
      .getState()
      .expenses.filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
  },
}));
