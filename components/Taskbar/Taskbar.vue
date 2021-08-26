<template>
  <footer class="taskbar">
    <Task
      v-for="window in openWindows"
      :key="window.id"
      :active="isWindowActive(window.id)"
      @click.native="handleClickTask(window.id)"
    >
      {{ window.name }}
    </Task>
    <Spacer />
    <Clock />
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Task from '@/components/Taskbar/Task.vue';
import Clock from '@/components/Taskbar/Clock.vue';
import Spacer from '@/components/Spacer.vue';

export default {
  name: 'Taskbar',
  components: {
    Task,
    Clock,
    Spacer,
  },
  computed: {
    ...mapGetters({
      windows: 'windowManager/getWindows',
      activeWindow: 'windowManager/getActiveWindow',
    }),
    openWindows() {
      return Object.values(this.windows).filter(window => !window.isClosed);
    },
  },
  methods: {
    ...mapActions({
      minimizeWindow: 'windowManager/minimizeWindow',
      restoreWindow: 'windowManager/restoreWindow',
    }),
    isWindowActive(id) {
      return id === this.activeWindow;
    },
    handleClickTask(id) {
      if (this.isWindowActive(id)) {
        this.minimizeWindow(id);
      } else {
        this.restoreWindow(id);
      }
    },
  },
};
</script>

<style lang="scss">
.taskbar {
  height: $taskbar-height;
  width: 100%;
  padding: 2px;
  display: flex;
  align-items: center;
  z-index: $z-index-taskbar;
  background: $color-taskbar-background;
  color: $color-text;
  border-top: 2px $color-taskbar-border-light solid;
  border-left: 2px $color-taskbar-border-light solid;
  border-right: 2px $color-taskbar-border-dark solid;
  border-bottom: 2px $color-taskbar-border-dark solid;
}
</style>
