import React from "react";
import { useStore } from "zustand";
import { useBudgetStore } from "../../store";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Badge,
  Grid,
} from "@mui/material";

interface ExpensesByCategoryProps {
  expensesByCategory: { label: string; value: number }[];
}

const ExpensesByCategory: React.FC<ExpensesByCategoryProps> = ({
  expensesByCategory,
}) => {
  const { budgets } = useStore(useBudgetStore);

  return (
    <Card className="expenses-category-card">
      <CardContent>
        <Typography variant="h5" component="div">
          Expenses by Category
        </Typography>
        <List>
          {expensesByCategory.map((item, index) => {
            const categoryBudget = budgets[item.label] || 0;
            const categorySpending = item.value;
            const isOverSpent =
              categoryBudget > 0 && categorySpending > categoryBudget;
            const overspentAmount = categorySpending - categoryBudget;

            return (
              <ListItem key={index} divider>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Grid item xs={5}>
                    <ListItemText primary={item.label} />
                  </Grid>
                  <Grid item xs={5}>
                    {isOverSpent && (
                      <Badge
                        badgeContent={`Overspent by $${overspentAmount.toFixed(2)}`}
                        color="error"
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        overlap="circular"
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={2}>
                    <Badge
                      badgeContent={`$${item.value.toFixed(2)}`}
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExpensesByCategory;
