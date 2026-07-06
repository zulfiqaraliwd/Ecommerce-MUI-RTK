

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        mt: 8,
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={2}>
              <Box
                component="img"
                src="/assets/images/dryF-logo.png"
                alt="Logo"
                sx={{
                  width: 90,
                  borderRadius: 12,
                }}
              />

              <Typography variant="h6" fontWeight="bold">
                UnitedMarkhor Dry Fruit
              </Typography>

              <Typography variant="body2">
                Quality Products Across Pakistan
              </Typography>
            </Stack>
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="hover"
              >
                Home
              </Link>

              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="hover"
              >
                About
              </Link>

              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                underline="hover"
              >
                Contact
              </Link>

              <Link
                component={RouterLink}
                to="/newproducts"
                color="inherit"
                underline="hover"
              >
                New Products
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <Stack spacing={1}>
              <Typography>03465147766</Typography>

              <Typography>
                unitedmarkhorgroup786@gmail.com
              </Typography>
            </Stack>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" href="https://www.facebook.com/qdrty.slajyt.mrkz">
                <FacebookIcon />
              </IconButton>

              <IconButton color="inherit" href="https://www.instagram.com/unitedmarkhor/">
                <InstagramIcon />
              </IconButton>

             <IconButton color="inherit" href="https://wa.me/923465147766">
  <WhatsAppIcon />
</IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: 1,
            borderColor: "rgba(255,255,255,.2)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 UnitedMarkhorGroup786. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

