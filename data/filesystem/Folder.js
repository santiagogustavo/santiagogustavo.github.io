import FolderGeneric from '@/assets/imgs/icons/folder_generic.png';

import { APPLICATION_TYPES } from '@/constants/applications';
import Blob from '@/data/applications/Blob';

export default {
  name: 'Folder',
  type: APPLICATION_TYPES.FOLDER,
  icon: FolderGeneric,
  files: [
    {
      name: 'Subfolder 1',
      type: APPLICATION_TYPES.FOLDER,
      icon: FolderGeneric,
      files: [
        {
          name: 'Subfolder 1-1',
          type: APPLICATION_TYPES.FOLDER,
          icon: FolderGeneric,
          files: [
            {
              name: 'Subfolder 1-1-1',
              type: APPLICATION_TYPES.FOLDER,
              icon: FolderGeneric,
            },
          ],
        },
        {
          name: 'Subfolder 1-2',
          type: APPLICATION_TYPES.FOLDER,
          icon: FolderGeneric,
        },
        Blob,
      ],
    },
    {
      name: 'Subfolder 2',
      type: APPLICATION_TYPES.FOLDER,
      icon: FolderGeneric,
    },
  ],
};
