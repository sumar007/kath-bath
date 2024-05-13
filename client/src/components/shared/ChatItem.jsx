import React, { memo } from 'react'
import { Link } from '../styles/styleComponent'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessagesAlert,
    index=0,
    handleDeleteChat,
}) => {

  // Ensure that avatar is always an array
  const avatarArray = Array.isArray(avatar) ? avatar : [avatar];
  return (
<Link 
sx={
    {
     padding:"0" 
    }

}
to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e, _id ,groupChat)}>
    <div style={
        {
            display:"flex",
            alignItems:"center",
            gap:"1rem",
            padding:"1rem",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "black",
       position:"relative",
        }
    }>
<AvatarCard avatar={avatarArray} index={index} />
<Stack>
    <Typography variant="h6">{name}</Typography>
    {newMessagesAlert && (
        <Typography>{newMessagesAlert.count} New message</Typography>
    )}
</Stack>

{
    isOnline && (
      <Box
        sx={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
          width: "0.5rem",
          height: "0.5rem",
          bgcolor: "green",
          borderRadius: "50%",
          transform: "translateY(-50%)",
        }} 
        /> 
    )
}

    </div>
    </Link>
  )
}

export default memo(ChatItem);