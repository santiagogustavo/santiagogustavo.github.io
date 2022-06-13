<template>
  <section v-click-outside="handleClickOutside" :class="className">
    <div
      v-for="depth in level"
      :key="`file-navigation-level-${depth}`"
      class="file-navigation__level"
      :class="depth === level && 'file-navigation__level--dashed'"
    />
    <div
      v-if="expand"
      class="file-navigation__expand"
      @click="handleClickExpand"
    >
      +
    </div>
    <div v-else class="file-navigation__collapse" @click="handleClickCollapse">
      -
    </div>
    <div class="file-navigation__clickable" @click="handleClick">
      <img class="file-navigation__icon" :src="Icon" />
      <span class="file-navigation__label">{{ label }}</span>
    </div>
  </section>
</template>

<script>
import classNames from 'classnames';

import FolderOpen from '@/assets/imgs/icons/folder_small_open.png';
import FolderClosed from '@/assets/imgs/icons/folder_small_closed.png';

export default {
  name: 'FileNavigation',
  props: {
    level: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      required: true,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false,
      isReadyForDoubleClick: false,
      doubleClickTimeout: undefined,
    };
  },
  computed: {
    Icon() {
      return this.open ? FolderOpen : FolderClosed;
    },
    className() {
      return classNames('file-navigation', {
        'file-navigation--focused': this.isFocused,
        'file-navigation--open': this.open,
      });
    },
  },
  beforeDestroy() {
    clearTimeout(this.doubleClickTimeout);
  },
  methods: {
    handleClick() {
      this.isFocused = true;
      if (this.isReadyForDoubleClick) {
        this.isReadyForDoubleClick = false;
        this.isFocused = false;
        this.$emit('open');
      } else {
        this.isReadyForDoubleClick = true;
        this.doubleClickTimeout = setTimeout(() => {
          if (!this.isReadyForDoubleClick) {
            return;
          }
          this.isReadyForDoubleClick = false;
        }, 500);
      }
    },
    handleClickOutside() {
      if (!this.isFocused) return;
      this.isFocused = false;
    },
    handleClickExpand() {
      this.$emit('expand');
    },
    handleClickCollapse() {
      this.$emit('collapse');
    },
  },
};
</script>

<style lang="scss">
.file-navigation {
  $p: &;

  display: flex;
  align-items: center;

  &:last-of-type {
    #{$p}__level::before {
      top: -15px;
      left: 0;
      height: 16px;
    }
  }

  &__level {
    position: relative;
    flex-grow: 0;
    height: 1px;
    width: 10px;
    margin-left: 11px;
    background: transparent;

    &--dashed {
      background: black;
    }

    &::before {
      content: '';
      position: absolute;
      display: block;
      top: -15px;
      left: 0;
      height: 29px;
      width: 1px;
      background: black;
    }
  }

  &__expand,
  &__collapse {
    cursor: pointer;
    user-select: none;
    height: 12px;
    width: 12px;
    margin-left: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border: 1px solid black;
    background: $color-white;
  }

  &__clickable {
    flex: 1;
    cursor: pointer;
    border: 1px dashed;
    border-color: transparent;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 $file-manager-navigation-padding;
  }

  &__icon {
    height: 16px;
  }

  &__label {
    font-family: $font-family-arial;
    font-size: 12px;
    line-height: 12px;
  }

  &--focused &__clickable {
    background: rgba(102, 200, 168, 0.5);
    border-color: $color-tertiary;
  }

  &--open &__label {
    font-weight: bold;
  }
}
</style>
