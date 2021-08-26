<template>
  <div
    v-click-outside="handleClickOutside"
    :class="className"
    @click="handleClick"
  >
    <div class="desktop-icon__icon">
      <img :src="icon" />
    </div>
    <span class="desktop-icon__name">{{ label }}</span>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'DesktopIcon',
  props: {
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    label: {
      type: String,
      required: true,
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
    className() {
      return classNames('desktop-icon', {
        'desktop-icon--focused': this.isFocused,
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
  },
};
</script>

<style lang="scss">
.desktop-icon {
  cursor: $cursor-pointer;
  width: 100%;
  max-width: $desktop-icon-size;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__name {
    user-select: none;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 1px 2px 2px black;
  }

  &__icon {
    min-height: 32px;
    min-width: 32px;
    max-height: 32px;
    max-width: 32px;
    overflow: hidden;

    img {
      height: 32px;
      width: 32px;
      object-fit: cover;
    }
  }

  &__img, &__name {
    border: 1px dashed;
    border-color: transparent;
  }

  &--focused &__img, &--focused &__name {
    background: rgba(102,200,168, 0.5);
    border-color: #68cdae;
  }
}
</style>
