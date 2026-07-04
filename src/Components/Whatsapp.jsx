import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px",
    borderRadius: "50%",
    fontSize: "24px",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <a
      href ="https://wa.me/03465147766"
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default Whatsapp;
