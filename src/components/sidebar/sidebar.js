import React from "react";
import logo from "../../bsfinder_logo.png"
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar({ genres }) {
  return (
    <Box
      sx={{
        minWidth: 250,
        borderRight: "1px solid #ccc",
        height: "100vh",
        padding: 2,
        overflowY: "auto",
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
    </Box>
  );
}

export default Sidebar;
