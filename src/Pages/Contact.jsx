import React from "react";

function ContactUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <p style={styles.text}>
        If you have any questions, feel free to contact us. We are always here
        to help you.
      </p>

      <div style={styles.box}>
        <h3>📞 Phone</h3>
        <p>+92 3335253373</p>
      </div>

      <div style={styles.box}>
        <h3>📧 Email</h3>
        <p>unitedmarkhor@dryfruitstore.com</p>
      </div>

      <div style={styles.box}>
        <h3>📍 Address</h3>
        <p>Skardu Gilgit Baltisstan</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    maxWidth: "700px",
    margin: "auto",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  box: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
  },
};

export default ContactUs;
