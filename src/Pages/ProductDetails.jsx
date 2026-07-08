import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../Data/products";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductDetails() {
  const navigate = useNavigate();   // ✅ Yahan hona chahiye
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>{product.name}</h1>

      <h2>PKR: {product.price}/- only</h2>

      <img src={product.image} alt={product.name} width={250} />

      <p>{product.desc}</p>

      <Button
        variant="contained"
        color="success"
        startIcon={<ArrowBackIcon />}
        sx={{ mt: 3 }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default ProductDetails;