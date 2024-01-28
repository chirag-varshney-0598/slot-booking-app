import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router";
// import { Typography } from "@mui/material";
import Logo from "../../componenets/Logo";

const drawerWidth = 240;
const navItems = [
  {
    name: "Menu",
    href: "/buy-crypto-fast-trading",
  },
  {
    name: "Contact Us",
    href: "/",
  },
  {
    name: "Share Link",
    href: "/",
  },
];

export default function TopBar(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          padding: "20px 0px",
        }}
      >
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={`drawerNav${item.name}`} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              // onClick={() => navigate(item.href)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const themeColors = {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "0px",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={themeColors}>
        {/* <Container maxWidth="lg"> */}
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Logo />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  marginLeft: "80px",
                }}
              >
                {navItems &&
                  navItems.map((item, i) => {
                    return (
                      <Button
                        key={`topbar${i}`}
                        color="secondary"
                        // onClick={() => navigate(item.href)}
                        sx={{
                          textTransform: "none",
                          margin: "0px 12px",
                          color: "#000",
                        }}
                      >
                        {item.name}
                      </Button>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              ...themeColors,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

TopBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
