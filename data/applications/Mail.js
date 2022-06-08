import MailLogo from '@/assets/imgs/icons/mail.png';
import { APPLICATION_TYPES } from '@/constants/applications';

export default {
  name: 'Mail',
  label: 'Mail me!',
  icon: MailLogo,
  type: APPLICATION_TYPES.LINK,
  href: 'mailto:santiago.gustavo.mail@gmail.com',
};
