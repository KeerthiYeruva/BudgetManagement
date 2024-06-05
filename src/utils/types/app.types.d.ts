interface Data {
  user: User;
  expenses: Expense[];
  transactions: Transaction[];
  categories: Category[];
  goals: Goal[];
  budgets: Budgets;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  income?: number;
}

interface Expense {
  id: number;
  date: string; //need to change to Date
  category: string;
  amount: number;
  description: string;
}

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

interface Category {
  id: number;
  name: string;
}

interface Budgets {
  [category: string]: number;
}

interface Saving {
  amount: number;
  date: string; // need to change to Date
}
interface Goal {
  id: number;
  name: string;
  budget: number;
  savings?: Saving[];
}
