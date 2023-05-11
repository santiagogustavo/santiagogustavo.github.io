import TetrisLogo from '@/assets/imgs/icons/tetris.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'Tetris',
  label: 'Tetris',
  component: Windows.TETRIS,
  icon: TetrisLogo,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: false,
};
