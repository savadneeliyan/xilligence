import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

function Sidebar() {
  const navigate = useNavigate();
  const menus = [
    {
      menu: <HomeIcon />,
      url: "/menu",
      title: "Dashboard",
    },
    {
      menu: <FeedIcon />,
      url: "/menu",
      title: "Project Dashboard",
    },
    {
      menu: <ArticleIcon />,
      url: "/menu",
      title: "My work",
    },
    {
      menu: <KeyboardIcon />,
      url: "/menu",
      title: "Board",
    },
    {
      menu: <DashboardIcon />,
      url: "/menu",
      title: "Backlog",
    },
    {
      menu: <AssignmentIndIcon />,
      url: "/menu",
      title: "issues",
    },
    {
      menu: <ContentPasteIcon />,
      url: "/menu",
      title: "Repporting to me",
    },
    {
      menu: <NoteAltIcon />,
      url: "/menu",
      title: "Project Settings",
    },
  ];
  return (
    <>
      <Box sx={{ width: "5rem", height: "100%" }}></Box>
      <Box
        sx={{
          // backgroundColor: "#fff",
          backgroundColor: " hsl(210, 35%, 9%)",
          // filter: "drop-shadow(0.125rem 0.125rem 0.625rem #59667a8f)",
          boxShadow: "0 0 21px 0 #59667a1a",
          position: "absolute",
          left: "0",
          top: 0,
          bottom: 0,
        }}
      >
        <Box
          sx={{
            width: "4.5rem",
            height: "4.125rem",
            pl: "0.3rem",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "contain",
            },
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img src="/xilligence-logo.png" alt="Logo image" />
        </Box>
        <Box
          sx={{
            // paddingRight: "0.688rem",
            // backgroundColor: "#fff",
            backgroundColor: " hsl(210, 35%, 9%)",
            maxHeight: "calc(100% - 4.125rem)",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              my: "1.188rem",
              display: "flex",
              flexDirection: "column",
              // gap: "0.438rem",
              borderTop: "0.063rem solid rgba(61, 71, 81, 0.3)",
            }}
          >
            {menus.map((item, i) => (
              <Box
                key={i}
                sx={{
                  padding: "0.813rem",
                  borderBottom: "0.063rem solid rgba(61, 71, 81, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // pl: "2.063rem",
                  background:
                    i === 4 ? "hsl(210, 3%, 19%)" : "hsl(210, 35%, 9%)",
                  borderRight: `1px solid 
                    ${i === 4 ? "#fff" : "hsl(210, 35%, 9%)"}`,
                  // borderRadius: "0rem 0.625rem 0.625rem 0rem",
                  cursor: "pointer",
                  transition: "0.5s ease",
                  maxWidth: "4.563rem",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "hsl(210, 3%, 19%)",
                    borderRight: "1px solid  #fff",
                  },
                  "& svg": {
                    width: "1.125rem",
                    height: "1.125rem",
                  },
                }}
                // onClick={() => navigate(item.url)}
              >
                {item.menu}
                <Typography sx={{ fontSize: "0.675rem", textAlign: "center" }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
