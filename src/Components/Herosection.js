import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Herosection() {
  const styles = {
    HeroBox: {
      // background: "rgb(245,245,245)",
      display: "flex",
      justifyContent: "space-between",
      alignItem: "center",
      paddingRight: "200px",
      paddingLeft: "180px",
      paddingTop: "200px",
      paddingBottom: "50px",
      color: "black",
    },
    boxHead: {
      fontWeight: "700",
      fontSize: "20px",
    },
    boxText: {
      fontWeight: "400",
      fontSize: "22px",
      letterSpacing: "1px",
    },
    rightContent: {
      textAlign: "center",
    },
    Btn: {
      background: "black",
      color: "white",
      borderRadius: "20px",
    },
    vd: {
      background: "white",
    },
    mainBox: {
      // background: "rgb(245,245,245)",
    },
  };
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.HeroBox}>
        <Box sx={styles.rightContent}>
          <Image
            src={
              "https://myda.co.in/_next/image?url=%2Fmyda_logo_black.png&w=384&q=100"
            }
            width={196}
            height={107}
          />
          <Typography sx={styles.boxHead}>My Digital Asset</Typography>
          <Typography sx={styles.boxText}>Easy . Quick . Convinient</Typography>
          <Button variant="contained" sx={styles.Btn}>
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Herosection;
