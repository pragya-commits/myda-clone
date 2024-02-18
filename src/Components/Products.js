import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ProductCard from "./Shops/ProductCard";
function Products() {
  const styles = {
    cardMain: {
      textAlign: "center",
    },
    Cards: {
      display: "flex",
      background: "white",
      color: "black",
      // paddingRight: "80px",
      // paddingLeft: "80px",
      // alignItem: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      // in 1 row show 4 cards
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",

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



  const products = [
    {
      name: "Business Cards-Black Matte",
      price: 599,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.46329096796249725-ezgif.com-gif-maker.gif"
    },
    {
      name: "NFC Cards-white",
      price: 599,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.7385299592129813-package%20(1).png"
    },
    {
      name: "Business Card-Black Matte",
      price: 599,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.3304137034438086-003%20(1).png"
    },
    {
      name: "Business Cards-White",
      price: 599,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.5335067616621598-004%20(1).png"
    },
    {
      name: "Phone Ring-Black",
      price: 499,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.5560472080037671-ring%20on%20phone_black.png"
    },
    {
      name: "Phone Ring-Rose Gold",
      price: 499,
      image: "https://myda-documents.s3-ap-south-1.amazonaws.com/picture/0.34717519049763035-ring%20on%20phone_rose%20gold.png"
    },
    {
      name: "Key Chain-Black",
      price: 499,
      image: "https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.6929204477024355-keychain_front-and-back_black.png"
    },
    {
      name: "Key Chain White",
      price: 499,
      image: "https://nural-sales-document-bucket.s3-ap-south-1.amazonaws.com/picture/0.7146742784067155-keychain_front-and-back_white.png"
    },
  ]

  return (
    <Box sx={styles.ProductPage}>
      <Typography sx={styles.mainHeading}>See our top products!</Typography>

      <Box sx={styles.Cards}>
        {/* <ProductCard /> */}
        {products.map((product, item) => {
          return <ProductCard key={item} name={product.name} price={product.price} image={product.image} />
        })}
      </Box>

      <Button sx={styles.Pbtn}>SEE ALL PRODUCTS</Button>

    </Box>
  );
}
export default Products;
