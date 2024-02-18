import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function About() {
  const styles = {};
  return (
    <Box>
      <Typography sx={styles.Htext}>ABOUT US</Typography>
      <hr></hr>
      <Typography sx={styles.Ptext}>
        We simplify networking!!
        <br />
        Myda is a tech based startup which simplifies networking with just a{" "}
        <br /> tap. Easy to connect, install, share and network. Makes life
        easier and its <br /> cool too. Myda is an acronym to My Digital Asset
        that took us 15 days or <br /> so to finalize and yes it was over a few
        friendly drinks and banter. Our <br /> core team comprises four
        childhood hostel friends that decided to <br /> revolutionise the world
        of networking and connections. Shubham Keyal- <br /> who handles our
        tech and is the brain behind the Myda, Kaustubh <br /> Chaturvedi- who
        handles operations and knows how to get the work <br /> done silently,
        Adesh- our legal backbone and the one who not just <br /> handles
        account but makes sure we spend wisely and lastly Pranjal- <br /> who
        handles sales and marketing, and makes sure we work as hard as <br /> he
        parties. We in all sincerity aim to grow and reach a wider audience.{" "}
        <br /> Our focus is and shall remain on basic fundamentals of what we{" "}
        <br /> decided to stand for and that is making connections in today's
        day and age easy, cool and <br /> simplified.
      </Typography>
    </Box>
  );
}
export default About;
