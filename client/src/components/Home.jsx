import { Box } from "@mui/material";
import React from "react";
import TemplatePage from "./Pages/TemplatePage";

function Home() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 7.125rem)",
        width: "calc(100vw - 4.813rem)",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          px: "0.938rem",
          width: "100%",
        }}
      >
        <TemplatePage />
      </Box>
    </Box>
  );
}

export default Home;
