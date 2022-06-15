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
        case APPLICATION_TYPES.IMAGE:
        case APPLICATION_TYPES.APPLICATION:
          this.registerWindow({
            name: app.name,
            label: app.label,
            component: app.component,
            icon: app.icon || app.url,
            url: app.url,
            metadata: app.metadata,
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
