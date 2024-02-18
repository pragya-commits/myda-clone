import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import React from 'react'

export default function ProductCard(props) {

  console.log({ props })


  const styles = {
    cardMain: {
      textAlign: "center",
      marginTop: "20px",
    },
    cc: {
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
      // padding: "40px",

      paddingBottom: "15px",
    },
    btn: {
      background: "rgb(40,40,40)",
      borderRadius: "20px",
      // paddingRight: "30px",
      // paddingLeft: "30px",
    },
    cardText: {
      paddingBottom: "5px",
    },
  }

  return (
    <Box sx={styles.cardMain}>
      <Image
        src={
          props.image
        }
        width={234.3}
        height={149.99}
        alt="Business Cards-Black Matte"
      />
      <Box sx={styles.cc}>
        <Box sx={styles.cardContent}>
          <Typography sx={styles.cardHead}>
            {props.name}
          </Typography>
          <Typography sx={styles.cardText}>Rs. {props.price} </Typography>
          <Button variant="contained" sx={styles.btn}>
            ADD TO CART
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
