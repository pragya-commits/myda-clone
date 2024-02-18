import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Functions() {
  const styles = {
    mainBox: {
      display: "flex",
      padding: "40px",
    },
    FuncBox: {
      display: "flex",
      justifyContent: "space-between",

      color: "black",
      padding: "50px",
    },
    funcHeading: {
      color: "black",
      fontSize: "30px",
      fontWeight: "600",
      padding: "40px",
    },
    mainHead: {
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "500",
      // background: "rgb(245,245,245)",
      color: "black",
    },
    heading: {
      fontSize: "25px",
      fontWeight: "600",
    },
    rightText: {
      paddingLeft: "50px",
      paddingTop: "10px",
    },
    content: {
      fontSize: "16px",
    },
    mainBox: {
      background: "rgb(245,245,245)",
    },
  };
  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.mainHead}>
        MyDA Can be your game changer!
      </Typography>
      <Box sx={styles.FuncBox}>
        <Box>
          <Box sx={styles.mainBox}>
            <Box>
              <Image
                src={
                  "https://myda-documents.s3.ap-south-1.amazonaws.com/connect-with-peers.png"
                }
                width={150}
                height={125}
              />
            </Box>
            <Box sx={styles.rightText}>
              <Typography sx={styles.heading}>
                Easy to connect with peers.
              </Typography>
              <Typography sx={styles.content}>
                Build your personal and professional <br /> connections easily
                with MyDA.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.mainBox}>
            <Box>
              <Image
                src={
                  "https://myda-documents.s3.ap-south-1.amazonaws.com/Anytime.-Anywhere.png"
                }
                width={150}
                height={125}
              />
            </Box>
            <Box sx={styles.rightText}>
              <Typography sx={styles.heading}>Always ready to go.</Typography>
              <Typography sx={styles.content}>
                Make connection anytime, anywhere just <br /> with a single tap.
                MyDA makes your life <br /> always ready to go.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box sx={styles.mainBox}>
            <Box>
              <Image
                src={
                  "https://myda-documents.s3.ap-south-1.amazonaws.com/all-device-compatible.png"
                }
                width={150}
                height={125}
              />
            </Box>
            <Box sx={styles.rightText}>
              <Typography sx={styles.heading}>
                Compatible with all devices.
              </Typography>
              <Typography sx={styles.content}>
                MyDA is compatible with all the devices <br />
                either it is android or iOS. Start conneting <br /> today.
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.mainBox}>
            <Box>
              <Image
                src={
                  "https://myda-documents.s3.ap-south-1.amazonaws.com/contactless.png"
                }
                width={150}
                height={125}
              />
            </Box>
            <Box sx={styles.rightText}>
              <Typography sx={styles.heading}>Contactless.</Typography>
              <Typography sx={styles.content}>
                You can connect with anyone around you <br />
                with just a single tap on their phone.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Functions;
