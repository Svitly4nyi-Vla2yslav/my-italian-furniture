"use client";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactIcon from "@mui/icons-material/ContactMail";
import VillaIcon from "@mui/icons-material/Villa";
import ChairIcon from "@mui/icons-material/Chair";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

type Anchor = "top";

export default function BurgerMenu() {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const links = [
    { to: "/", text: "Home", icon: <HomeIcon /> },
    { to: "/about", text: "About", icon: <InfoIcon /> },
    { to: "/products", text: "Products", icon: <ChairIcon /> },
    { to: "/real-estate", text: "Real Estate", icon: <VillaIcon /> },
    { to: "/contact", text: "Contact", icon: <ContactIcon /> },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <Link href={link.to} key={link.to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText className="text-gray-600 hover:to-black"> {link.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="text-2xl font-bold text-primary">
      {(["top"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="text-2xl font-bold text-primary"
            onClick={toggleDrawer(anchor, true)}
          >
            Menu
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
