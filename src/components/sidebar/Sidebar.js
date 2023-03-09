import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import "../../App.css";



const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box className="sidebar">
      <div variant="permanent" open={open}>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx  ={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <HomeIcon sx={{ color: "#fff", px: 8 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </Box>
  );
};
export default Sidebar;
