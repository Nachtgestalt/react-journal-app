import React from 'react';
import {Grid, Typography} from "@mui/material";
import {StarOutline, StartOutlined} from "@mui/icons-material";

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent={"center"}
      sx={{minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3}}
    >
      <Grid item>
        <StarOutline sx={{fontSize: 100, color: 'white'}}></StarOutline>
      </Grid>
      <Grid item>
        <Typography color={"white"} variant={"h5"}> Selecciona o crea una entrada</Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
