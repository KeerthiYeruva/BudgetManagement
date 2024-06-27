import React, { useEffect, useState, useMemo } from "react";
import ExpensesByCategory from "../../components/ExpensesByCategory";
import RecentTransactions from "../../components/RecentTransactions";
import SummaryChart from "../../components/SummaryChart";
import { useExpenseStore, useUserProfileStore } from "../../store";
import InfoCard from "../../components/InfoCard";
import { useStore } from "zustand";
import { Grid, Typography, Alert, Container, Box } from "@mui/material";
import "./dashboard.scss";

const calculateAnnualIncome = (income: number, period: string): number => {
  switch (period) {
    case "weekly":
      return income * 52;
    case "monthly":
      return income * 12;
    case "yearly":
      return income;
    default:
      return income;
  }
};

const groupExpensesByCategory = (
  expenses: { category: string; amount: number }[]
) => {
  return expenses.reduce(
    (acc, expense) => {
      const categoryIndex = acc.findIndex(
        (item) => item.label.toLowerCase() === expense.category.toLowerCase()
      );
      if (categoryIndex !== -1) {
        acc[categoryIndex].value += expense.amount;
      } else {
        acc.push({ label: expense.category, value: expense.amount });
      }
      return acc;
    },
    [] as { label: string; value: number }[]
  );
};

const Dashboard: React.FC = () => {
  const { expenses } = useStore(useExpenseStore);
  const { user } = useStore(useUserProfileStore);
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(false);

  useEffect(() => {
    const firstTime = !sessionStorage.getItem("hasLoggedInBefore");
    setIsFirstTimeLogin(firstTime);
    if (firstTime) {
      sessionStorage.setItem("hasLoggedInBefore", "true");
    }
  }, []);

  const totalExpenses = useMemo(
    () => expenses.reduce((total, expense) => total + expense.amount, 0),
    [expenses]
  );

  const annualIncome = useMemo(() => {
    if (user?.income === undefined) {
      return undefined;
    }
    return calculateAnnualIncome(user.income, user.incomePeriod || "monthly");
  }, [user]);

  const balance = useMemo(() => {
    if (annualIncome === undefined) {
      return undefined;
    }
    return annualIncome - totalExpenses;
  }, [annualIncome, totalExpenses]);

  const recentTransactions = useMemo(() => expenses.slice(0, 3), [expenses]);

  const summaryChartData = useMemo(
    () => groupExpensesByCategory(expenses),
    [expenses]
  );

  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      {isFirstTimeLogin && totalExpenses === 0 ? (
        <Alert severity="info">
          Welcome! It looks like you don't have any data yet. Start by adding
          your expenses.
        </Alert>
      ) : user?.income === undefined ? (
        <Alert severity="warning">
          Please set your income in your profile.
        </Alert>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard
                title="Total Expenses"
                value={`$${totalExpenses.toFixed(2)}`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard
                title={`Income (${user?.incomePeriod || "monthly"})`}
                value={`$${user?.income}`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard title="Balance" value={`$${balance?.toFixed(2)}`} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard title="Total Transactions" value={expenses.length} />
            </Grid>
          </Grid>

          <Box my={4}>
            <SummaryChart data={summaryChartData} />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ExpensesByCategory expensesByCategory={summaryChartData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecentTransactions transactions={recentTransactions} />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
