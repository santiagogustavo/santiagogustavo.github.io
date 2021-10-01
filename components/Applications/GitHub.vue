<template>
  <DesktopIcon
    label="GitHub"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import Octocat from '@/assets/imgs/icons/github.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'GitHub',
      icon: Octocat,
      type: APPLICATION_TYPES.LINK,
      href: 'https://github.com/santiagogustavo',
    };
  },
};
</script>
