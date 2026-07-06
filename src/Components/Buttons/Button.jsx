import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ColorButtons({ price }) {
  const [increment, setIncrement] = useState(1);

  const total = price * increment;

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} justifyContent="center">
        {/* Minus Button */}
        <Button
          variant="contained"
          color="error"
          onClick={() =>
            setIncrement((prev) => (prev > 1 ? prev - 1 : 1))
          }
          sx={{
            minWidth: 50,
            width: 50,
            height: 50,
            borderRadius: "50%",
            fontSize: "24px",
            fontWeight: "bold",
            p: 0,
          }}
        >
          -
        </Button>

        {/* Order Button */}
        <Button
          variant="contained"
          color="success"
          sx={{
            px: 4,
            height: 50,
            borderRadius: 2,
          }}
        >
          Order Now
        </Button>

        {/* Plus Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIncrement((prev) => prev + 1)}
          sx={{
            minWidth: 50,
            width: 50,
            height: 50,
            borderRadius: "50%",
            fontSize: "24px",
            fontWeight: "bold",
            p: 0,
          }}
        >
          +
        </Button>
      </Stack>

      <Typography align="center">
        Number of Product: {increment}
      </Typography>

      <Typography align="center" fontWeight="bold">
        Total Price: PKR {total}/-
      </Typography>
    </Stack>
  );
}