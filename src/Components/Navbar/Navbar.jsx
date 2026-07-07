function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static"> 
      <Toolbar>
        {/* ... baaki sab same rahega ... */}

        {/* Cart */}
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <Badge badgeContent={totalQty} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        {/* Profile */}
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}