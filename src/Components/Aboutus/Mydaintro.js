import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Mydaintro() {
  const styles = {
    Htext: {
      fontSize: "40px",
    },
  };
  return (
    <Box>
      <Typography sx={styles.Htext}>WHAT IS MYDA?</Typography>
      <hr></hr>
      <Typography sx={styles.Ptext}>
        MY DIGITAL ASSET, aka Myda.
        <br />
        Our wish to have everything in one place, came into existence through{" "}
        <br /> phones and apps, and now imagine, all of it is a tap away….
        Interesting, <br /> right? Now, you can share all your social profile,
        contacts, and business <br /> profile with just a tap and a little bit
        of consent. As someone once said, <br /> your network is your net worth,
        Myda is the medium that makes it <br /> happen with just a tap away. It
        simplifies networking, makes it more <br /> efficient, and does it at a
        light's speed. The introvert in you won't shy <br /> away, and the
        extrovert in you will be limitless.
      </Typography>
    </Box>
  );
}
export default Mydaintro;
