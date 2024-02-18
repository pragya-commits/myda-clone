import Mydaintro from "@/Components/Aboutus/Mydaintro";
import PageLayout from "@/Components/Pagelayout";
import { Typography, TextField, Box } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Client() {
  const styles = {
    Htext: {
      fontSize: "30px",
      textAlign: "center",
      fontWeight: "600",
      paddingBottom: "10px",
    },
    mainBox: {
      background: "rgb(245,245,245)",
      color: "black",
      textAlign: "center",
      paddingBottom: "100px",
      paddingTop: "30px",
      alignItem: "center",
    },
    Ptext: {
      fontSize: "20px",
    },
    aboutImg: {
      display: "flex",
    },
    aboutImg: {
      alignItem: "center",
      paddingTop: "40px",
    },
  };
  return (
    <PageLayout>
      <Box sx={styles.mainBox}>
        <Typography sx={styles.Htext}>WHAT IS MYDA?</Typography>
        <hr></hr>
        <Typography sx={styles.Ptext}>
          MY DIGITAL ASSET, aka Myda.
          <br />
          Our wish to have everything in one place, came into existence through{" "}
          <br /> phones and apps, and now imagine, all of it is a tap away….
          Interesting, <br /> right? Now, you can share all your social profile,
          contacts, and business <br /> profile with just a tap and a little bit
          of consent. As someone once said, <br /> your network is your net
          worth, Myda is the medium that makes it <br /> happen with just a tap
          away. It simplifies networking, makes it more <br /> efficient, and
          does it at a light's speed. The introvert in you won't shy <br />{" "}
          away, and the extrovert in you will be limitless.
        </Typography>
      </Box>

      <Box sx={styles.mainBox}>
        <Typography sx={styles.Htext}>ABOUT US</Typography>
        <hr></hr>
        <Typography sx={styles.Ptext}>
          We simplify networking!!
          <br />
          Myda is a tech based startup which simplifies networking with just a{" "}
          <br /> tap. Easy to connect, install, share and network. Makes life
          easier and its <br /> cool too. Myda is an acronym to My Digital Asset
          that took us 15 days or <br /> so to finalize and yes it was over a
          few friendly drinks and banter. Our <br /> core team comprises four
          childhood hostel friends that decided to <br /> revolutionise the
          world of networking and connections. Shubham Keyal- <br /> who handles
          our tech and is the brain behind the Myda, Kaustubh <br /> Chaturvedi-
          who handles operations and knows how to get the work <br /> done
          silently, Adesh- our legal backbone and the one who not just <br />{" "}
          handles account but makes sure we spend wisely and lastly Pranjal-{" "}
          <br /> who handles sales and marketing, and makes sure we work as hard
          as <br /> he parties. We in all sincerity aim to grow and reach a
          wider audience. <br /> Our focus is and shall remain on basic
          fundamentals of what we <br /> decided to stand for and that is making
          connections in today's day and age easy, cool and <br /> simplified.
        </Typography>
      </Box>

      <Box sx={styles.mainBox}>
        <Typography sx={styles.Htext}>OUR TEAM</Typography>
        <hr></hr>
        <Box sx={styles.aboutImg}>
          <Image
            src={"https://myda.co.in/Shubham.png"}
            width={270}
            height={400}
          />
        </Box>
        <span>
          <b>Shubham Keyal </b> <br />
          CEO and Founder
        </span>
      </Box>
    </PageLayout>
  );
}
