import Santiago from '@/assets/imgs/icons/santiago.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'Hello!',
  label: 'About me',
  component: Windows.ABOUT,
  icon: Santiago,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: false,
  maximizable: false,
};
