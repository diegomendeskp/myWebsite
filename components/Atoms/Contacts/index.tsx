import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Links } from './styled';
export default function Contracts() {
  return (
    <>
      <Links
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/diego-mendes-da-silva-7a80a6229/"
        underline="hover"
      >
        <LinkedInIcon />
      </Links>
      <Links
        target="_blank"
        rel="noreferrer"
        href="https://github.com/diegomendeskp"
        underline="hover"
      >
        <GitHubIcon />
      </Links>
      <Links
        target="_blank"
        rel="noreferrer"
        href="#"
        underline="hover"
      >
        <EmailIcon />
      </Links>

      <Links
        target="_blank"
        rel="noreferrer"
        href="https://contate.me/Diego.Mendes"
        underline="hover"
      >
        <WhatsAppIcon />
      </Links>
    </>
  );
}
