<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'TaskbarTask',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return classNames('taskbar__task', { 'taskbar__task--active': this.active });
    },
  },
};
</script>

<style lang="scss">
.taskbar__task {
  flex: 1;
  cursor: $cursor-pointer;
  max-width: 100px;
  height: 100%;
  padding: 2px 4px;
  line-height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: none;
  background: $color-taskbar-background;
  color: $color-text;
  font-family: $font-family-reactor;
  font-size: $taskbar-task-size;
  border-top: 2px $color-taskbar-border-light solid;
  border-left: 2px $color-taskbar-border-light solid;
  border-right: 2px $color-taskbar-border-dark solid;
  border-bottom: 2px $color-taskbar-border-dark solid;

  & ~ & {
    margin-left: 4px;
  }

  &--active {
    background: $color-taskbar-inset-background;
    border-top: 2px $color-taskbar-border-regular solid;
    border-left: 2px $color-taskbar-border-regular solid;
    border-right: 2px $color-taskbar-border-light solid;
    border-bottom: 2px $color-taskbar-border-light solid;
  }
}
</style>