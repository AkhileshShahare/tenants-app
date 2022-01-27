import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";

interface Tenant {
  id: string;
  name: string;
  code: string;
  handleClick: () => void
}

export const TenantCard = ({ id, name, code, handleClick }: Tenant) => (
  <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined" onClick={handleClick}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Code: {code}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
