import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "../Buttons/Button";

function ProductCards({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/product/${product.id}`)}
      sx={{
        width: 300,
        cursor: "pointer",
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      {/* Image */}
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="380"
          image={product.image}
          alt={product.name}
          sx={{
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
      </Box>

      {/* Content */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" noWrap>
          {product.name}
        </Typography>

        <Typography color="success.main" fontWeight="bold" sx={{ mt: 0.5 }}>
          PKR {product.price}/-
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Weight : {product.weight}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.desc}
        </Typography>
      </CardContent>

      {/* Add To Cart Button */}
      <CardActions
        sx={{ display: "block", px: 2, pb: 2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Button product={product} />
      </CardActions>

      <Typography
        variant="caption"
        align="center"
        display="block"
        color="text.secondary"
        sx={{ pb: 1.5 }}
      >
        You can increase quantity from cart 🛒
      </Typography>
    </Card>
  );
}

export default ProductCards;