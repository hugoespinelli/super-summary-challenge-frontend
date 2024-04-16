import React from "react";
import { Box } from "@mui/material";
import logo from "../../bsfinder_logo.png";

function BSLogo() {
  return (
    <Box sx={{ textAlign: "center", marginBottom: 1 }}>
      <img src={logo} alt="bs-logo" style={{ maxWidth: "15%", height: "auto" }} />
    </Box>
  );
}

export default BSLogo;
