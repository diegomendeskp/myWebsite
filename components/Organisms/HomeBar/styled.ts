import { styled, TableContainer } from "@mui/material";

export const Container = styled(TableContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 54px;
    background: rgba( 31, 36, 42, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  @media (max-width: 500px) {
  }
`;