import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import "./recent-transaction.scss";

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <Card className="recent-transactions">
      <CardContent>
        <Typography variant="h5" component="div" className="card-title">
          Recent Transactions
        </Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem
              key={transaction.id}
              className="list-group-item"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <ListItemText primary={transaction.description || "--"} />
              <Chip
                label={`$${transaction.amount.toFixed(2)}`}
                color="primary"
                variant="outlined"
                className="badge"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
