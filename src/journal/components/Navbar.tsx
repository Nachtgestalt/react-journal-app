import React from 'react';
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {LogoutOutlined, MenuOutlined} from "@mui/icons-material";

const Navbar = ({drawerWidth}) => {
  return (
    <AppBar position="fixed"
            sx={{
              width: {sm: `calc(100% - ${drawerWidth}px)`, md: `calc(100% - ${drawerWidth}px)`, lg: `calc(100% - ${drawerWidth}px)`},
              ml: {sm: drawerWidth, md: drawerWidth, lg: drawerWidth},
            }}
    >
      <Toolbar>
        <IconButton color={"inherit"}
                    edge="start"
                    sx={{mr:2, display: {sm:'none'}}}
        >
          <MenuOutlined/>
        </IconButton>
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <Typography variant={"h6"} noWrap >JournalApp</Typography>
          <IconButton color={"error"}>
            <LogoutOutlined/>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
