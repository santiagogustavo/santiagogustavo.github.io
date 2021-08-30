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
        icon: this.icon,
        maximizable: this.maximizable,
        minimizable: this.minimizable,
        modal: this.modal,
      });
    },
  },
};
