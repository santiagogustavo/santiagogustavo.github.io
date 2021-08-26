import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      registerWindow: 'windowManager/registerWindow',
    }),
    handleOpenApplication() {
      this.registerWindow({
        name: this.name,
        component: this.component,
      });
    },
  },
};
