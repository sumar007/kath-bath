import React, { useRef } from "react";
import AppLayout from "../components/Layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { greyColor, orange } from "../components/constants/color";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { InputBox } from "../components/styles/styleComponent";
const Chat = () => {
  const conatinerRef = useRef(null);
  return (
    <>
      <Stack
        ref={conatinerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        height={"90%"}
        bgcolor={greyColor}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* message component */}
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          position={"relative"}
          padding={"1rem"}
          alignItems={"center"}
        >
          <IconButton sx={{
            rotate: "30deg",
            position: "relative",
           left: "0.5rem",
          
           
          }}>
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type Message Here ..."/>
          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
