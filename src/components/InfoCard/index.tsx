import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface InfoCardProps {
  title: string;
  value: string | number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <Card variant="outlined" sx={{ boxShadow: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
