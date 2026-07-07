import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import Button from "../Buttons/Button";

function ProductCards({ product }) {
  return (
  <Card
  sx={{
    width: 300,
    borderRadius: 3,
    boxShadow: 4,
  }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="380"
        image={product.image}
        alt={product.name}
      />

      {/* Content */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography color="success.main" fontWeight="bold">
          PKR {product.price}/-
        </Typography>

        <Typography variant="body2">
          Weight : {product.weight}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {product.desc}
        </Typography>
      </CardContent>

      {/* Buttons */}
   <CardActions sx={{ display: "block" }}>
  <Button product={product} />
</CardActions>

    </Card>

    
  );
}

export default ProductCards;