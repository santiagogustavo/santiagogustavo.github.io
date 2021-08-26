<template>
  <section class="window-manager">
    <Window
      v-for="window in windows"
      :id="window.id"
      :key="window.id"
      :active="isWindowActive(window.id)"
      :closed="window.isClosed"
      :name="window.name"
      :minimized="window.isMinimized"
      :minimizable="window.minimizable"
      :maximizable="window.maximizable"
    >
      <component :is="getComponentByName(window.component)" />
    </Window>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import Components from '@/components/WindowManager/ComponentMapper';
import Window from '@/components/WindowManager/Window.vue';

export default {
  name: 'WindowManager',
  components: {
    Window,
  },
  computed: {
    ...mapGetters({
      windows: 'windowManager/getWindows',
      activeWindow: 'windowManager/getActiveWindow',
    }),
  },
  methods: {
    isWindowActive(id) {
      return id === this.activeWindow;
    },
    getComponentByName(name) {
      return Components[name] ?? null;
    },
  },
};
</script>

<style lang="scss">
.window-manager {
  width: 100%;
  height: 100%;
}
</style>
