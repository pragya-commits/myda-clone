import PageLayout from "@/Components/Pagelayout";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import Address from "@/Components/Help/Address";
import Youtube from "@/Components/Help/Youtube";
import MyAccordian from "@/Components/Help/MyAccordian";
import { Box, Typography } from "@mui/material";
export default function Client() {
  const styles = {
    adMain: {
      textAlign: "center",
      background: "rgb(245,245,245)",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    address: {
      fontWeight: "100",
    },
    adHead: {
      fontSize: "40px",
      paddingBottom: "15px",
    },

    textimg: {
      display: "flex",
      paddingBottom: "50px",
    },
    text: {
      paddingRight: "2px",
      paddingLeft: "580px",
      fontWeight: "100",
    },
    adpara: {
      fontSize: "12px",
      color: "rgb(128,128,128)",
    },
    insta: {
      color: "red",
    },
    youtubeText: {
      fontSize: "20px",
    },
    youtubeSection: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "90px",
      paddingLeft: "90px",
      paddingRight: "90px",
      paddingTop: "90px",
    },
  };
  return (
    <PageLayout>
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
          </Typography>
          <Box sx={styles.textimg}>
            <Typography sx={styles.text}>
              DM us on Instagram : @ourmyda{" "}
            </Typography>
            <InstagramIcon sx={styles.insta} color="primary" />
          </Box>

          <Typography sx={styles.adpara}>
            By signing up via text, you agree to receive recurring automated
            promotional and personalized <br /> marketing text messages (e.g.
            cart reminders) from Myda at the cell number used when signing up.{" "}
            <br /> Consent is not a condition of any purchase. Reply HELP for
            help and STOP to cancel. Msg frequency <br /> varies. Msg & data
            rates may apply. View Terms & Privacy.
          </Typography>
        </Box>
        <Box sx={styles.youtubeSection}>
          <Box sx={styles.youcard}>
            <iframe
              width="276"
              height="146"
              src="https://www.youtube.com/embed/giBuXOowNes"
              title="What is MYDA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <Typography sx={styles.youtubeText}>What is MyDA</Typography>
          </Box>

          <Box>
            <iframe
              width="276"
              height="146"
              src="https://www.youtube.com/embed/0R7sUfseEoQ"
              title="How to Activate your MyDA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <Typography sx={styles.youtubeText}>
              How to activate your Myda
            </Typography>
          </Box>

          <Box>
            <iframe
              width="276"
              height="146"
              src="https://www.youtube.com/embed/zvTyuyNYKpU"
              title="How to Tap on Iphone and Android"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <Typography sx={styles.youtubeText}>
              How to tap an Iphone and Android
            </Typography>
          </Box>
        </Box>
        {/* 1st Accordian */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Troubleshooting Myda</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Iphone</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Android</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                How to tap your info to an older iphone(7,8,X)
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda taps people to the Myda Profile, not my profile
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda is sending notifications constantly
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Contact Us</Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
        {/* 2nd Accordian */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>General</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>General</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is Myda?</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Where do i put my Myda?</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Does the other person need a Myda or ab App to recieve my info?
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Do i need to pay monthly fee to use Myda?</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Can i have multiple Mydas linked to a single Myda account?
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What cases can Myda stick to?</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Press Inquires</Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
        {/* 3rd Accordian */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Compatible Phones</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How to tap your info to an older i phone(7,8,X)</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>will my Myda work under my phone case ?</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                How to tap your info to an older iphone(7,8,X)
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda taps people to the Myda Profile, not my profile
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda is sending notifications constantly
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Contact Us</Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
        {/* 4th Accordian */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Troubleshooting Myda</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Iphone</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Android</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                How to tap your info to an older iphone(7,8,X)
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda taps people to the Myda Profile, not my profile
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda is sending notifications constantly
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Contact Us</Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
        {/* 5th Accordian */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Troubleshooting Myda</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Iphone</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Not working on Android</Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                How to tap your info to an older iphone(7,8,X)
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda taps people to the Myda Profile, not my profile
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                My Myda is sending notifications constantly
              </Typography>
            </AccordionSummary>

            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Contact Us</Typography>
            </AccordionSummary>
          </AccordionDetails>
        </Accordion>
      </Box>
    </PageLayout>
  );
}
