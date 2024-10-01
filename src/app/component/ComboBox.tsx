import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DataFurn from "./DataFurn";

export default function ComboBox() {
  const allFurniture = [
    ...DataFurn.livingRoom,
    ...DataFurn.bedroom,
    ...DataFurn.kitchenAndDining,
    ...DataFurn.officeAndStudy,
  ];

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
      paddingLeft: theme.spacing(2),
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      ".css-20bmp1-MuiSvgIcon-root":{
        display: "none",
      }
    },
  }));

  return (
    <Autocomplete
    // style={{display: "flex"}}
      options={allFurniture}
      getOptionLabel={(option) => option.label}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <StyledTextField {...params} label="" variant="outlined" />
      )}
    />
  );
}
