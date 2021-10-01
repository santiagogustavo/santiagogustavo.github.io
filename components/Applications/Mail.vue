<template>
  <DesktopIcon
    label="Mail me!"
    :icon="icon"
    @open="handleOpenApplication"
  />
</template>

<script>
import MailLogo from '@/assets/imgs/icons/mail.png';
import { APPLICATION_TYPES } from '@/constants/applications';
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'ApplicationBlob',
  mixins: [ApplicationMixin],
  data() {
    return {
      name: 'Mail',
      icon: MailLogo,
      type: APPLICATION_TYPES.LINK,
      href: 'mailto:santiago.gustavo.mail@gmail.com',
    };
  },
};
</script>
