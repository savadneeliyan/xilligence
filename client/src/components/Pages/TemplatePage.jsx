import React, { useEffect, useState } from "react";
import {
  RegularSelectField,
  SelectFieldWithOutBorder,
} from "../InputFields/SelectInputFields";
import CachedIcon from "@mui/icons-material/Cached";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TaskList from "./ProjectComponents/TaskList";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TaskData } from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProjectsAction,
  GetTaskDetailsAction,
} from "../../Redux/Action/ThemeAction";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TableNoItemComponent from "../Common/TableNoItemComponent";
import DateAndTimePicker from "../InputFields/DateAndTimePicker";

function TemplatePage() {
  let arr = ["Order By", "Date", "Name"];
  const dispatch = useDispatch();
  let { getProjectbyIdSuccess } = useSelector(
    (state) => state.getProjectsReducerById
  );
  let { getTaskDetailsSuccess } = useSelector((state) => state.getTaskDetails);

  // states
  const [selected, setSelected] = useState();
  const [taskList, setTaskList] = useState();
  const [taskDetails, setTaskDetails] = useState();
  const [discriptionEdit, setDiscriptionEdit] = useState(false);
  const [taskNameEdit, setTaskNameEdit] = useState(false);

  useEffect(() => {
    if (getProjectbyIdSuccess) {
      let taskToList = getProjectbyIdSuccess[0]?.issueList;
      setTaskList(taskToList);
    }
  }, [getProjectbyIdSuccess]);

  useEffect(() => {
    if (getTaskDetailsSuccess) {
      setTaskDetails(getTaskDetailsSuccess);
    }
  }, [getTaskDetailsSuccess]);

  // highlighting selected Task
  const handleSelected = (index, id) => {
    setSelected(index);
    dispatch(GetTaskDetailsAction(id));
  };

  return (
    <>
      {taskList ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "25rem 1fr",
            gap: "1.5rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SelectFieldWithOutBorder optionList={arr} value={"Order By"} />
              <CachedIcon
                sx={{
                  fontSize: "1rem",
                }}
              />
            </Box>
            <Box
              sx={{
                border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                height: "calc(100vh - 11.125rem)",
                overflow: "scroll",
              }}
            >
              <TaskList
                selected={selected}
                array={taskList}
                handleSelected={handleSelected}
              />
            </Box>
          </Box>

          {taskDetails ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                mt: "2rem",
                height: "calc(100vh - 11.125rem)",
                overflow: "scroll",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "0.625rem",
                  }}
                >
                  <Box
                    sx={{
                      color: "green",
                      width: "2rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "green",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <BookmarkIcon
                      sx={{ fill: "#82c582", fontSize: "1.5rem" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.825rem",
                      fontWeight: "700",
                    }}
                  >
                    {taskDetails?.data[0]?.short_key +
                      "-" +
                      taskDetails?.data[0]?.issue_no}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.625rem",
                    "& input": {
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                      fontSize: "1.5rem",
                      width: "100%",
                    },
                  }}
                >
                  {!taskNameEdit && (
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                      }}
                    >
                      {taskDetails?.data[0]?.summary}
                    </Typography>
                  )}
                  {taskNameEdit && (
                    <input placeholder={taskDetails?.data[0]?.summary} />
                  )}
                  <EditNoteIcon
                    sx={{ fill: "#db9c23", cursor: "pointer" }}
                    onClick={() => setTaskNameEdit(!taskNameEdit)}
                  />
                </Box>

                <Box
                  sx={{
                    mb: "2rem",
                    "& input": {
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                      pl: "1.5rem",
                      fontSize: "0.875rem",
                      width: "100%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.625rem",
                      mb: "0.875rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                      }}
                    >
                      Discription
                    </Typography>
                    <EditNoteIcon
                      sx={{ fill: "#db9c23", cursor: "pointer" }}
                      onClick={() => setDiscriptionEdit(!discriptionEdit)}
                    />
                  </Box>
                  {!discriptionEdit && (
                    <Box
                      sx={{
                        "& *": {
                          fontSize: "0.875rem",
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: taskDetails.data[0].description,
                      }}
                    ></Box>
                  )}
                  {/* {taskDetails?.data[0]?.description} */}
                  {discriptionEdit && (
                    <input placeholder="Task Description Here..." />
                  )}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Accordion
                    sx={{
                      backgroundColor: "transparent",
                      border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                      mt: "0 !important",
                      "& .MuiAccordionSummary-content": {
                        color: "rgba(255, 255, 255, 0.7)",
                        my: "1rem !important",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ fill: "#db9c23" }} />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                      sx={{
                        padding: "0 1rem",
                        color: "red",
                        minHeight: "3rem !important",
                        fontWeight: "600",
                      }}
                    >
                      Attachments
                    </AccordionSummary>
                  </Accordion>

                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "transparent",
                      border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                      mt: "0 !important",
                      "& .MuiAccordionSummary-content": {
                        color: "rgba(255, 255, 255, 0.7)",
                        my: "1rem !important",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ fill: "#db9c23" }} />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                      sx={{
                        padding: "0 1rem",
                        color: "red",
                        minHeight: "3rem !important",
                        fontWeight: "600",
                      }}
                    >
                      Comments
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        borderTop: "0.063rem solid rgba(61, 71, 81, 0.3)",
                        padding: "1rem",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "2rem 1fr",
                            gap: "1rem",
                            padding: "2rem 0.5rem",
                            "& textarea": {
                              backgroundColor: "transparent",
                              border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                              resize: "none",
                              width: "100%",
                              outline: "none",
                              padding: "0.63rem",
                              fontSize: "0.875rem",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: "2rem",
                              height: "2rem",
                              borderRadius: "1rem",
                              "& img": {
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              },
                            }}
                          >
                            <img src="/avatar.png" />
                          </Box>
                          <textarea rows={5} placeholder="Add a Comment" />
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "12.5rem",
                  }}
                >
                  <RegularSelectField
                    value={"To Do"}
                    optionList={["To Do", "IN PROGRESS", "COMPLETED"]}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "transparent",
                      border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                      mt: "0 !important",
                      "& .MuiAccordionSummary-content": {
                        color: "rgba(255, 255, 255, 0.7)",
                        my: "1rem !important",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                      sx={{
                        padding: "0 1rem",
                        color: "red",
                        minHeight: "3rem !important",
                        fontWeight: "600",
                      }}
                    >
                      Details
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        borderTop: "0.063rem solid rgba(61, 71, 81, 0.3)",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                          "& .MuiFormControl-root": {
                            maxWidth: "90%",
                          },
                        }}
                      >
                        <Typography sx={{ fontSize: "0.875rem" }}>
                          Assignee
                        </Typography>
                        <RegularSelectField
                          value={"Assign"}
                          optionList={["Assign"]}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.875rem" }}>
                          Labels
                        </Typography>
                        <RegularSelectField
                          value={"Labels"}
                          optionList={["Labels"]}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.875rem" }}>
                          Epic
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                            "& .MuiFormControl-root": {
                              maxWidth: "90%",
                            },
                          }}
                        >
                          <RegularSelectField
                            value={"Epic"}
                            optionList={["Epic"]}
                          />
                          <AddCircleOutlineIcon
                            sx={{
                              fontSize: "1.5rem",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Sprint
                          </Typography>
                          <RegularSelectField
                            value={"Sprint"}
                            optionList={["Sprint"]}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Reporter
                          </Typography>
                          <RegularSelectField
                            value={"Monkey D Luffy"}
                            optionList={["Monkey D Luffy"]}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            "& input": {
                              border:
                                "1px solid rgba(61, 71, 81, 0.3) !important",
                              outline: "0",
                              backgroundColor: "transparent",
                              borderRadius: "0.2rem",
                              margin: "0",
                              fontSize: "0.813rem",
                              padding: "0.688rem 1rem",
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Story Point Estimate
                          </Typography>
                          <input value={"Story Point Estimate"} />
                        </Box>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            "& input": {
                              border:
                                "1px solid rgba(61, 71, 81, 0.3) !important",
                              outline: "0",
                              backgroundColor: "transparent",
                              borderRadius: "0.2rem",
                              margin: "0",
                              fontSize: "0.813rem",
                              padding: "0.688rem 1rem",
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Starting Date
                          </Typography>
                          <DateAndTimePicker />
                        </Box>

                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            "& input": {
                              border:
                                "1px solid rgba(61, 71, 81, 0.3) !important",
                              outline: "0",
                              backgroundColor: "transparent",
                              borderRadius: "0.2rem",
                              margin: "0",
                              fontSize: "0.813rem",
                              padding: "0.688rem 1rem",
                            },
                          }}
                        >
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Ending Date
                          </Typography>
                          <DateAndTimePicker />
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "transparent",
                      border: "0.063rem solid rgba(61, 71, 81, 0.3)",
                      mt: "0 !important",
                      "& .MuiAccordionSummary-content": {
                        color: "rgba(255, 255, 255, 0.7)",
                        my: "1rem !important",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                      sx={{
                        padding: "0 1rem",
                        color: "red",
                        minHeight: "3rem !important",
                        fontWeight: "600",
                      }}
                    >
                      History
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        borderTop: "0.063rem solid rgba(61, 71, 81, 0.3)",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "1rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              background: "#db9c23",
                              borderRadius: "50%",
                            }}
                          ></Box>
                          <Box
                            sx={{
                              height: "calc(100% - 1rem)",
                              background: "#fff",
                              width: "0.125rem",
                            }}
                          ></Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          }}
                        >
                          <Box>
                            <Typography sx={{ fontSize: "0.875rem" }}>
                              MONKEY D LUFFY (25 may 2024 1:25 PM)
                            </Typography>
                            <Typography sx={{ fontSize: "0.875rem" }}>
                              Issue discription changed
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "0.675rem" }}>
                              Task Discription Here ...{" "}
                              <ArrowForwardIcon sx={{ fontSize: "0.675rem" }} />{" "}
                              Task Discription Here...
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              No task items selected
            </Box>
          )}
        </Box>
      ) : (
        <TableNoItemComponent />
      )}
    </>
  );
}

export default TemplatePage;
