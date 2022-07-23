<template>
  <div class="resume">
    <h1>Gustavo Santiago</h1>
    <img class="resume__qrcode" :src="QrCode" alt="QR Code" />
    <br />
    <p>
      <v-icon>mdi-map-marker</v-icon>
      Piracicaba, São Paulo, Brazil
    </p>
    <p>
      <v-icon>mdi-chat</v-icon>
      +55 19 995179798
    </p>
    <p>
      <v-icon>mdi-email</v-icon>
      <a href="mailto:santiago.gustavo.mail@gmail.com">
        santiago.gustavo.mail@gmail.com
      </a>
    </p>
    <p>
      <v-icon>mdi-linkedin</v-icon>
      <a href="https://www.linkedin.com/in/santiago-gustavo/" target="_blank">
        https://www.linkedin.com/in/santiago-gustavo/
      </a>
    </p>
    <p>
      <v-icon>mdi-cursor-default-click</v-icon>
      <a href="https://santiagogustavo.github.io/" target="_blank">
        https://santiagogustavo.github.io/
      </a>
    </p>
    <br /><br />
    <h4>
      <v-icon>mdi-auto-fix</v-icon>
      Principais competências
    </h4>
    <h4>
      <v-icon>mdi-translate</v-icon>
      Idiomas
    </h4>
    <h4>
      <v-icon>mdi-seal</v-icon>
      Certificações
    </h4>
    <br /><br />
    <h3>
      <v-icon>mdi-briefcase</v-icon>
      Experiência
    </h3>
    <h3>
      <v-icon>mdi-school</v-icon>
      Formação acadêmica
    </h3>
    <br />
    <Rating :value="0" />
    <Rating :value="2" />
    <Rating :value="3.5" />
    <Rating :value="5" />
  </div>
</template>

<script>
import QrCode from '@/assets/imgs/qrcode.png';
import Rating from '@/components/Rating.vue';

export default {
  name: 'Resume',
  components: {
    Rating,
  },
  data() {
    return {
      QrCode,
    };
  },
};
</script>

<style lang="scss">
.resume {
  max-height: 100vh;
  overflow: auto;

  &__qrcode {
    width: 150px;
  }
}
</style>
