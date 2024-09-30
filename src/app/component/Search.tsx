import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  marginLeft: 0,
  width: "100%",
  height: "1vh",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // height: "100%",
  position: "absolute",
  bottom: 5,
  right: 5,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  position: "relative",
  bottom: 5,
  right: 25,
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      backgroundColor: "transparent",
      bottom: 30,
      width: "0ch",
      "&:focus": {
        width: "20ch",
        borderBottom: "1px solid #000000a3",
      
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      ></IconButton>

      <Search>
        <SearchIconWrapper>
          <ManageSearchIcon style={{ fill: "white", width: 39, height: 30 }} />
        </SearchIconWrapper>
        <StyledInputBase />
      </Search>
    </Box>
  );
}
