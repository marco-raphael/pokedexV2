import React from "react";
import { Grid, Paper, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container height={"100vh"}>
      <Grid
        border={"4px solid black"}
        width={"100%"}
        height={"15vh"}
        textAlign={"center"}
      >
        <h1>Pokedex</h1>
      </Grid>

      <Grid
        position={"absolute"}
        right={0}
        bottom={0}
        height={"85vh"}
        width={"80%"}
        border={"4px solid green"}
        display={"flex"}
        justifyContent={"flex-end"}
        gap={"3%"}
      >
        <Grid
          margin={"20px"}
          border={"4px solid green"}
          width={"30%"}
          height={"200px"}
        >
          Card
        </Grid>

        <Grid
          margin={"20px"}
          border={"4px solid green"}
          width={"30%"}
          height={"200px"}
        >
          Card
        </Grid>

        <Grid
          margin={"20px"}
          border={"4px solid green"}
          width={"30%"}
          height={"200px"}
        >
          Card
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HomePage;
