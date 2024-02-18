import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
function Address() {
  const styles = {};
  return (
    <Box>
      <Box sx={styles.adMain}>
        <Typography sx={styles.adHead}>How can we Help ?</Typography>
        <Typography sx={styles.address}>
          Business Name: Pink Melon Solution LLP <br />
          Address: 198/3 Sabzi mandi, Paltan Bazar, Pratapgarh (UP) 230001{" "}
          <br />
          Call Us: +91-6306834003
          <br />
          Email us : help@myda.co.in
          <br />
          DM us on Instagram : @ourmyda{" "}
          <InstagramIcon sx={styles.insta} color="primary" />
        </Typography>

        <Typography sx={styles.adpara}>
          By signing up via text, you agree to receive recurring automated
          promotional and personalized <br /> marketing text messages (e.g. cart
          reminders) from Myda at the cell number used when signing up. <br />{" "}
          Consent is not a condition of any purchase. Reply HELP for help and
          STOP to cancel. Msg frequency <br /> varies. Msg & data rates may
          apply. View Terms & Privacy.
        </Typography>
      </Box>
    </Box>
  );
}
export default Address;
