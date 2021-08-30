import { mapActions } from 'vuex';

export default {
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
    handleClickClose() {
      this.closeWindow(this.id);
    },
    handleClickShutdown() {
      this.$nuxt.$emit('turnoff');
    },
  },
};
