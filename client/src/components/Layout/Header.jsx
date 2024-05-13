import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../constants/color";
import React, { Suspense, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { lazy } from "react";
const Search =lazy(()=>import("../specific/Search"));
const Notifications =lazy(()=>import("../specific/Notifications"));
const NewGroup =lazy(()=>import("../specific/NewGroups"));
const Header = () => {
const [isMobile, setIsMobile] = useState(false)
const [isSearch, setIsSearch] = useState(false)
const [isAddGroup, setIsAddGroup] = useState(false)
const [isGroup, setIsGroup] = useState(false)
const [isNotification, setIsNotification] = useState(false)
  const navigate = useNavigate();
  const handleMobile = () => {
setIsMobile((prev) => !prev);
  };
  const handleSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const handleAdd = () => {
    setIsAddGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  }
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            KathBath
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              title="Search"
              icon={<SearchIcon />}
              onClick={handleSearch}
            />
             <IconBtn
              title="New Group"
              icon={<AddIcon />}
              onClick={handleAdd}
            />
             <IconBtn
              title="Groups"
              icon={<GroupAddIcon />}
              onClick={navigateToGroup}
            />
             <IconBtn
              title="Notification"
              icon={<CircleNotificationsIcon />}
              onClick={openNotification}
            />
            <IconBtn
              title="Logout"
              icon={<LogoutIcon />}
              onClick={handleLogout}
            />
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

{ isSearch && (<Suspense fallback={<Backdrop open/>}> <Search /> </Suspense>) }
{ isNotification && (<Suspense fallback={<Backdrop open/>}> <Notifications /> </Suspense>) }
{ isAddGroup && (<Suspense fallback={<Backdrop open/>}> <NewGroup /> </Suspense>) }

    </>
  );
};
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
