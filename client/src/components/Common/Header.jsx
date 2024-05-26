import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  SelectFieldWithIconOnLeft,
  SelectFieldWithOutBorder,
} from "../InputFields/SelectInputFields";
import { useDispatch, useSelector } from "react-redux";
import { AllProjectsAction, GetProjectByIdAction } from "../../Redux/Action/ThemeAction";

function Header() {
  const dispatch = useDispatch();

  let { getAllProjectsSuccess } = useSelector((state) => state.getAllProjects);

  // get all projects items
  useEffect(() => {
    dispatch(AllProjectsAction());
  }, []);

  useEffect(() => {
    if (getAllProjectsSuccess) {
      let projectName = getAllProjectsSuccess[0]?.issueList?.map((item) => ({
        id: item.id,
        name: item.project_name,
      }));
      setProjects(projectName);
    }
  }, [getAllProjectsSuccess]);
  const [projects, setProjects] = useState();
  const [team, setTeam] = useState("Your Team");
  const [selectedProjects, setSelectedProjects] = useState();

  // select project
  const handleProjectChange = (e) => {
    let { value } = e.target;
    setSelectedProjects(value);
    dispatch(GetProjectByIdAction(value))
  };

  const handleTeamChange = (e) => {
    let { value } = e.target;
    setTeam(value);
  };



  let arr2 = ["Your Team", "Team One", "Team Two"];
  return (
    <Box
      sx={{
        width: "100%",
        height: "5.125rem",
        // backgroundColor: "#fff",
        backgroundColor: " hsl(210, 35%, 9%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.5rem",
        padding: "1.25rem",
        maxWidth: "calc(100% - 5rem)",
        mr: "0",
        ml: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
        }}
      >
        <Box sx={{ width: "20rem" }}>
          <SelectFieldWithIconOnLeft
            label={"Projects"}
            optionList={projects}
            value={selectedProjects}
            handleChange={handleProjectChange}
          />
        </Box>
        <SelectFieldWithOutBorder
          value={team}
          optionList={arr2}
          handleChange={handleTeamChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.625rem",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "0.813rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Monkey D Luffy
          </Typography>
          <Typography
            sx={{
              fontSize: "0.813rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Xilligence
          </Typography>
        </Box>
        <Box
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            objectFit: "cover",
            borderRadius: "0.625rem",
            "& img": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <img src="/avatar.png" alt="profile image" />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
