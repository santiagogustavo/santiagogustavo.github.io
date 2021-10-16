<template>
  <DesktopIcon
    label="Discogs"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import DiscogsLogo from '@/assets/imgs/icons/discogs.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Discogs',
      icon: DiscogsLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'https://www.discogs.com/user/santiagogustavo',
    };
  },
};
</script>
