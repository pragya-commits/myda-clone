import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Order() {
  const styles = {
    orderBox: {
      background: "white",
      color: "black",
      paddingRight: "200px",
      paddingLeft: "200px",
      paddingBottom: "50px",
    },
    text: {
      paddingTop: "25px",
      paddingBottom: "25px",
      fontSize: "35px",
      fontWeight: "500",
    },
    mainBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    leftText: {
      paddingTop: "100px",
    },
    btn: {
      background: "black",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "25px",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
  };
  return (
    <Box sx={styles.orderBox}>
      <Box sx={styles.mainBox}>
        <Box sx={styles.leftText}>
          <Image
            src={"https://myda.co.in/myda_logo_black.png"}
            width={196}
            height={107}
          />
          <Typography sx={styles.text}>Easy . Quick . Convenient</Typography>
          <Button sx={styles.btn} variant="contained">
            Get It Now
          </Button>
        </Box>
        <Box>
          <video
            sx={styles.vd}
            controls
            autoPlay
            loop
            playsInline
            width="456.63"
            height="456.63"
          >
            <source
              src="https://myda.co.in/Home/social_icons_on_tap_grey.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      </Box>
    </Box>
  );
}
export default Order;
