import type { JSX } from "react";

import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import DoxaFormDashboardCard from "@landing/DashboardCard";

function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 1, md: 3 },
        py: { xs: 6, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.75rem", "lg": "3.5rem" },
              fontWeight: 800,
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            <span style={{ color: "#556270" }}>
              {t("Onboard Employees & ")}
            </span>
            <span style={{ color: "#454F5A" }}>{t("Clients - ")}</span>
            <span style={{ color: "#416EFF" }}>{t("Compliantly ")}</span>
            <span style={{ color: "#39424B" }}>{t("and Paper-Free")}</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              mt: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", md: "inherit" },
            }}
          >
            {t(
              "Built for Colorado home care agencies to simplify applications, client intake, and state-required compliance forms - all in one secure platform."
            )}
          </Typography>
          <Box
            mt={3}
            display="flex"
            gap={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ px: { md: "2rem" } }}
              endIcon={<ArrowForwardIosIcon />}
            >
              {t("Start Free Trial")}
            </Button>
            <Button
              variant="text"
              sx={{
                px: { md: "2rem" },
                backgroundColor: (theme) => theme.palette.background.paper,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
              }}
              endIcon={<PlayCircleOutlineIcon />}
            >
              {t("Book a Demo")}
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <DoxaFormDashboardCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
