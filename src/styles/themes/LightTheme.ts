// lightTheme.ts

import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2.125rem",
      fontWeight: 500,
      color: "#333333",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#333333",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#757575",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#3f51b5",
          "&:hover": {
            backgroundColor: "#303f9f",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          color: "#333333",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#f50057",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#757575",
          "&$selected": {
            color: "#333333",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#3f51b5",
          color: "#ffffff",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: "#f50057",
          color: "#ffffff",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "8px 0",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#757575",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#333333",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#333333",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#3f51b5",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: "0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: "#757575",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3f51b5",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#e0e0e0",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: "#333333",
          "&$selected": {
            backgroundColor: "#3f51b5",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "#3f51b5",
          },
        },
      },
    },
  },
});

export default lightTheme;
