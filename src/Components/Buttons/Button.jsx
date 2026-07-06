import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cart/cartSlice";


export default function ColorButtons({ product }) {
  const dispatch = useDispatch();

  return (
    <Stack spacing={2}>
      <Button
        fullWidth
        variant="contained"
        color="success"
        sx={{
          height: 50,
          borderRadius: 2,
          fontWeight: "bold",
        }}
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </Button>

      <Typography align="center">
        Price : PKR {product.price}/-
      </Typography>
    </Stack>
  );
}