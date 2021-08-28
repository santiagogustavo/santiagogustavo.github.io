<template>
  <section :class="className">
    <section class="taskview__header">
      <div class="taskview__label">Open tasks</div>
      <img class="taskview__close" :src="CloseInv" @click="handleClickClose" />
    </section>
    <section class="taskview__tasks">
      <Task
        v-for="(window, index) in openWindows"
        :key="window.id"
        class="taskview__list-task"
        @click.native="handleClickTask(window.id)"
      >
        <div class="taskview__list-index">{{ index + 1 }}.</div>
        {{ window.name }}
      </Task>
    </section>
  </section>
</template>

<script>
import classNames from 'classnames';
import { mapActions, mapGetters } from 'vuex';

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
    }),
    handleClickTask(id) {
      this.handleClickClose();
      this.restoreWindow(id);
    },
    handleClickClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
.taskview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $taskview-height;
  z-index: $z-index-taskview;
  transition: all 500ms ease;
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

    & ~ & {
      margin-left: 0;
      margin-top: 8px;
    }
  }

  &__list-index {
    font-size: 32px;
    font-weight: bold;
    line-height: initial;
  }
}
</style>
