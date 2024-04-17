import "./hero.css";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Hero({ heroImage, headline, subtitle }) {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.ochre.light, height: "350px" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={6} sx={{ padding: "5%" }}>
          <Typography
            variant="h3"
            color="text.primary"
            align="left"
            gutterBottom
            className="fadeInUp"
          >
            {headline}
          </Typography>
          <Typography
            variant="subtitle2"
            align="left"
            color="text.secondary"
            className="fadeInUp"
          >
            {subtitle}
          </Typography>
        </Grid>

        <Grid item sm={6} sx={{ position: "relative", height: "100%" }}>
          <img
            src={heroImage}
            alt="hand holding books"
            className="fadeInUp"
            style={{
              height: "100%",
              position: "absolute",
              bottom: "0px",
              left: "10%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
