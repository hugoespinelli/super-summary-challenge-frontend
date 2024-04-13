import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar({ genres }) {
  return (
    <Box
      sx={{
        width: 250, // Width of the sidebar
        borderRight: "1px solid #ccc", // Optional: Add border for separation
        height: "100vh", // Full height of the viewport
        padding: 2, // Optional: Add padding
        overflowY: "auto", // Enable vertical scrolling if content overflows
      }}
    >
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
