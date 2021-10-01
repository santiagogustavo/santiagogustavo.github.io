<template>
  <DesktopIcon
    label="About me"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Santiago from '@/assets/imgs/icons/santiago.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationAbout',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Hello!',
      component: Windows.ABOUT,
      icon: Santiago,
      type: APPLICATION_TYPES.APPLICATION,
      minimizable: false,
      maximizable: false,
    };
  },
};
</script>
