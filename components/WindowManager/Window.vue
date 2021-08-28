<template>
  <div
    v-if="$vuetify.breakpoint.smAndDown"
    :class="classNameMobile"
  >
    <div class="window--mobile__header">
      <div class="window--mobile__header__name">
        <img v-if="icon" class="window--mobile__header__icon" :src="icon" />
        {{ name }}
      </div>
    </div>
    <slot />
  </div>
  <div
    v-else
    ref="window"
    :class="className"
    :style="cssVars"
    @click="handleActiveWindow"
  >
    <Watcher @created="handleCreateDesktopWindow" />
    <div class="window__header">
      <div class="window__header__name" @mousedown="handleMouseDown">
        <img v-if="icon" class="window__header__icon" :src="icon" />
        {{ name }}
      </div>
      <div class="window__header__buttons" @click="handleActiveWindow">
        <v-btn v-if="minimizable" icon small @click.stop="handleMinimizeWindow">
          <v-icon>mdi-window-minimize</v-icon>
        </v-btn>
        <v-btn v-if="maximizable" icon small @click.stop="handleToggleMaximize">
          <v-icon
            >mdi-{{
              isMaximized ? 'window-restore' : 'window-maximize'
            }}</v-icon
          >
        </v-btn>
        <v-btn icon small @click.stop="handleCloseWindow">
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import classNames from 'classnames';

import Watcher from '@/components/WindowManager/Watcher';

import { clamp } from '@/utils/math';

export default {
  name: 'Window',
  components: {
    Watcher,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: undefined,
    },
    active: {
      type: Boolean,
      required: true,
    },
    closed: {
      type: Boolean,
      required: true,
    },
    minimized: {
      type: Boolean,
      required: true,
    },
    minimizable: {
      type: Boolean,
      default: false,
    },
    maximizable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMaximized: false,
      isRestored: false,
      isDragging: false,
      window: {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      },
      position: {
        x: 0,
        y: 0,
      },
      dimensions: {
        width: 0,
        height: 0,
      },
      cursorPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    className() {
      return classNames('window', {
        'window--inactive': !this.active,
        'window--minimized': this.minimized,
        'window--maximized': this.isMaximized,
        'window--restored': this.isRestored,
        'window--closed': this.closed,
      });
    },
    classNameMobile() {
      return classNames('window--mobile', {
        'window--mobile--minimized': this.minimized,
        'window--mobile--inactive': !this.active,
        'window--mobile--restored': this.isRestored,
        'window--mobile--closed': this.closed,
      });
    },
    cssVars() {
      return {
        '--position-x': `${this.position.x}px`,
        '--position-y': `${this.position.y}px`,
        '--min-height': `${this.dimensions.height}px`,
        '--min-width': `${this.dimensions.width}px`,
      };
    },
  },
  watch: {
    minimized(next) {
      if (!next) return;
      this.isRestored = true;
    },
  },
  mounted() {
    this.refreshDimensions();
    this.centralize();

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    ...mapActions({
      registerWindow: 'windowManager/registerWindow',
      minimizeWindow: 'windowManager/minimizeWindow',
      closeWindow: 'windowManager/closeWindow',
      setActiveWindow: 'windowManager/setActiveWindow',
    }),

    // CLICKABLE ACTIONS
    handleActiveWindow() {
      if (this.active) {
        return;
      }
      this.setActiveWindow(this.id);
    },
    handleMinimizeWindow() {
      this.minimizeWindow(this.id);
    },
    handleMaximizeWindow() {
      this.handleActiveWindow();
      this.isMaximized = true;
      this.isRestored = false;
    },
    handleRestoreWindow() {
      this.handleActiveWindow();
      this.isMaximized = false;
      this.isRestored = true;
    },
    handleToggleMaximize() {
      if (this.isMaximized) {
        this.handleRestoreWindow();
      } else {
        this.handleMaximizeWindow();
      }
    },
    handleCloseWindow() {
      this.closeWindow(this.id);
    },
    handleMouseDown(event) {
      if (this.isMaximized) {
        return;
      }

      event.preventDefault();
      this.isRestored = false;
      this.isDragging = true;
      this.handleActiveWindow();
      this.updateCursorPosition(event.pageX, event.pageY);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    },

    // MOUSE ACTIONS
    handleMouseMove(event) {
      if (!this.isDragging) {
        return;
      }

      const deltaX = event.pageX - this.cursorPosition.x;
      const deltaY = event.pageY - this.cursorPosition.y;

      // Clamping avoids that the window is rendered out of the document
      const newX = clamp(
        0,
        this.position.x + deltaX,
        this.window.innerWidth - this.dimensions.width
      );
      const newY = clamp(
        0,
        this.position.y + deltaY,
        this.window.innerHeight - this.dimensions.height
      );

      this.updatePosition(newX, newY);
      this.updateCursorPosition(event.pageX, event.pageY);
    },
    handleMouseUp() {
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);
      this.isDragging = false;
    },
    updatePosition(x, y) {
      this.position = {
        x,
        y,
      };
    },
    updateCursorPosition(x, y) {
      this.cursorPosition = {
        x,
        y,
      };
    },

    // HEADLESS ACTIONS
    onResize() {
      this.window = {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      };
    },
    centralize() {
      if (!this.$refs.window) {
        return;
      }
      this.updatePosition(
        (window.innerWidth - this.$refs.window.clientWidth) / 2,
        (window.innerHeight - this.$refs.window.clientHeight) / 2
      );
    },
    refreshDimensions() {
      this.dimensions = {
        width: this.$refs.window?.clientWidth,
        height: this.$refs.window?.clientHeight,
      };
    },

    handleCreateDesktopWindow() {
      this.refreshDimensions();
    },
  },
};
</script>

<style lang="scss">
@keyframes open {
  0% {
    transform: scale(0.95);
    transform-origin: center;
    opacity: (0);
  }
  100% {
    transform: scale(1);
    transform-origin: center;
    opacity: (1);
    filter: brightness(1);
  }
}

.window {
  border: window-border();
  top: var(--position-y);
  left: var(--position-x);
  box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 0.5);
  height: fit-content;
  width: fit-content;
  animation: open 250ms $cubic-bezier-ease;

  &, &--mobile {
    position: absolute;
    background: url(static/imgs/bg-window.png);
    color: $color-text;
    min-height: var(--min-height);
    min-width: var(--min-width);
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    z-index: $z-index-window-active;
  }

  &--inactive {
    filter: brightness(0.85);
    z-index: $z-index-window-inactive;
  }

  &--minimized {
    pointer-events: none;
    transform: scale(0.75) translate(-16px, 16px);
    transform-origin: bottom left;
    opacity: (0);
    transition: transition-ease();
  }

  &--maximized {
    top: 0;
    left: 0;
    min-height: $window-maximized-height;
    min-width: 100%;
    transition: transition-ease();
  }

  &--restored {
    transition: transition-ease();
  }

  &--closed {
    pointer-events: none;
    transform: scale(0.95);
    transform-origin: center;
    opacity: (0);
    transition: transition-ease(all, 250ms);
  }

  &__header {
    display: flex;
    background-color: $color-secondary;
    color: $color-white;
    border-bottom: window-border();
    height: fit-content;

    &__icon {
      height: 14px;
      width: 14px;
      object-fit: cover;
      margin-right: 2px;
    }

    &__name {
      width: 100%;
      height: auto;
      padding: 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      user-select: none;
      font-family: $font-family-reactor;
      font-size: $window-header-name-size;
      line-height: 12px;

      &:hover {
        cursor: $cursor-move;
      }
    }

    &__buttons {
      display: flex;
      border-left: window-border($color-secondary-light);
      button {
        border-radius: 0;
        color: $color-white !important;
      }
    }
  }

  &--maximized &__header__name:hover {
    cursor: $cursor-arrow;
  }
}

.window--mobile {
  top: 0;
  left: 0;
  width: 100%;
  height: $window-height-mobile;
  animation: open 500ms $cubic-bezier-ease;
  transition: z-index 500ms cubic-bezier(0,1,1,0), transition-ease(transform, 500ms), transition-ease(opacity, 500ms);

  &__header {
    display: flex;
    background-color: $color-secondary;
    color: $color-white;
    border-bottom: window-border($color-secondary-light);
    height: fit-content;

    &__icon {
      height: 24px;
      width: 24px;
      object-fit: cover;
      margin-right: 2px;
      transform: translateY(4px);
    }

    &__name {
      width: 100%;
      height: auto;
      padding: 0 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      user-select: none;
      font-family: $font-family-reactor;
      font-size: $window-header-name-size-mobile;
    }
  }

  &--inactive {
    transform: scale(0.95);
    opacity: 0;
    z-index: $z-index-window-inactive;
  }

  &--minimized {
    pointer-events: none;
    opacity: 1 !important;
    transform: translateY(100%) !important;
    transform-origin: bottom;
  }

  &--restored {
    transform-origin: bottom;
  }

  &--closed {
    pointer-events: none;
    transform: scale(0.95);
    transform-origin: center;
    opacity: 0;
    transition: transition-ease(all, 500ms);
  }
}
</style>
