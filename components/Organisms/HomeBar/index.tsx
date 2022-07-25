import { Grid, Typography } from '@mui/material';
import HomeBarL from '../../Molecules/HomeBarL';
import HomeBarR from '../../Molecules/HomeBarR';
import { Container } from './styled';

export default function HomeBar() {
  return (
    <Container>
      <HomeBarL />
      <HomeBarR />
    </Container>
  );
}
