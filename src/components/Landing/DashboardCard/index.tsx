import { type JSX } from "react";

import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { lighten } from "@mui/system";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

import { FORM_SECTIONS, STATS } from "@data/Landing";
import { useTranslation } from "react-i18next";
import {
  StatBox,
  StatLabel,
  StatusItem,
  StatusText,
  StatValue,
} from "./styledComponents";

function DoxaFormDashboardCard(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Card
      variant="elevation"
      sx={{ padding: 2, width: { md: "100%", lg: "80%" }, margin: "0 auto" }}
    >
      {/* CARD HEADER */}
      <Box display="flex" gap={1} alignItems="center" mb={1}>
        <NoteAltIcon sx={{ height: "1.125rem", width: "1.125rem", color: '#2A56FF' }} />
        <Typography variant="h4" component="div">
          {t("Doxa Form Dashboard")}
        </Typography>
      </Box>

      <CardContent>
        {/* FORM SECTIONS - Dynamic Rendering */}
        <Box
          display="flex"
          mb={3}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {FORM_SECTIONS.map((section, index) => (
            <Card
              key={section.title}
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                padding: 2,
                marginRight: index < FORM_SECTIONS.length - 1 ? 2 : 0,
                width: { xs: "100%" },
              }}
            >
              <Typography variant="body2" fontWeight="bold" mb={1}>
                {section.title}
              </Typography>

              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                justifyContent="space-between"
                flexGrow={1}
              >
                <Box>
                  {section.items.map((item) => (
                    <StatusItem key={item.name}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <StatusText variant="body2" status={item.status}>
                        {item.status}
                      </StatusText>
                    </StatusItem>
                  ))}
                </Box>

                <Button
                  variant="text"
                  fullWidth
                  sx={{
                    mt: 1,
                    paddingY: 0.5,
                    backgroundColor: (theme) =>
                      lighten(theme.palette.text.secondary, 0.9),
                    fontWeight: 500,
                    fontFamily: "inherit",
                  }}
                >
                  {section.buttonText}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

        {/* STATS SECTION - Dynamic Rendering */}
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "initial", md: "space-around" },
          }}
          mt={3}
          gap="0.75rem"
        >
          {/* Stats Boxes - LOOP 2 */}
          {STATS.map((stat) => (
            <StatBox variant="outlined" key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel variant="body2">{stat.label}</StatLabel>
            </StatBox>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DoxaFormDashboardCard;
