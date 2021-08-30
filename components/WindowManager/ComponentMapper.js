import Blob from '@/components/Windows/Blob.vue';
import Inspire from '@/components/Windows/Inspire.vue';
import Shutdown from '@/components/Windows/Shutdown.vue';

import Windows from '@/constants/windows';

export default {
  [Windows.BLOB]: Blob,
  [Windows.INSPIRE]: Inspire,
  [Windows.SHUTDOWN]: Shutdown,
};
