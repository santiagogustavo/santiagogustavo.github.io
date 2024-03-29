import Blob from '@/components/Windows/Blob.vue';
import About from '@/components/Windows/About.vue';
import Shutdown from '@/components/Windows/Shutdown.vue';
import MacPlus from '@/components/Windows/MacPlus.vue';
import Folder from '@/components/Windows/Folder.vue';
import Image from '@/components/Windows/Image.vue';
import Tetris from '@/components/Windows/Tetris.vue';

import Windows from '@/constants/windows';

export default {
  [Windows.BLOB]: Blob,
  [Windows.ABOUT]: About,
  [Windows.IMAGE]: Image,
  [Windows.SHUTDOWN]: Shutdown,
  [Windows.MACPLUS]: MacPlus,
  [Windows.FOLDER]: Folder,
  [Windows.TETRIS]: Tetris,
};
