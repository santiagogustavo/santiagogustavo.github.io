<template>
  <div v-if="directory" class="file-directory">
    <DesktopIcon
      v-for="file in directory.files"
      :key="file.name"
      class="file-directory__icon"
      :label="file.label || file.name"
      :icon="file.icon || file.url"
      @open="handleOpenApplication(file)"
    />
  </div>
  <div v-else class="file-directory"></div>
</template>

<script>
import ApplicationMixin from '@/mixins/application';

export default {
  name: 'FileDirectory',
  mixins: [ApplicationMixin],
  props: {
    directory: {
      type: undefined,
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
.file-directory {
  width: 100%;
  height: 100%;
  background: whitesmoke;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  columns: $desktop-icon-size;

  &__icon {
    margin: 16px;
  }
}
</style>
