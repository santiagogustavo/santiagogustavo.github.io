<template>
  <footer class="taskbar">
    <Task>FALA DERICK AHAHHAHAHHHAHHHAHAAHHHAHAHAHAHAHAH</Task>
    <Task active>FALA DERICK AHAHHAHAHHHAHHHAHAAHHHAHAHAHAHAHAH</Task>
    <Spacer />
    <Clock />
  </footer>
</template>

<script>
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
