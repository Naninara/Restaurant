import { Drawer } from "@mui/material";
import React from "react";

function NavbarDrawer({ Opener, setOpener }) {
  return (
    <Drawer
      anchor="right"
      open={Opener}
      onClose={() => {
        setOpener(!Opener);
      }}
      sx={{ position: "relative" }}
    >
      <h1>hiii</h1>
    </Drawer>
  );
}

export default NavbarDrawer;
