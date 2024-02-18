import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Nature() {
  const styles = {
    mainBox: {
      // background: "rgb(245,245,245)",
      color: "black",
      paddingBottom: "50px",
      paddingRight: "100px",
      paddingLeft: "100px",
    },
    Box: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "50px",
      paddingLeft: "50px",
      paddingTop: "20px",
    },
    BoxText: {
      paddingTop: "120px",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "600",
      paddingBottom: "15px",
    },
    text: {
      fontSize: "15px",
      paddingBottom: "15px",
    },
    btn: {
      background: "black",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "25px",
      paddingLeft: "30px",
      paddingRight: "30px",
    },
    headingg: {
      fontSize: "55px",
      background: "white",
      color: "black",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "10px",
    },
  };

  return (
    <Box sx={styles.mainBox}>
      <Box>
        <Typography sx={styles.headingg}>Get MyDA and Go Green!!!</Typography>
      </Box>
      <Box sx={styles.Box}>
        <Box>
          <Image
            src={"https://myda.co.in/Home/tree.gif"}
            width={467.01}
            height={467.01}
          />
        </Box>
        <Box sx={styles.BoxText}>
          <Typography sx={styles.heading}>We value the nature!</Typography>
          <Typography sx={styles.text}>
            With MyDA, we are thinking about tomorrow. A better tomorrow for
            you, <br />a better tomorrow for nature, a best tomorrow for all of
            us.
            <br />
            <br />
            Start building your network digitally with MyDA and give your <br />{" "}
            contribution in saving trees by saying NO to traditional business
            cards!
          </Typography>
          <Button sx={styles.btn} variant="contained">
            GET YOUR MYDA NOW!!!!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Nature;
