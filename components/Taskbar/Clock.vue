<template>
  <div class="taskbar__clock">
    {{ currentTime }}
  </div>
</template>

<script>
export default {
  name: 'TaskbarClock',
  data() {
    return {
      currentTime: this.currentLocaleTimeString(),
      interval: undefined,
    };
  },
  created() {
    setInterval(() => {
      this.currentTime = this.currentLocaleTimeString();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    currentLocaleTimeString() {
      return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
  },
};
</script>

<style lang="scss">
.taskbar__clock {
  flex: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  height: 100%;
  font-family: $font-family-reactor;
  font-size: $taskbar-clock-size;
  background: $color-taskbar-inset-background;
  user-select: none;
  border-top: 2px $color-taskbar-border-regular solid;
  border-left: 2px $color-taskbar-border-regular solid;
  border-right: 2px $color-taskbar-border-light solid;
  border-bottom: 2px $color-taskbar-border-light solid;
}
</style>
