<template>
  <div class="window-shutdown">
    Are you sure you want to turn off the computer right now?
    <br />
    <br />
    <v-btn color="primary" @click="handleClickCancel">No</v-btn>
    <v-btn @click="handleClickShutdown">Yes</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'WindowShutdown',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      closeWindow: 'windowManager/closeWindow',
    }),
    handleClickCancel() {
      this.closeWindow(this.id);
    },
    handleClickShutdown() {
      this.$nuxt.$emit('turnoff');
    },
  },
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
