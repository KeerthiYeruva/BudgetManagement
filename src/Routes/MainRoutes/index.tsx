import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Expenses, Reports } from "../../Pages";
import AddExpense from "../../components/Expenses/AddExpense";
import ManageExpenses from "../../components/Expenses/ManageExpenses";
import CategoryManagement from "../../components/ManageCategories";
import {
  ExpenseReportChart,
  ReportGenerator,
  ExpenseReportTable,
} from "../../components/Reports/ExpenseReports";
import Goals from "../../Pages/Goals";
import SetGoal from "../../components/Goals/Form";
import GoalsList from "../../components/Goals/ManageGoals";
import SetBudget from "../../components/Budgets/SetBudget";
import Budget from "../../Pages/Budget";
import ManageBudgets from "../../components/Budgets/ManageBudget";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />}>
        <Route index element={<Navigate to="add-expense" replace />} />
        <Route path="add-expense" element={<AddExpense />} />
        <Route path="manage-expenses" element={<ManageExpenses />} />
        <Route path="add-category" element={<CategoryManagement />} />
      </Route>
      <Route path="/reports" element={<Reports />}>
        <Route index element={<Navigate to="chart" replace />} />
        <Route path="chart" element={<ExpenseReportChart />} />
        <Route path="table" element={<ExpenseReportTable />} />
        <Route path="generateReport" element={<ReportGenerator />} />
      </Route>
      <Route path="/goals" element={<Goals />}>
        <Route index element={<Navigate to="set" replace />} />
        <Route path="set" element={<SetGoal />} />
        <Route path="view" element={<GoalsList />} />
      </Route>
      <Route path="/budget" element={<Budget />}>
        <Route index element={<Navigate to="set-budget" replace />} />
        <Route path="set-budget" element={<SetBudget />} />
        <Route path="manage-budgets" element={<ManageBudgets />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
