import { styled, Link } from "@mui/material";

export const Links = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: #969696;
    width: 100px;
    height: 45px;
    transition: 1s ease;
   :hover{
    background-color: #404b55;
    color:#fff;
   }
`;