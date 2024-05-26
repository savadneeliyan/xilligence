import { Box, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";

function TaskList({ array, selected, handleSelected }) {
  return array?.map((item, i) => (
    <Box
      key={item?.id}
      sx={{
        padding: "1.25rem",
        borderBottom: "0.063rem solid rgba(61, 71, 81, 0.3)",
        cursor: "pointer",
        backgroundColor:
          selected === i ? "hsl(210, 3%, 19%)" : "rgba(29, 33, 38, 0.4)",
        transition: "0.5s ease",
        "&:hover": {
          backgroundColor: "hsl(210, 3%, 19%)",
        },
      }}
      onClick={() => {
        handleSelected(i, item?.id);
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      >
        {item?.summary}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.313rem" }}>
        <BookmarkIcon sx={{ fill: "green", fontSize: "1rem" }} />
        <Typography
          sx={{
            color: "#fff",
            fontSize: "0.625rem",
          }}
        >
          {item?.short_key + "-" + item?.issue_no}
        </Typography>
      </Box>
    </Box>
  ));
}

export default TaskList;
