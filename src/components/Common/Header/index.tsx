import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Define the expected props
interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  featureRef: React.RefObject<HTMLDivElement | null>;
  demoRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
  },
}));

function Header({ demoRef, featureRef, pricingRef, contactRef, scrollToSection }: HeaderProps): JSX.Element {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    t("Feature"),
    t("Demo"),
    t("Pricing"),
    t("Contact"),
    t("Login"),
  ];

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 0,
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={2}>
          <img src="assets/logo.svg" alt={t("Doxa logo")}
          style={{ height: 36 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            {t("Doxa Form")}
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <NavButton onClick={() => scrollToSection(featureRef)}>{t("Feature")}</NavButton>
          <NavButton onClick={() => scrollToSection(demoRef)}>{t("Demo")}</NavButton>
          <NavButton onClick={() => scrollToSection(pricingRef)}>{t("Pricing")}</NavButton>
          <NavButton onClick={() => scrollToSection(contactRef)}>{t("Contact")}</NavButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <NavButton>{t("Login")}</NavButton>
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            {t("Start Free Trial")}
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          aria-label={t("open menu")}
          onClick={handleMenuOpen}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={handleMenuClose}
            >
              {t("Start Free Trial")}
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
