<template>
  <DesktopIcon label="Folder" :icon="icon" @open="handleOpenApplication" />
</template>

<script>
import FolderGeneric from '@/assets/imgs/icons/folder_generic.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Folder',
      component: Windows.FOLDER,
      icon: FolderGeneric,
      type: APPLICATION_TYPES.APPLICATION,
      minimizable: true,
      maximizable: true,
    };
  },
};
</script>
