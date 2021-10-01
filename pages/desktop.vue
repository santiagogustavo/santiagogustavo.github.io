<template>
  <div>
    <DesktopManager />
    <WindowManager />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import DesktopManager from '@/components/DesktopManager.vue';
import WindowManager from '@/components/WindowManager/WindowManager.vue';

import Windows from '@/constants/windows';

export default {
  name: 'Desktop',
  components: {
    DesktopManager,
    WindowManager,
  },
  layout: 'desktop',
  created() {
    this.registerWindow({
      name: 'Hello!',
      component: Windows.ABOUT,
      maximizable: true,
      minimizable: true,
    });
  },
  methods: {
    ...mapActions({
      registerWindow: 'windowManager/registerWindow',
    }),
  },
};
</script>

<style lang="scss">
.img {
  height: 120px;
  width: 120px;
}
</style>
