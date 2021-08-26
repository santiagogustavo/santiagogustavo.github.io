<template>
  <div
    ref="window"
    :class="className"
    :style="cssVars"
    @click="handleActiveWindow"
  >
    <div class="window__header">
      <div class="window__header__name" @mousedown="handleMouseDown">
        {{ name }}
      </div>
      <div class="window__header__buttons" @click="handleActiveWindow">
        <v-btn icon small @click.stop="handleMinimizeWindow">
          <v-icon>mdi-window-minimize</v-icon>
        </v-btn>
        <v-btn icon small @click.stop="handleToggleMaximize">
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
import { clamp } from '@/utils/math';

export default {
  name: 'Window',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
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
    cssVars() {
      return {
        '--position-x': `${this.position.x}px`,
        '--position-y': `${this.position.y}px`,
        '--min-height': `${this.dimensions.height}px`,
        '--min-width': `${this.dimensions.width}px`,
      };
    }
  },
  watch: {
    minimized(next) {
      if (!next) return;
      this.isRestored = true;
    },
  },
  mounted() {
    this.dimensions = {
      width: this.$refs.window.clientWidth,
      height: this.$refs.window.clientHeight,
    };
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
      const newX = clamp(0, this.position.x + deltaX, this.window.innerWidth - this.dimensions.width);
      const newY = clamp(0, this.position.y + deltaY, this.window.innerHeight - this.dimensions.height);

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
        x, y,
      };
    },
    updateCursorPosition(x, y) {
      this.cursorPosition = {
        x, y,
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
      this.updatePosition(
        (window.innerWidth - this.$refs.window.clientWidth) / 2,
        (window.innerHeight - this.$refs.window.clientHeight) / 2,
      );
    },
  },
};
</script>

<style lang="scss">
.window {
  position: absolute;
  top: var(--position-y);
  left: var(--position-x);
  background: url(static/imgs/bg-window.png);
  color: $color-text;
  border: window-border();
  box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 0.5);
  min-height: var(--min-height);
  min-width: var(--min-width);
  height: fit-content;
  width: fit-content;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  z-index: $z-index-window-active;

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &__name {
      width: 100%;
      height: auto;
      line-height: 100%;
      padding-left: 8px;
      padding-top: 5px;
      padding-bottom: 5px;
      &:hover {
        cursor: $cursor-move;
      }
    }

    &__buttons {
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
</style>
