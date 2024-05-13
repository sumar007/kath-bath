import {styled} from "@mui/material";
import{Link as LinkComponent} from "react-router-dom"
import { greyColor } from "../constants/color";
export const VisuallyHiddenInput = styled("input")(({theme}) => ({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: 1,
    whiteSpace: "nowrap",
}))

export const Link  = styled(LinkComponent)`
text-decoration:none;
color:inherit;
&:hover{
    background-color:gray;
    
}
`;

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${greyColor};
   padding: 0 3rem;
   border-radius: 1.5rem;
    `