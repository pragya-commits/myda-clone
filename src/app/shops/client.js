import Products from "@/Components/Products";
import PageLayout from "@/Components/Pagelayout";
import { Typography, TextField, Box } from "@mui/material";
import React from "react";

export default function Client() {
  const styles = {
    textfield: {
      background: "white",
      color: "black",
    },
    fieldtext: {
      background: "white",
      color: "black",
      fontSize: "30px",
      fontWeight: "600",
      paddingRight: "20px",
    },
    searchBox: {
      background: "white",
      color: "black",
      display: "flex",
      paddingRight: "50px",
      paddingLeft: "150px",
      paddingBottom: "30px",
    },
  };
  return (
    <PageLayout>
      <Box sx={styles.searchBox}>
        <Typography sx={styles.fieldtext}>MyDA Products</Typography>
        <TextField
          sx={styles.textfield}
          id="outlined-basic"
          label="Search MyDA Products"
          variant="outlined"
        />
      </Box>
      <hr></hr>
      <Products />
    </PageLayout>
  );
}
