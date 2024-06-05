const mockAppState = {
  user: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  },
  expenses: [
    {
      id: 1,
      date: "2023-05-01",
      category: "Groceries",
      amount: 50,
      description: "Weekly groceries",
    },
    {
      id: 2,
      date: "2024-05-05",
      category: "Utilities",
      amount: 100,
      description: "Electricity bill",
    },
    {
      id: 3,
      date: "2024-05-10",
      category: "Transportation",
      amount: 30,
      description: "Gasoline",
    },
    {
      id: 4,
      date: "2024-05-15",
      category: "Groceries",
      amount: 60,
      description: "Weekly groceries",
    },
    {
      id: 5,
      date: "2024-05-20",
      category: "Utilities",
      amount: 120,
      description: "Water bill",
    },
    {
      id: 6,
      date: "2024-05-25",
      category: "Transportation",
      amount: 25,
      description: "Bus fare",
    },
    {
      id: 7,
      date: "2023-06-01",
      category: "Groceries",
      amount: 55,
      description: "Weekly groceries",
    },
    {
      id: 8,
      date: "2023-06-05",
      category: "Utilities",
      amount: 110,
      description: "Electricity bill",
    },
    {
      id: 9,
      date: "2022-06-10",
      category: "Transportation",
      amount: 35,
      description: "Gasoline",
    },
    {
      id: 10,
      date: "2022-06-15",
      category: "Groceries",
      amount: 70,
      description: "Weekly groceries",
    },
    {
      id: 11,
      date: "2023-06-20",
      category: "Utilities",
      amount: 130,
      description: "Water bill",
    },
    {
      id: 12,
      date: "2023-06-25",
      category: "Transportation",
      amount: 30,
      description: "Bus fare",
    },
  ],
  transactions: [
    { id: 1, description: "Salary", amount: 2000 },
    { id: 2, description: "Rent", amount: -800 },
  ],
  categories: [
    { id: 1, name: "Groceries" },
    { id: 2, name: "Utilities" },
    { id: 3, name: "Transportation" },
  ],
  goals: [
    {
      id: 1,
      name: "Save for vacation",
      budget: 1000,
      savings: [
        {
          amount: 0,
          date: "2023-06-15",
        },
      ],
    },
    {
      id: 2,
      name: "Buy a new laptop",
      budget: 1500,
      savings: [
        {
          amount: 100,
          date: "2024-05-15",
        },
      ],
    },
  ],
  budgets: {
    Groceries: 2000,
    Utilities: 150,
    Transportation: 100,
  },
};

export default mockAppState;
