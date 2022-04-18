<template>
  <div class="file-manager">
    <section class="file-manager__left-tab">
      <FileNavigation label="Folder" open />
      <FileNavigation
        label="Subfolder 1"
        :level="1"
        :open="isOpenLvl1"
        @open="handleToggleLvl1"
        @close="handleToggleLvl1"
      />
      <FileNavigation v-if="isOpenLvl1" label="Subfolder 2" :level="2" />
      <FileNavigation v-if="isOpenLvl1" label="Subfolder 2" :level="2" />
    </section>
    <section class="file-manager__right-tab">right</section>
  </div>
</template>

<script>
import FileNavigation from './FileNavigation.vue';

export default {
  name: 'FileManager',
  components: {
    FileNavigation,
  },
  data() {
    return {
      isOpenLvl1: true,
    };
  },
  methods: {
    handleToggleLvl1() {
      this.isOpenLvl1 = !this.isOpenLvl1;
    },
  },
};
</script>

<style lang="scss">
.file-manager {
  width: 600px;
  min-height: 300px;
  display: flex;

  &__left-tab {
    flex-grow: 0;
    width: 200px;
    background: $color-white;
    border-right: 2px solid black;
  }
  &__right-tab {
    flex: 1;
  }
}
</style>
