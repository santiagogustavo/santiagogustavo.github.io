<template>
  <DesktopIcon
    label="About me"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Santiago from '@/assets/imgs/icons/santiago.png';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationAbout',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'SANTIAGO STRIKES AGAIN!',
      component: Windows.ABOUT,
      icon: Santiago,
      minimizable: false,
      maximizable: false,
      modal: true,
    };
  },
};
</script>
