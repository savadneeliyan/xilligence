import React from "react";
import Lottie from "react-lottie";
import AnimationNoItems from "./AnimationNoItems.json";
import { Box, Typography } from "@mui/material";

function TableNoItemComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationNoItems,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box sx={{ pt: "3.125rem", pointerEvents: "none " }}>
      <Lottie options={defaultOptions} height={"25rem"} width={"25rem"} />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.063rem",
          textTransform: "capitalize",
        }}
      >
      No Project selected
      </Typography>
    </Box>
  );
}

export default TableNoItemComponent;
