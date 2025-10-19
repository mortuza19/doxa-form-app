import type { JSX } from "react";

import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  lighten,
} from "@mui/material";

import type { FeatureItem } from "@models/Landing";
import { CORE_FEATURES } from "@data/Landing";
import { METRICS_DATA } from "@data/Landing";
import type { Metric } from "@models/Landing";

function MetricCard({ data }: { data: Metric }): JSX.Element {
  return (
    <Card
      elevation={0}
      sx={{
        padding: 3,
        textAlign: "center",
        height: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h3" color="success" sx={{ mb: 1.5 }}>
        {data.percentage}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {data.description}
      </Typography>
    </Card>
  );
}

// function CoreFeatures(): JSX.Element {
//   const { t } = useTranslation();
//   return (
//     <Grid container spacing={3}>
//       {METRICS_DATA.map((metric, index) => (
//         <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
//           <MetricCard data={metric} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default CoreFeatures;

// src/components/CoreFeatures.tsx

function FeatureCard({ item }: { item: FeatureItem }): JSX.Element {
  const theme = useTheme();
  const Icon = item.icon; // The icon component from the data

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        height: "100%", // Ensure all cards in the row are the same height
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", // Subtle shadow
        borderRadius: 2,
        p: 2, // Padding inside the card
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Slightly raised on hover
        },
      }}
    >
      <CardContent sx={{ p: "16px" }}>
        {" "}
        {/* Override MUI default CardContent padding */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
          {/* Icon */}
          <Icon
            sx={{
              fontSize: 24,
              color: theme.palette.success.main, // Use primary color for icons
              mr: 1.5,
              p: 0.5,
              borderRadius: "50%",
              bgcolor: lighten(theme.palette.success.main, 0.9), // Light background for icon
            }}
          />
          {/* Title */}
          <Typography
            variant="h5"
            sx={{ color: theme.palette.text.primary }}
          >
            {item.title}
          </Typography>
        </Box>
        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ ml: 4, lineHeight: 1.5 }} // Align description text
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function CoreFeatures(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          {t('Core Features')}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {t('Everything agencies need to digitize applications, onboarding, and compliance — with audit-ready records.')}
        </Typography>
      </Box>

      {/* Grid of Features */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {CORE_FEATURES.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <FeatureCard item={feature} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {METRICS_DATA.map((metric, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <MetricCard data={metric} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoreFeatures;
