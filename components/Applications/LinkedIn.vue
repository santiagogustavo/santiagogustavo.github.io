<template>
  <DesktopIcon
    label="LinkedIn"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import LinkinLogo from '@/assets/imgs/icons/linkedin.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'LinkedIn',
      icon: LinkinLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'https://www.linkedin.com/in/santiago-gustavo/',
    };
  },
};
</script>
