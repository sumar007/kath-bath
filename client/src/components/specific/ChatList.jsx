import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlerts = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction="column">
      {chats.map((data, index) => {
        const { name, avatar, _id, members, groupChat } = data;
        const newMessagesAlert = newMessageAlerts.find(
          (alert) => alert.chatId === _id
        );
    const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
          index={index}
            newMessagesAlert={newMessagesAlert}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
