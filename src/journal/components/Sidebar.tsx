import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box component={"nav"}
         sx={{width: {sm: drawerWidth, flexShrink: {sm: 0}}}}
    >
      <Drawer variant={"permanent"}
              open
              sx={{display: {xs: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: {xs: drawerWidth}}}}
      >
        <Toolbar>
          <Typography variant={"h6"} noWrap component='div'>
            Luis Angel
          </Typography>
        </Toolbar>
        <Divider/>

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={month}/>
                    <ListItemText secondary={'Lorem ipsum dolo'}/>

                  </Grid>
                </ListItemButton>
              </ListItem>
              ))
          }
        </List>
      </Drawer>

    </Box>
  );
};

export default Sidebar;
