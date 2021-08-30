<template>
  <div class="window-shutdown">
    Are you sure you want to turn off the computer right now?
    <br />
    <br />
    <v-btn color="primary" @click="handleClickClose">No</v-btn>
    <v-btn @click="handleClickShutdown">Yes</v-btn>
  </div>
</template>

<script>
import WindowMixin from '@/mixins/window';

export default {
  name: 'WindowShutdown',
  mixins: [WindowMixin],
};
</script>

<style lang="scss">
.window-shutdown {
  display: block;
  padding: 32px;
  max-width: 350px;
  text-align: center;
  font-family: $font-family-reactor;
  font-size: 24px;
  line-height: 22px;
}
</style>
