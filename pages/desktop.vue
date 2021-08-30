<template>
  <div>
    <About />
    <Blob />
    <Shutdown />
    <WindowManager />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import WindowManager from '@/components/WindowManager/WindowManager.vue';
import About from '@/components/Applications/About.vue';
import Blob from '@/components/Applications/Blob.vue';
import Shutdown from '@/components/Applications/Shutdown.vue';

import Windows from '@/constants/windows';

export default {
  name: 'Desktop',
  components: {
    WindowManager,
    About,
    Blob,
    Shutdown,
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
