import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function MyDA() {
  const styles = {
    Itext: {
      display: "flex",
    },
    Mytext: {
      paddingLeft: "15px",
    },
    Mybox: {
      paddingLeft: "60px",
    },
    mainBox: {
      // background: "rgb(245,245,245)",
    },
  };
  return (
    <Box sx={styles.mainBox}>
      <Typography> What’s New with MyDA? </Typography>
      <Box sx={styles.Mybox}>
        <Typography>Features that Pop</Typography>

        <Box sx={styles.Itext}>
          <Image
            src={"https://myda.co.in/share-with-anyone.png"}
            width={45}
            height={45}
          />
          <Typography sx={styles.Mytext}>
            Share with anyone! Others don’t need a MYDA or an app to <br />
            receive your info
          </Typography>
        </Box>

        <Box sx={styles.Itext}>
          <Image
            src={"https://myda.co.in/compatible.png"}
            width={45}
            height={45}
          />
          <Typography sx={styles.Mytext}>
            Compatible with iOS and Android phones
          </Typography>
        </Box>

        <Box sx={styles.Itext}>
          <Image
            src={"https://myda.co.in/instant-share.png"}
            width={45}
            height={45}
          />
          <Typography sx={styles.Mytext}>
            Instantly share social media, contact info, payment apps, <br />{" "}
            music, and more
          </Typography>
        </Box>

        <Box sx={styles.Itext}>
          <Image
            src={"https://myda.co.in/compatible.png"}
            width={45}
            height={45}
          />
          <Typography sx={styles.Mytext}>
            Use MYDA Direct to share just one link instead of your full profile
          </Typography>
        </Box>

        <Box sx={styles.Itext}>
          <Image src={"https://myda.co.in/pro.png"} width={45} height={45} />
          <Typography sx={styles.Mytext}>
            Unlock a suite of new features with Myda Pro
          </Typography>
        </Box>
      </Box>
      <Image
        src={"https://myda.co.in/MyDA-vs-business-cards_02.png"}
        width={45}
        height={45}
      />
    </Box>
  );
}
export default MyDA;
