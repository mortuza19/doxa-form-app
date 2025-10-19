import { Box, Card, styled, Typography } from "@mui/material";

import type { Status } from "@models/Landing";

export const StatusItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "24px", // Ensure consistent height for all items
});

// Use 'status' prop to determine color
export const StatusText = styled(Typography)<{ status: Status }>(
  ({ theme, status }) => ({
    color:
      status === "Pending"
        ? theme.palette.warning.main
        : theme.palette.success.dark,
  })
);

export const StatBox = styled(Card)({
  textAlign: "center",
  flexGrow: 1,
  padding: "16px",
});

export const StatValue = styled(Typography)({
  fontSize: "1.8rem",
  fontWeight: 600,
  color: "#2A56FF",
});

export const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.text.secondary,
}));