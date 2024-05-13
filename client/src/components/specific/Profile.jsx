import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "5rem",
          height: "5rem",
          objectFit: "contain",
          marginTop: "1rem !important",
         
          border: "5px solid black",
        }}
      />

      <ProfileCard heading={"Bio"} text={"KathBath karo aasi"} />
      <ProfileCard
        heading={"Username"}
        text={"umar"}
        Icon={<AlternateEmailIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Umar moahmmad sheikh"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment('2024-01-01T00:00:00.000Z').fromNow()}
        Icon={<CalendarMonthIcon />}
      />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    spacing={"1rem"}
    direction={"column"}
    alignItems={"center"}
    color={"black"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body">{text}</Typography>

      <Typography variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
