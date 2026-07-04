import React from "react";

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Welcome to our Dry Fruit Store! We are committed to providing you with
        fresh, healthy, and high-quality dry fruits at affordable prices.
      </p>

      <p style={styles.text}>
        Our mission is to deliver natural products that promote a healthy
        lifestyle. We carefully select almonds, walnuts, cashews, pistachios,
        and many more premium dry fruits from trusted sources.
      </p>

      <p style={styles.text}>
        Customer satisfaction and quality are our top priorities. Thank you for
        choosing us for your healthy lifestyle journey.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};

export default AboutUs;
