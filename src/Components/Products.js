import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
function Products() {
  const styles = {
    cardMain: {
      textAlign: "center",
    },
    Cards: {
      display: "flex",
      background: "white",
      color: "black",
      paddingRight: "80px",
      paddingLeft: "80px",
      alignItem: "center",
      justifyContent: "space-between",
    },
    cardHead: {
      fontSize: "18px",
      fontWeight: "600",
      paddingBottom: "5px",
    },
    cardContent: {
      padding: "40px",
      paddingBottom: "15px",
    },
    btn: {
      background: "rgb(40,40,40)",
      borderRadius: "20px",
      paddingRight: "30px",
      paddingLeft: "30px",
    },
    cardText: {
      paddingBottom: "5px",
    },
    mainHeading: {
      fontSize: "55px",
      background: "white",
      color: "black",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "10px",
    },
    Pbtn: {
      background: "rgb(40,40,40)",
      color: "white",
      borderRadius: "20px",
      marginLeft: "42%",
      marginTop: "10px",
      paddingLeft: "25px",
      paddingRight: "25px",
      paddingTop: "12px",
      paddingBottom: "12px",
      marginBottom: "20px",
      fontSize: "18px",
    },
    ProductPage: {
      // background: "rgb(245,245,245)",
      color: "black",
    },
  };
  return (
    <Box sx={styles.ProductPage}>
      <Typography sx={styles.mainHeading}>See our top products!</Typography>
      <Box sx={styles.Cards}>
        {/* <Typography>See our top products!</Typography> */}
        {/* CARD 1 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.46329096796249725-ezgif.com-gif-maker.gif"
            }
            width={234.3}
            height={149.99}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>
                Business Cards-Black Matte
              </Typography>
              <Typography sx={styles.cardText}>Rs. 599 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 2 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.7385299592129813-package%20(1).png"
            }
            width={95.67}
            height={149.98}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>NFC Cards-white</Typography>
              <Typography sx={styles.cardText}>Rs. 599 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 3 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.3304137034438086-003%20(1).png"
            }
            width={167.46}
            height={149.99}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>
                Business Card-Black Matte
              </Typography>
              <Typography sx={styles.cardText}>Rs. 599 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 4 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.5335067616621598-004%20(1).png"
            }
            width={167.46}
            height={149.99}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>Business Cards-White</Typography>
              <Typography sx={styles.cardText}>Rs. 599 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.Cards}>
        {/* <Typography>See our top products!</Typography> */}
        {/* CARD 5 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.5560472080037671-ring%20on%20phone_black.png"
            }
            width={150}
            height={150}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>Phone Ring-Black</Typography>
              <Typography sx={styles.cardText}>Rs. 499 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 6 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.34717519049763035-ring%20on%20phone_rose%20gold.png"
            }
            width={150}
            height={150}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>Phone Ring-Rose Gold</Typography>
              <Typography sx={styles.cardText}>Rs. 499 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 7 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.6929204477024355-keychain_front-and-back_black.png"
            }
            width={150}
            height={150}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>Key Chain-Black</Typography>
              <Typography sx={styles.cardText}>Rs. 499 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
        {/* CARD 8 */}
        <Box sx={styles.cardMain}>
          <Image
            src={
              "https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.7146742784067155-keychain_front-and-back_white.png"
            }
            width={150}
            height={150}
          />
          <Box sx={styles.cc}>
            <Box sx={styles.cardContent}>
              <Typography sx={styles.cardHead}>Key Chain White</Typography>
              <Typography sx={styles.cardText}>Rs. 499 </Typography>
              <Button variant="contained" sx={styles.btn}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button sx={styles.Pbtn}>SEE ALL PRODUCTS</Button>
    </Box>
  );
}
export default Products;
