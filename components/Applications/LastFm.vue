<template>
  <DesktopIcon label="last.fm" :icon="icon" @open="handleOpenApplication" />
</template>

<script>
import LastFmLogo from '@/assets/imgs/icons/lastfm.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'last.fm',
      icon: LastFmLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'https://www.last.fm/user/santiago-re',
    };
  },
};
</script>
