<template>
  <DesktopIcon
    :icon="Dolphin"
    label="Totally not a virus trust me i'm a dolphin"
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
      minimizable: true,
      maximizable: false,
      Dolphin,
    };
  },
};
</script>
