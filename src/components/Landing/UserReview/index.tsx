import type { JSX } from "react";

import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

import { USER_REVIEWS } from "@data/Landing";

function UserReview(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box>
      <Box mb={10}>
        <Typography variant="h1" align="center" gutterBottom>
          {t("Trusted by Colorado Agencies")}
        </Typography>
        <Grid container spacing={2} my={4}>
          {USER_REVIEWS.map((review) => (
            <Grid size={{ xs: 12, md: 4 }} key={review.user}>
              <Card variant="outlined" sx={{ p: 2, height: "100%" }}>
                <CardContent sx ={{ display: "flex", flexDirection: "column", gap: 2, height: "100%"}}>
                  <FormatQuoteOutlinedIcon
                    sx={{ fontSize: 24, color: "success.main" }}
                  />
                  <Typography variant="body2" gutterBottom sx={{ flexGrow: 1}}>
                    <q>{t(review.review)}</q>
                  </Typography>
                  <Box display="flex" gap={0.5}>
                    <Typography variant="subtitle1" color="text.secondary">
                      {t(review.user)}, 
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {t(review.company)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        maxWidth="700px"
        gap={2}
        mt={10}
      >
        <img
          src="assets/shield.svg"
          alt="Shield logo"
          style={{ height: "36px", width: "36px" }}
        />
        <Box textAlign="center" display="flex" flexDirection="column" gap={2}>
          <Typography variant="h2">
            {t("Secure, Compliant and Audit-Ready")}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {t(
              "Built with home care auditors to meet Colorado state requirements. HIPPA-grade encryption and protected e-signatures keep your date safe."
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserReview;
