<template>
  <DesktopIcon
    label="LeetCode"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import LeetCodeLogo from '@/assets/imgs/icons/leetcode.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'LeetCode',
      icon: LeetCodeLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'https://leetcode.com/santiagogustavo/',
    };
  },
};
</script>
