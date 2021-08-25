<template>
  <Window name="Hello!">
    <v-row>
      <v-col class="text-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5 img"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
  </Window>
</template>

<script>
import Window from '@/components/WindowManager/Window.vue';

export default {
  name: 'Inspire',
  components: {
    Window,
  },
  layout: 'default',
  template: 'default',
};
</script>

<style lang="scss">
.img {
  height: 120px;
  width: 120px;
}
</style>
