import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

export const SelectFieldWithIconOnLeft = ({
  value,
  label,
  handleChange,
  optionList,
  error,
  helperText,
  component,

  ...props
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiOutlinedInput-input": {
          padding: "0.688rem 1rem",
        },
        "& .MuiInputLabel-root  ": {
          transform: " translate(0.875rem, 0.75rem) scale(1)",
          color: "rgba(255, 255, 255, 0.7) !important",
        },
        "& .MuiInputLabel-animated[data-shrink='true'] ": {
          transform: "translate(0.875rem, -0.563rem) scale(0.75)",
        },
        "& fieldset ": {
          borderColor: "rgba(61, 71, 81, 0.3) !important",
          outline: "none",
          borderRadius: "0.2rem",
          borderWidth: "0.063rem !important",
        },
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {optionList?.map((item,i) => (
          <MenuItem key={item.id} value={item.id}>
            <Box
              sx={{ display: "flex", gap: "0.625rem", alignItems: "center" }}
            >
              <Box
                sx={{ width: "1rem", height: "1rem", background: "green" }}
              ></Box>
              {item.name}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectFieldWithOutBorder = ({
  optionList,
  value,
  handleChange,
  ...props
}) => {
  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={value}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      onChange={handleChange}
      label="Age"
      IconComponent={() => (
        <KeyboardArrowDownIcon
          sx={{ position: "absolute", zIndex: "0", right: "0.625rem" }}
        />
      )}
      sx={{
        "&.MuiMenu-list": {
          py: "0.5rem",
        },
        "& fieldset": {
          display: "none",
        },
        "& .MuiInputBase-input": {
          fontSize: "0.813rem",
          zIndex: "1",
          color: "#fff",
        },
        "& .MuiSelect-select": {
          padding: "1.031rem 0.875rem !important",
          paddingRight: "2.5rem !important",
        },
      }}
      {...props}
    >
      {optionList?.map((item,i) => (
        <MenuItem
          key={i}
          value={item}
          sx={{
            "&.MuiMenuItem-root": {
              minHeight: "auto",
              padding: "0.375rem 1rem",
            },
          }}
        >
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export const RegularSelectField = ({
  optionList,
  value,
  handleChange,
  label,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiOutlinedInput-input": {
          padding: "0.688rem 1rem",
          color: "#fff",
          fontSize: "0.813rem",
          zIndex: "1",
          paddingRight: "2.5rem !important",
        },
        "& .MuiInputLabel-root ": {
          transform: " translate(0.875rem, 0.75rem) scale(1)",
          color: "rgba(255, 255, 255, 0.7) !important",
        },
        "& .MuiInputLabel-animated[data-shrink='true'] ": {
          transform: "translate(0.875rem, -0.563rem) scale(0.75)",
        },
        "& fieldset ": {
          borderColor: "rgba(61, 71, 81, 0.3) !important",
          outline: "none",
          borderRadius: "0.2rem",
          borderWidth: "0.063rem !important",
        },
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{}}
        value={value}
        label={label}
        onChange={handleChange}
        IconComponent={() => (
          <KeyboardArrowDownIcon
            sx={{ position: "absolute", right: "0.625rem", zIndex: "0" }}
          />
        )}
      >
        {optionList?.map((item,i) => (
          <MenuItem key={i} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
