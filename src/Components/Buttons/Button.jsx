import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/cart/cartSlice";

export default function ColorButtons({ product }) {
  const dispatch = useDispatch();

const handleAddToCart = () => {
  dispatch(addToCart({ ...product, quantity: 1 }));
  alert("✅ Product has been added to cart!");
};

  return (
    <Stack spacing={1.5} alignItems="center">
      {/* Add to Cart Button */}
      <Button
        fullWidth
        variant="contained"
        color="success"
        sx={{
          height: 50,
          borderRadius: 2,
          fontWeight: "bold",
        }}
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>

      {/* Price */}
      <Typography align="center" fontWeight="bold" color="success.main">
        Price : PKR {product.price.toLocaleString()}/-
      </Typography>
    </Stack>
  );
}