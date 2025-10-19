import { useState, type JSX } from "react";

import { useTranslation } from "react-i18next";
import { Box, Button, Typography, Paper, IconButton } from "@mui/material";
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import VideoModal from "@landing/VideoModal";

// --- Component ---

function DoxaAction(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      maxWidth="xl"
      sx={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        margin: "0 auto",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* --- Left: Video Placeholder --- */}
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          aspectRatio: "16/9",
          minWidth: 340,
          backgroundColor: "secondary.dark", // Light grey background
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleOpen} // Open modal when clicking the placeholder
      >
        <IconButton
          color="primary"
          onClick={handleOpen}
          size="large"
          sx={{
            "& svg": { fontSize: 80 },
            color: "primary.main", // Primary color for the icon
          }}
        >
          <PlayCircleOutlineRoundedIcon />
        </IconButton>
      </Paper>

      {/* --- Right: Action Text and Buttons --- */}
      <Box sx={{ flex: 1, minWidth: 300, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h2" gutterBottom>
          {t('See Doxa Form in Action')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {t('Watch our 90-second walkthrough or book a personalized demo with our team.')}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
          <Button
            variant="contained"
            startIcon={<WatchLaterIcon />}
            onClick={handleOpen} // Open modal when clicking the button
            sx={{
              textTransform: "none",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {t('Watch Demo')}
          </Button>
          <Button
            variant="text"
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
            endIcon={<PlayCircleOutlineRoundedIcon />}
          >
            {t("Book a Demo")}
          </Button>
        </Box>
      </Box>

      {/* --- Video Modal --- */}
      <VideoModal open={open} handleClose={handleClose} videoId={videoId} />
    </Box>
  );
}

export default DoxaAction;
