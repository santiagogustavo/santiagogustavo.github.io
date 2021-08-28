<template>
  <section :class="className">
    <section class="taskview__header">
      <div class="taskview__label">Open tasks</div>
      <img class="taskview__close" :src="CloseInv" @click="handleClickClose" />
    </section>
    <transition-group name="slide-right" class="taskview__tasks">
      <Task
        v-for="(window, index) in openWindows"
        :key="window.id"
        class="taskview__list-task"
      >
        <div class="taskview__list-content" @click="handleClickTask(window.id)">
          <div class="taskview__list-index">{{ index + 1 }}.</div>
          <img v-if="window.icon" class="taskview__list-icon" :src="window.icon" />
          {{ window.name }}
        </div>
        <img class="taskview__list-close" :src="Close" @click="handleCloseWindow(window.id)" />
      </Task>
    </transition-group>
  </section>
</template>

<script>
import classNames from 'classnames';
import { mapActions, mapGetters } from 'vuex';

import Close from '@/assets/imgs/buttons/close.png';
import CloseInv from '@/assets/imgs/buttons/close-inv.png';

import Task from '@/components/Taskbar/Task.vue';

export default {
  name: 'Taskview',
  components: {
    Task,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      Close,
      CloseInv,
    };
  },
  computed: {
    ...mapGetters({
      windows: 'windowManager/getWindows',
    }),
    openWindows() {
      return Object.values(this.windows).filter((window) => !window.isClosed);
    },
    className() {
      return classNames('taskview', {
        'taskview--open': this.open,
      });
    },
  },
  methods: {
    ...mapActions({
      restoreWindow: 'windowManager/restoreWindow',
      closeWindow: 'windowManager/closeWindow',
    }),
    handleClickTask(id) {
      this.handleClickClose();
      this.restoreWindow(id);
    },
    handleClickClose() {
      this.$emit('close');
    },
    handleCloseWindow(id) {
      this.closeWindow(id);
    },
  },
};
</script>

<style lang="scss">
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 250ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.taskview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $taskview-height;
  z-index: $z-index-taskview;
  transition: transition-ease(all, 500ms);
  pointer-events: none;
  transform: translateY(100%);
  background: rgba(0, 0, 0, 0.7);
  padding: 24px;

  &--open {
    pointer-events: initial;
    transform: translateY(0);
  }

  &__bg {
    z-index: $z-index-taskview;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(static/imgs/bg-alt.png);
  }

  &__header {
    display: flex;
    align-items: flex-end;
  }

  &__label {
    width: 100%;
    font-family: $font-family-reactor;
    font-size: 32px;
    line-height: 14px;
    text-transform: uppercase;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 1px 2px 2px black;
  }

  &__close {
    display: block;
    height: 24px;
    width: 24px;
    cursor: $cursor-pointer;
  }

  &__tasks {
    display: flex;
    flex-direction: column;
    height: calc(#{$taskview-height} - 22px);
    margin: 32px 0;
  }

  &__list-task {
    max-width: 100%;
    max-height: $taskview-list-height;
    line-height: 14px;
    display: flex;
    align-items: center;

    & ~ & {
      margin-left: 0;
      margin-top: 8px;
    }
  }

  &__list-content {
    height: 100%;
    width: 100%;
    margin: auto;
  }

  &__list-index {
    font-size: 32px;
    font-weight: bold;
    line-height: initial;
    line-height: 32px;
  }

  &__list-icon {
    height: 12px;
    width: 12px;
    object-fit: cover;
    margin-right: 2px;
  }

  &__list-close {
    margin-right: 8px;
    display: block;
    height: 24px;
    width: 24px;
    cursor: $cursor-pointer;
  }
}
</style>
