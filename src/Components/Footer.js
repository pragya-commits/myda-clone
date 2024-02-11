import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  const footer1 = ["My Digital Asset"];
  const footer2 = ["Product", "Overview", "Features", "Pricing", "Releases"];
  const footer3 = ["Company", "About", "Carrer", "Contact"];
  const footer4 = [
    "Suport",
    "Help Center",
    "Refund Policy",
    "Privacy Policy",
    "Terms of Services",
  ];
  const footer5 = ["Follow Us", "Download the App"];
  const styles = {
    footerItems: {
      fontWeight: "300",
      fontSize: "18px",
      background: "rgb(40,40,40)",
      paddingRight: "150px",
    },
    digitalAsset: {
      paddingTop: "50px",
      paddingRight: "100px",
      paddingLeft: "10px",
    },
    foot: {
      fontWeight: "300",
      fontSize: "28px",
      background: "rgb(40,40,40)",
      display: "flex",
      justifyContent: "space-between",
      background: "rgb(40,40,40)",
      background: "rgb(40,40,40)",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    footerMain: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "200px",
      paddingLeft: "70px",
    },
  };

  return (
    <Box sx={styles.foot}>
      <Box sx={styles.footerMain}>
        <Box sx={styles.footerBox}>
          {footer1.map((item, index) => (
            <Typography key={index} sx={styles.digitalAsset}>
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          {footer2.map((item, index) => (
            <Typography key={index} sx={styles.footerItems}>
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          {footer3.map((item, index) => (
            <Typography key={index} sx={styles.footerItems}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box>
          {footer4.map((item, index) => (
            <Typography key={index} sx={styles.footerItems}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box>
          {footer5.map((item, index) => (
            <Typography key={index} sx={styles.footerItems}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
