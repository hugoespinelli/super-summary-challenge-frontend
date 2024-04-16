import React from "react";

import logonyt from "../../poweredby_nytimes.png";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function Sidebar({ genres }) {
  return (
    <Box
      sx={{
        minWidth: 220,
        borderRight: "1px solid #FFE5E5",
        height: "100%",
        padding: 2,
        paddingTop: "15%",
      }}
    >
      <Typography variant="h6" color="text.primary" align="left">
        Genres
      </Typography>
      <List dense>
        {genres.map((genre) => (
          <ListItem
            key={genre.display_name}
            alignItems="flex-start"
            divider
            data-testid="list-item-genre"
          >
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
          alt="Logo-nyt"
          style={{ maxWidth: "70%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
