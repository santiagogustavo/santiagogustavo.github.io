import Blob from '@/components/Windows/Blob.vue';
import About from '@/components/Windows/About.vue';
import Shutdown from '@/components/Windows/Shutdown.vue';
import MacPlus from '@/components/Windows/MacPlus.vue';

import Windows from '@/constants/windows';

export default {
  [Windows.BLOB]: Blob,
  [Windows.ABOUT]: About,
  [Windows.SHUTDOWN]: Shutdown,
  [Windows.MACPLUS]: MacPlus,
};
