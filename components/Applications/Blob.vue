<template>
  <DesktopIcon
    label="Totally not a virus trust me i'm a dolphin"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Dolphin from '@/assets/imgs/icons/dolphin.jpg';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'BLOBBBBBBBB',
      component: Windows.BLOB,
      icon: Dolphin,
      minimizable: true,
      maximizable: false,
    };
  },
};
</script>
