<template>
  <section v-if="$vuetify.breakpoint.smAndDown">
    <Taskview :open="isTaskviewOpen" @close="handleCloseTaskview" />
    <footer class="taskbar--mobile">
      <Task class="taskbar--mobile__button" @click.native="handleClickBack">
        <img :src="Back" />
      </Task>
      <Task class="taskbar--mobile__button" @click.native="handleClickHome">
        <img :src="Home" />
      </Task>
      <Task class="taskbar--mobile__button" @click.native="handleClickTasks">
        <img :src="Tasks" />
      </Task>
    </footer>
  </section>
  <footer v-else class="taskbar">
    <Task
      v-for="window in openWindows"
      :key="window.id"
      :active="isWindowActive(window.id)"
      @click.native="handleClickTask(window.id)"
    >
      <img v-if="window.icon" class="taskbar__icon" :src="window.icon" />
      {{ window.name }}
    </Task>
    <Spacer />
    <Clock />
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Back from '@/assets/imgs/buttons/back.png';
import Home from '@/assets/imgs/buttons/home.png';
import Tasks from '@/assets/imgs/buttons/tasks.png';

import Task from '@/components/Taskbar/Task.vue';
import Clock from '@/components/Taskbar/Clock.vue';
import Taskview from '@/components/Taskbar/Taskview.vue';
import Spacer from '@/components/Spacer.vue';

export default {
  name: 'Taskbar',
  components: {
    Task,
    Clock,
    Spacer,
    Taskview,
  },
  data() {
    return {
      Back,
      Home,
      Tasks,
      isTaskviewOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      windows: 'windowManager/getWindows',
      activeWindow: 'windowManager/getActiveWindow',
    }),
    openWindows() {
      return Object.values(this.windows).filter((window) => !window.isClosed);
    },
  },
  methods: {
    ...mapActions({
      minimizeWindow: 'windowManager/minimizeWindow',
      restoreWindow: 'windowManager/restoreWindow',
      minimizeAll: 'windowManager/minimizeAll',
      minimizeCurrentWindow: 'windowManager/minimizeCurrentWindow',
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
    handleClickBack() {
      if (this.isTaskviewOpen) {
        this.handleCloseTaskview();
      } else {
        this.minimizeCurrentWindow();
      }
    },
    handleClickHome() {
      this.handleCloseTaskview();
      this.minimizeAll();
    },
    handleClickTasks() {
      this.isTaskviewOpen = !this.isTaskviewOpen;
    },
    handleCloseTaskview() {
      this.isTaskviewOpen = false;
    },
  },
};
</script>

<style lang="scss">
.taskbar {
  height: $taskbar-height;
  display: flex;
  align-items: center;

  &,
  &--mobile {
    z-index: $z-index-taskbar;
    width: 100%;
    padding: 2px;
    background: $color-taskbar-background;
    color: $color-text;
    border-top: 2px $color-taskbar-border-light solid;
    border-left: 2px $color-taskbar-border-light solid;
    border-right: 2px $color-taskbar-border-dark solid;
    border-bottom: 2px $color-taskbar-border-dark solid;
  }

  &__icon {
    height: 12px;
    width: 12px;
    object-fit: cover;
    margin-right: 2px;
  }

  &--mobile {
    position: absolute;
    bottom: 0;
    height: $taskbar-height-mobile;
    display: flex;

    &__button {
      flex: 1;
      max-width: initial;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        height: 16px;
        width: auto;
      }
    }
  }
}
</style>
