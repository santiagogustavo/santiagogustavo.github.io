import Shutdown from '@/assets/imgs/icons/shutdown.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'Turn off computer',
  component: Windows.SHUTDOWN,
  icon: Shutdown,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: false,
  maximizable: false,
  modal: true,
};
