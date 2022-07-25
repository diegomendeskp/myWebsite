import { Grid, Typography } from '@mui/material';
import Icom from '../../Atoms/Icom';
import Menu from '../../Atoms/Menu';
import { Container } from './styled';

export default function HomeBarL() {
  return (
    <Container>
      <Icom />
      <Menu />
    </Container>
  );
}
