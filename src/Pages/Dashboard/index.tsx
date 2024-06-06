import React, { useEffect, useState } from "react";
import ExpensesByCategory from "../../components/ExpensesByCategory";
import RecentTransactions from "../../components/RecentTransactions";
import SummaryChart from "../../components/SummaryChart";
import { useExpenseStore, useUserProfileStore } from "../../store";
import InfoCard from "../../components/InfoCard";
import { useStore } from "zustand";
import { Grid, Typography, Alert, Container, Box } from "@mui/material";
import "./dashboard.scss";

const Dashboard: React.FC = () => {
  const { expenses } = useStore(useExpenseStore);
  const { user } = useStore(useUserProfileStore);
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(false);

  useEffect(() => {
    const firstTime = isUserFirstTime();
    setIsFirstTimeLogin(firstTime);
  }, []);

  const isUserFirstTime = () => {
    return !localStorage.getItem("hasLoggedInBefore");
  };

  useEffect(() => {
    if (isFirstTimeLogin) {
      localStorage.setItem("hasLoggedInBefore", "true");
    }
  }, [isFirstTimeLogin]);

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Calculate balance based on the user's income period
  const calculateAnnualIncome = (income, period) => {
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

  const annualIncome = calculateAnnualIncome(user?.income, user?.incomePeriod);
  const balance = annualIncome - totalExpenses;
  const totalTransactions = expenses.length;

  const groupExpensesByCategory = (expenses) => {
    return expenses.reduce((acc, expense) => {
      const categoryIndex = acc.findIndex(
        (item) => item.label.toLowerCase() === expense.category.toLowerCase()
      );
      if (categoryIndex !== -1) {
        acc[categoryIndex].value += expense.amount;
      } else {
        acc.push({ label: expense.category, value: expense.amount });
      }
      return acc;
    }, []);
  };

  const recentTransactions = expenses.slice(0, 3);
  const summaryChartData = groupExpensesByCategory(expenses);

  return (
    <Container maxWidth="xl" className="dashboard-container">
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      {isFirstTimeLogin && totalTransactions === 0 ? (
        <Alert severity="info">
          Welcome! It looks like you don't have any data yet. Start by adding
          your expenses.
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
                value={`$${user.income}`}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard title="Balance" value={`$${balance.toFixed(2)}`} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard title="Total Transactions" value={totalTransactions} />
            </Grid>
          </Grid>

          <Box my={4}>
            <SummaryChart data={summaryChartData} />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ExpensesByCategory
                expensesByCategory={groupExpensesByCategory(expenses)}
              />
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
