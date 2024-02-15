"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from "next/navigation";
function Navbar() {

  const items = [
    { label: "Home", route: "/" },
    { label: "Shop", route: "/shops" },
    { label: "About Us", route: "/about-us" },
  ];

  const router = useRouter();

  const styles = {
    rightNav: {
      display: "flex",
      background: "white",
      color: "black",
    },
    navItems: {
      fontWeight: "500",
      fontsize: "5px",
      paddingRight: "45px",
    },
    navBar: {
      display: "flex",
      justifyContent: "space-between",
      background: "white",
      color: "black",
      paddingRight: "5rem",
      paddingLeft: "4rem",
      paddingTop: "25px",
      paddingBottom: "25px",
    },
    leftHeading: {
      fontSize: "18px",
      fontWeight: "500",
    },
    leftContent: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <Box>
      <Box sx={styles.navBar}>
        <Box sx={styles.leftContent}>
          <Image
            src={
              "https://myda.co.in/_next/image?url=%2Fmyda_logo_black.png&w=384&q=100"
            }
            width={72.5}
            height={35}
          />
          <Typography sx={styles.leftHeading}>My Digital Asset</Typography>
        </Box>
        <Box sx={styles.rightNav}>
          {items.map((item, index) => {
            return (
              <Typography sx={styles.navItems} key={index}
                onClick={() => router.push(item.route)}
              >
                {item.label}
              </Typography>
            );
          })}

          <Button
            startIcon={<ShoppingCartIcon />}
          >
            MY Cart
          </Button>
          {/* k */}
          {/* <Typography sx={styles.navItems}>HOME</Typography>
          <Typography sx={styles.navItems}>SHOP</Typography>
          <Typography sx={styles.navItems}>ABOUT US</Typography>
          <Typography sx={styles.navItems}>HELP</Typography>
          <Typography sx={styles.navItems}>MY CART</Typography> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
