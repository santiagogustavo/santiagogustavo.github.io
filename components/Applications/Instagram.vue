<template>
  <DesktopIcon
    label="Instagram"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import InstaLogo from '@/assets/imgs/icons/instagram.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Instagram',
      icon: InstaLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'https://www.instagram.com/santiagogustavoo/',
    };
  },
};
</script>
