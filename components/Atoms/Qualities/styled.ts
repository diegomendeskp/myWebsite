import { Grid, styled,Typography  } from "@mui/material";

export const Status = styled(Grid)`
 display: flex;
 justify-content: center;
 align-content: center;
 gap: 30px;
 flex-wrap: wrap;
`;

export const Icon = styled(Grid)`
width: 100px;
padding: 20px;
`;

export const Card = styled(Grid)`
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: center;
 width: 180px;
 border: 1px solid #fff;
 border-radius: 15px;
 background-color: #21272c;
 color: #c3c5c9;
 box-shadow:  0 5px 7px rgba(62,78,105,255);
 margin-top: 50px;
 :hover{
    background-color: #3e4e6989;
    color: #fff;
    transition: 0.7s ease;
    cursor: pointer;
}
`;

export const Title = styled(Typography)`
 font-size: 150%;
`;

export const Description = styled(Typography)`
 font-size: 15px;
 margin: 5px;
`;