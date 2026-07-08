import * as React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import InputBase from "@mui/material/InputBase";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { styled, alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const navstyle = ({ isActive }) => ({
  color: isActive ? "#FFD700" : "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQty = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#1B3A2F",
        }}
      >
        <Toolbar>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            sx={{
              display: { xs: "block", md: "none" },
              mr: 1,
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box
            component="img"
            src="/assets/images/dryF-logo.png"
            alt="logo"
            sx={{
              width: { xs: 50, md: 70 },
              borderRadius: 2,
            }}
          />

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              fontWeight: "bold",
              fontSize: {
                xs: "18px",
                md: "24px",
              },
            }}
          >
            Dry Fruits
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 3,
              ml: 6,
            }}
          >
            <NavLink style={navstyle} to="/">
              <Typography>Home</Typography>
            </NavLink>

            <NavLink style={navstyle} to="/about">
              <Typography>About</Typography>
            </NavLink>

            <NavLink style={navstyle} to="/contact">
              <Typography>Contact</Typography>
            </NavLink>

            <NavLink style={navstyle} to="/newproducts">
              <Typography>New Products</Typography>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Search */}
          <Search
            sx={{
              width: {
                xs: "120px",
                sm: "180px",
                md: "250px",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search..."
            />
          </Search>

          {/* Cart */}
          <NavLink
            to="/cart"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <IconButton color="inherit">
              <Badge
                badgeContent={totalQty}
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>

      {/* Drawer */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>

            <ListItem disablePadding>
              <NavLink
                to="/"
                style={{
                  width: "100%",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink
                to="/about"
                style={{
                  width: "100%",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemText primary="About" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink
                to="/contact"
                style={{
                  width: "100%",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink
                to="/newproducts"
                style={{
                  width: "100%",
                  color: "black",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemText primary="New Products" />
                </ListItemButton>
              </NavLink>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;