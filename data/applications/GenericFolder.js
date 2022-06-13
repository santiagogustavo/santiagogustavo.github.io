import FolderGeneric from '@/assets/imgs/icons/folder_generic.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default {
  name: 'Folder',
  component: Windows.FOLDER,
  icon: FolderGeneric,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: true,
};
