// darkTheme.ts

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
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
      color: "#ffffff",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#bdbdbd",
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
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#1e1e1e",
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
          color: "#bdbdbd",
          "&$selected": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#ffffff",
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
          color: "#ffffff",
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
          color: "#bdbdbd",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#ffffff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#303f9f",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
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
          backgroundColor: "#1e1e1e",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: "#bdbdbd",
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
          backgroundColor: "#303f9f",
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
          color: "#ffffff",
          "&$selected": {
            backgroundColor: "#3f51b5",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff",
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

export default darkTheme;
