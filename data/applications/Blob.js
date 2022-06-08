import Dolphin from '@/assets/imgs/icons/dolphin.jpg';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'ECCOJAMS',
  label: "Totally not a virus trust me i'm a dolphin",
  component: Windows.BLOB,
  icon: Dolphin,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: false,
};
