import { mapActions } from 'vuex';
import { APPLICATION_TYPES } from '@/constants/applications';

export default {
  methods: {
    ...mapActions({
      registerWindow: 'windowManager/registerWindow',
    }),
    handleOpenApplication(file) {
      const app = { ...this, ...file };

      switch (app.type) {
        case APPLICATION_TYPES.LINK:
          window.open(app.href, '_blank');
          break;
        case APPLICATION_TYPES.FOLDER:
          this.$emit('openFolder', app.name);
          break;
        case APPLICATION_TYPES.APPLICATION:
          this.registerWindow({
            name: app.name,
            component: app.component,
            icon: app.icon,
            maximizable: app.maximizable,
            minimizable: app.minimizable,
            modal: app.modal,
          });
          break;
        default:
          break;
      }
    },
  },
};
