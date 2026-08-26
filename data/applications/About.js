import Me from '@/assets/imgs/icons/me.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'Hello!',
  label: 'About me',
  component: Windows.ABOUT,
  icon: Me,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: false,
};
