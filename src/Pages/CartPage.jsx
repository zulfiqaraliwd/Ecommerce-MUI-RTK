import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../feature/cart/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOrder = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   Total Quantity
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Grand Total Price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mt: 5, fontWeight: "bold" }}
      >
        🛒 Your Cart is Empty
      </Typography>
    );
  }

  return (
    <Stack spacing={2} sx={{ p: 3, width: "100%" }}>
      {/* Cart Products */}
      {cartItems.map((item) => (
        <Paper
          key={item.id}
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Product Name */}
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>
              {item.name}
            </Typography>

            {/* Quantity */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                px: 1,
                py: 0.3,
              }}
            >
              <IconButton
                size="small"
                color="success"
                onClick={() => dispatch(decreaseQty(item.id))}
              >
                <RemoveIcon />
              </IconButton>

              <Typography fontWeight="bold">{item.quantity}</Typography>

              <IconButton
                size="small"
                color="success"
                onClick={() => dispatch(increaseQty(item.id))}
              >
                <AddIcon />
              </IconButton>
            </Stack>

            {/* Product Total */}
            <Typography
              sx={{
                width: 140,
                textAlign: "right",
                fontWeight: "bold",
              }}
            >
              PKR {(item.price * item.quantity).toLocaleString()}/-
            </Typography>

            {/* Delete */}
            <IconButton
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Paper>
      ))}

      {/* Summary + Button wrapper — is Box se hi centering guaranteed hogi */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        {/* Summary Card */}
        <Paper
          elevation={4}
          sx={{
            width: 350,
            maxWidth: "100%",
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Cart Summary
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Total Products: <strong>{cartItems.length}</strong>
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Total Quantity: <strong>{totalQuantity}</strong>
          </Typography>

          <Typography
            variant="h5"
            color="success.main"
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            Grand Total: PKR {totalPrice.toLocaleString()}/-
          </Typography>
        </Paper>

        {/* Order Button */}
        <Button
          variant="contained"
          color="success"
          sx={{
            width: 350,
            maxWidth: "100%",
            height: 45,
          }}
          onClick={() => setOpen(true)}
        >
          Order Now
        </Button>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>🛒 Confirm Order</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to place this order?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              alert("✅ Your order has been placed successfully!");
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

export default CartPage;