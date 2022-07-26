import { Card, Description, Icon, Status, Title } from './styled';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

export default function Qualities() {
  return (
    <Status>
      <Card>
        <Icon>
          <EmojiObjectsIcon />
        </Icon>
        <Title>Intuitivo</Title>
        <Description>
          Forte preferência por UX/UI intuitivo e fácil de usar.
        </Description>
      </Card>

      <Card>
        <Icon>
          <PhonelinkIcon />
        </Icon>
        <Title>Responsivo</Title>
        <Description>
          Meus layouts funcionarão em qualquer dispositivo, grande ou
          pequeno.
        </Description>
      </Card>

      <Card>
        <Icon>
          <DataObjectIcon />
        </Icon>
        <Title>Código Limpo</Title>
        <Description>
          Sempre foco em manter o código o mais limpo e legível
          possível.
        </Description>
      </Card>

      <Card>
        <Icon>
          <CodeOffIcon />
        </Icon>
        <Title>YAGNI</Title>
        <Description>
          Se não for necessário, não estará la.
        </Description>
      </Card>

      <Card>
        <Icon>
          <ManageAccountsIcon />
        </Icon>
        <Title>KISS</Title>
        <Description>
          Simplicidade em toda situação possível.
        </Description>
      </Card>

      <Card>
        <Icon>
          <ManageHistoryIcon />
        </Icon>
        <Title>Metodologias ágeis</Title>
        <Description>
          Rapidez aos processos e à conclusão de tarefas com Kanban e
          Scrum.
        </Description>
      </Card>
    </Status>
  );
}
