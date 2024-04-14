import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
} from "@mui/material";
import LinkButton from "../linkButton/linkButton";

function BookCard({ title, author, bookImage, url, theme, labelNumber }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 440,
        position: "relative",
      }}
      variant="outlined"
    >
      <Chip
        label={labelNumber + 1}
        variant="outlined"
        sx={{
          position: "absolute",
          top: "61%",
          left: "5%",
          color: theme.palette.ochre.main,
        }}
      />
      <CardMedia sx={{ height: 250 }} image={bookImage} title={title} />

      <CardContent sx={{ height: "23%", paddingLeft: "30%" }}>
        <Typography
          variant="button"
          component="div"
          align="left"
          sx={{
            color: theme.palette.ochre.dark,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          by {author}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <LinkButton
          style={{
            color: theme.palette.ochre.light,
            backgroundColor: theme.palette.ochre.darkContrast,
          }}
          url={url}
          buttonText="Buy"
        />
      </CardActions>
    </Card>
  );
}

export default BookCard;
