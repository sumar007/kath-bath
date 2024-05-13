import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroups = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  
  const selectMemberHandler = (id) => {

    
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };

  console.log(selectedMembers);
  const submitHandler = (_id) => {
    console.log("add friend", _id);
  };

  const closeHandler = (_id) => {
    console.log("add friend", _id);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} maxWidth={"25rem"} spacing={"1rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField label="search members" />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="outlined" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
