import { mapActions } from 'vuex';
import { APPLICATION_TYPES } from '@/constants/applications';

export default {
  methods: {
    ...mapActions({
      registerWindow: 'windowManager/registerWindow',
    }),
    handleOpenApplication() {
      if (this.type === APPLICATION_TYPES.LINK) {
        window.open(this.href, '_blank');
      } else if (this.type === APPLICATION_TYPES.APPLICATION) {
        this.registerWindow({
          name: this.name,
          component: this.component,
          icon: this.icon,
          maximizable: this.maximizable,
          minimizable: this.minimizable,
          modal: this.modal,
        });
      }
    },
  },
};
