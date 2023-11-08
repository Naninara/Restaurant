import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Menu, Snackbar } from "@mui/material";
import { logout } from "../../Redux/UserSlice";
import { Link } from "react-router-dom";
const ProfileMenu = ({ open, setOpen }) => {
  const userInfo = useSelector((state) => state.allreducers.user);
  const [logoutSnackbar, setLogoutSnackbar] = useState(false);
  const dispatch = useDispatch();
  return (
    <Menu
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ zIndex: 99999, mt: "50px" }}
    >
      <MenuItem>Hello {userInfo.name}</MenuItem>
      <Link to="/changepassword">
        <MenuItem>Change Password</MenuItem>
      </Link>
      <MenuItem
        onClick={() => {
          dispatch(logout());
          setLogoutSnackbar(true);
        }}
      >
        Logout
      </MenuItem>
      <Snackbar
        open={logoutSnackbar}
        onClose={() => {
          setLogoutSnackbar(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success">Logged Out sucessfully</Alert>
      </Snackbar>
    </Menu>
  );
};

export default ProfileMenu;
