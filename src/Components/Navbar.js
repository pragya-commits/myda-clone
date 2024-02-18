"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
function Navbar() {
  const items = [
    { label: "HOME", route: "/" },
    { label: "SHOP", route: "/shops" },
    { label: "ABOUT US", route: "/about-us" },
    { label: "HELP ", route: "/help " },
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
      fontSize: "22px",
      fontWeight: "500",
      paddingTop: "5px",
      fontWeight: "500",
    },
    leftContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    NavBtn: {
      background: "black",
      color: "white",
      borderRadius: "20px",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingBottom: "5px",
      paddingTop: "5px",
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
            width={116}
            height={56}
          />
          <Typography sx={styles.leftHeading}>My Digital Asset</Typography>
        </Box>
        <Box sx={styles.rightNav}>
          {items.map((item, index) => {
            return (
              <Typography
                sx={styles.navItems}
                key={index}
                onClick={() => router.push(item.route)}
              >
                {item.label}
              </Typography>
            );
          })}

          <Button sx={styles.NavBtn} startIcon={<ShoppingCartIcon />}>
            MY Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
