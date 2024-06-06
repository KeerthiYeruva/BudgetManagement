import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

export const ToggleCustomTheme = ({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) => {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={showCustomTheme}
      onChange={toggleCustomTheme}
      aria-label="Platform"
      sx={{
        backgroundColor: "background.default",
        "& .Mui-selected": {
          pointerEvents: "none",
        },
      }}
    >
      <ToggleButton value>
        <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
        Theme 1
      </ToggleButton>
      <ToggleButton value={false}>Theme 2</ToggleButton>
    </ToggleButtonGroup>
  );
};
