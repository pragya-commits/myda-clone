import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Network() {
  const styles = {
    mainBox: {
      background: "white",
      color: "black",
      display: "flex",
      paddingRight: "100px",
      paddingLeft: "100px",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    contentBox: {
      display: "flex",
    },
    Box: {
      display: "flex",
      background: "white",
      color: "black",
    },
    imgText: {
      textAlign: "center",
    },
    Card: {
      textAlign: "center",
      paddingLeft: "50px",
    },
    text: {
      fontSize: "25px",
      fontWeight: "600",
    },
    arrow: {
      paddingLeft: "30px",
      paddingTop: "70px",
    },
  };
  return (
    <Box sx={styles.mainBox}>
      <Typography></Typography>
      <Box sx={styles.contentBox}>
        <Box sx={styles.Card}>
          <Image
            src={
              "https://myda-documents.s3.ap-south-1.amazonaws.com/download.png"
            }
            width={100}
            height={100}
          />
          <Box sx={styles.imgText}>
            <Typography sx={styles.text}>
              Download your <br />
              MyDA App
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.arrow}>
          <Image
            src={"https://myda.co.in/Home/ThirdSection/arrow.png"}
            width={100}
            height={25}
          />
        </Box>
        <Box sx={styles.Card}>
          <Image
            src={
              "https://myda-documents.s3.ap-south-1.amazonaws.com/activate.png"
            }
            width={100}
            height={100}
          />
          <Box sx={styles.imgText}>
            <Typography sx={styles.text}>
              Activate your <br /> MyDA
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.arrow}>
          <Image
            src={"https://myda.co.in/Home/ThirdSection/arrow.png"}
            width={100}
            height={25}
          />
        </Box>
        <Box sx={styles.Card}>
          <Image
            src={
              "https://myda-documents.s3.ap-south-1.amazonaws.com/get-premium.png"
            }
            width={100}
            height={100}
          />
          <Box sx={styles.imgText}>
            <Typography sx={styles.text}>
              Get Premium Go <br /> Beyond
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.arrow}>
          <Image
            src={"https://myda.co.in/Home/ThirdSection/arrow.png"}
            width={100}
            height={25}
          />
        </Box>
        <Box sx={styles.Card}>
          <Image
            src={
              "https://myda-documents.s3.ap-south-1.amazonaws.com/build-network.png"
            }
            width={100}
            height={100}
          />
          <Box sx={styles.imgText}>
            <Typography sx={styles.text}>
              Start Building your <br /> Network!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Network;
