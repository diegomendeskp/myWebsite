import { Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Links } from './styled';
export default function Contracts() {
  return (
    <>
      <Links
        href="https://www.linkedin.com/in/diego-mendes-da-silva-7a80a6229/"
        underline="hover"
      >
        {<LinkedInIcon />}
      </Links>
      <Links
        href="https://github.com/diegomendeskp"
        underline="hover"
      >
        {<GitHubIcon />}
      </Links>
      <Links href="#" underline="hover">
        {<EmailIcon />}
      </Links>

      <Links href="https://contate.me/Diego.Mendes" underline="hover">
        {<WhatsAppIcon />}
      </Links>
    </>
  );
}
