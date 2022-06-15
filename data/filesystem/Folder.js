import FolderGeneric from '@/assets/imgs/icons/folder_generic.png';

import { APPLICATION_TYPES } from '@/constants/applications';
import Blob from '@/data/applications/Blob';
import Image from '@/data/applications/Image';

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
            Image({
              name: 'Test image',
              label: 'test_image.jpg',
              url: 'https://i.pinimg.com/550x/33/fd/9f/33fd9fe7bb6910814a158e3781b8b64c.jpg',
            }),
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
