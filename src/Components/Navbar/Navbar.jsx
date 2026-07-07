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

import { styled, alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
  marginLeft: theme.spacing(2),
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
    width: "220px",
  },
}));

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar
  position="static"
  sx={{
    bgcolor: "#1B3A2F", 
  }}>
      <Toolbar>
        {/* Logo */}
        <Box
          component="img"
          src="/assets/images/dryF-logo.png"
          alt="logo"
          sx={{
            width: 70,
            borderRadius: 10,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            ml: 2,
            fontWeight: "bold",
          }}
        >
          Dry Fruits
        </Typography>

      
        {/* Navigation */}
<Box
  sx={{
    display: "flex",
    gap: 3,
    ml: 20,
  }}
>
  <NavLink style={navstyle} to="/">
    <Typography variant="subtitle1" fontWeight={500}>
      Home
    </Typography>
  </NavLink>

  <NavLink style={navstyle} to="/about">
    <Typography variant="subtitle1" fontWeight={500}>
      About
    </Typography>
  </NavLink>

  <NavLink style={navstyle} to="/contact">
    <Typography variant="subtitle1" fontWeight={500}>
      Contact
    </Typography>
  </NavLink>

  <NavLink style={navstyle} to="/newproducts">
    <Typography variant="subtitle1" fontWeight={500}>
      New Products
    </Typography>
  </NavLink>
</Box>

        {/* Push Right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Search */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase placeholder="Search Products..." />
        </Search>

        {/* Cart */}<NavLink
  to="/cart"
  style={{ color: "inherit", textDecoration: "none" }}
>
  <IconButton color="inherit" sx={{ ml: 2 }}>
    <Badge badgeContent={totalQty} color="error">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
</NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;