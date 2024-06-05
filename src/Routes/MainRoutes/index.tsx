import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("../../Pages/Dashboard"));
const Expenses = lazy(() => import("../../Pages/Expenses"));
const Reports = lazy(() => import("../../Pages/Reports"));
const Goals = lazy(() => import("../../Pages/Goals"));
const Budget = lazy(() => import("../../Pages/Budget"));
const AddExpense = lazy(() => import("../../components/Expenses/AddExpense"));
const ManageExpenses = lazy(
  () => import("../../components/Expenses/ManageExpenses")
);
const CategoryManagement = lazy(
  () => import("../../components/ManageCategories")
);
const ExpenseReportChart = lazy(
  () => import("../../components/Reports/ExpenseReports/ExpenseReportChart")
);
const ReportGenerator = lazy(
  () => import("../../components/Reports/ExpenseReports/ReportGenerator")
);
const ExpenseReportTable = lazy(
  () => import("../../components/Reports/ExpenseReports/ExpenseReportTable")
);
const SetGoal = lazy(() => import("../../components/Goals/Form"));
const GoalsList = lazy(() => import("../../components/Goals/ManageGoals"));
const SetBudget = lazy(() => import("../../components/Budgets/SetBudget"));
const ManageBudgets = lazy(
  () => import("../../components/Budgets/ManageBudget")
);
const EditProfile = lazy(() => import("../../components/EditProfile"));

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/edit-profile" element={<EditProfile />} />{" "}
        {/* Add the new route */}
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
