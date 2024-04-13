import React from "react";
import logo from "../../bsfinder_logo.png"
import logonyt from "../../poweredby_nytimes.png"
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar({ genres }) {
  return (
    <Box
      sx={{
        minWidth: 220,
        borderRight: "1px solid #ccc",
        height: "100%",
        padding: 2,
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "70%", height: "auto" }}
        />
      </Box>
      <List dense>
        {genres.map((genre) => (
          <ListItem key={genre.display_name} alignItems="flex-start" divider>
            <Typography align="left" variant="caption">
              {genre.display_name}
            </Typography>
            <ListItemText />
          </ListItem>
        ))}
      </List>
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <img
          src={logonyt}
          alt="Logo"
          style={{ maxWidth: "70%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
