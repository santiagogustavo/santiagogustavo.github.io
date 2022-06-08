import FolderGeneric from '@/assets/imgs/icons/folder_generic.png';
import Dolphin from '@/assets/imgs/icons/dolphin.jpg';

import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

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
        {
          name: 'ECCOJAMS',
          type: APPLICATION_TYPES.APPLICATION,
          component: Windows.BLOB,
          icon: Dolphin,
        },
      ],
    },
    {
      name: 'Subfolder 2',
      type: APPLICATION_TYPES.FOLDER,
      icon: FolderGeneric,
    },
  ],
};
