import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import { blue } from "@mui/material/colors";
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
      fontSize: "25px",
      background: "rgb(40,40,40)",
      paddingRight: "80px",
    },
    digitalAsset: {
      paddingTop: "10px",
      paddingRight: "100px",
      paddingLeft: "5px",
      fontSize: "20px",
    },
    foot: {
      fontWeight: "300",
      fontSize: "40px",
      background: "rgb(40,40,40)",
      display: "flex",
      justifyContent: "space-between",
      background: "rgb(40,40,40)",
      background: "rgb(40,40,40)",
      paddingTop: "80px",
      paddingBottom: "80px",
      paddingLeft: "20px",
      paddingRight: "20px",
      color: "white",
    },
    footerMain: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "200px",
      paddingLeft: "70px",
      color: "white",
    },
    insta: {
      color: "red",
    },
    you: {
      color: "red",
    },
    text: {
      color: "white",
      fontSize: "20px",
    },
  };

  return (
    <Box sx={styles.foot}>
      <Box sx={styles.footerMain}>
        <Box sx={styles.footerBox}>
          <Image
            src={
              "https://myda.co.in/_next/image?url=%2Fmyda_logo_white.png&w=384&q=100"
            }
            width={116}
            height={56}
          />
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
          <Typography sx={styles.text}>Follow Us </Typography>
          <TwitterIcon color="primary" />
          <FacebookIcon sx={styles.fb} color="primary" />
          <InstagramIcon sx={styles.insta} color="primary" />
          <LinkedInIcon color="primary" />
          <YouTubeIcon sx={styles.you} color="primary" />
          <Typography sx={styles.text}>Download the app</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
