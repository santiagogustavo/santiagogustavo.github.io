<template>
  <div>
    <Blob />
    <WindowManager />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import WindowManager from '@/components/WindowManager/WindowManager.vue';
import Blob from '@/components/Applications/Blob.vue';

import Windows from '@/constants/windows';

export default {
  name: 'Inspire',
  components: {
    Blob,
    WindowManager,
  },
  layout: 'desktop',
  created() {
    this.registerWindow({
      name: 'Hello!',
      component: Windows.INSPIRE,
    });
    this.registerWindow({
      name: 'BLOBBBBBBBB',
      component: Windows.BLOB,
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
