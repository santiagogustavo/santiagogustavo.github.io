<template>
  <div class="file-manager">
    <section class="file-manager__left-tab">
      <FileNavigation
        v-for="(file, index) in filteredFilesystem"
        :key="`file-navigation-${index}`"
        :label="file.name"
        :level="file.level"
        :open="!!isFolderOpen[file.name]"
        @open="handleOpenFolder(file.name)"
        @close="handleCloseFolder(file.name)"
      />
    </section>
    <section class="file-manager__right-tab">
      <FileDirectory
        :directory="currentDirectory"
        @openFolder="handleOpenFolder"
      />
    </section>
  </div>
</template>

<script>
import FileNavigation from './FileNavigation.vue';
import FileDirectory from './FileDirectory.vue';

import Folder from '@/data/filesystem/Folder';
import { flatMapFilesystem } from '@/utils/files';

export default {
  name: 'FileManager',
  components: {
    FileNavigation,
    FileDirectory,
  },
  data() {
    return {
      filesystem: flatMapFilesystem(Folder),
      isFolderOpen: {
        [Folder.name]: true,
      },
      currentDirectory: Folder,
    };
  },
  computed: {
    filteredFilesystem() {
      return this.filesystem.filter(
        (file, index) =>
          index === 0 ||
          !!this.isFolderOpen[file.name] ||
          !!this.isFolderOpen[file.parent]
      );
    },
  },
  methods: {
    handleOpenFolder(name) {
      const { isFolderOpen } = this;
      isFolderOpen[name] = true;
      this.isFolderOpen = { ...isFolderOpen };

      this.currentDirectory = this.filesystem.find(file => file.name === name);
    },
    handleCloseFolder(name) {
      const { isFolderOpen, filteredFilesystem } = this;
      isFolderOpen[name] = false;

      let closedSubfolders = [];

      filteredFilesystem.forEach(file => {
        if (file.parent === name) {
          isFolderOpen[file.name] = false;
          closedSubfolders = [...closedSubfolders, file.name];
        }
      });

      this.isFolderOpen = { ...isFolderOpen };

      /* close every subfolder */
      closedSubfolders.forEach(file => this.handleCloseFolder(file));

      const currentFile = this.filesystem.find(file => file.name === name);
      this.currentDirectory = this.filesystem.find(
        file => file.name === currentFile.parent
      );
    },
  },
};
</script>

<style lang="scss">
.file-manager {
  min-width: 600px;
  min-height: 300px;
  flex: 1;
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
