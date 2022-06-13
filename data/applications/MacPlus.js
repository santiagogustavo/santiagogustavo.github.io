import MacPlusLogo from '@/assets/imgs/icons/macplus.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'MacPlus',
  label: 'macintosh plus',
  component: Windows.MACPLUS,
  icon: MacPlusLogo,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: false,
};
