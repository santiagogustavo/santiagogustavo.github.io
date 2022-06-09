<template>
  <div class="file-manager">
    <FileNavbar :url="url" @back="popHistory" />
    <div class="file-manager__container">
      <section class="file-manager__left-tab">
        <FileNavigation
          v-for="(file, index) in filteredFilesystem"
          :key="`file-navigation-${index}`"
          :label="file.name"
          :level="file.level"
          :expand="!isFolderExpanded[file.name]"
          :open="currentDirectory.name === file.name"
          @expand="handleExpandFolder(file.name)"
          @collapse="handleCollapseFolder(file.name)"
          @open="handleOpenFolder(file.name)"
        />
      </section>
      <section class="file-manager__right-tab">
        <FileDirectory
          :directory="currentDirectory"
          @openFolder="handleOpenFolder"
        />
      </section>
    </div>
  </div>
</template>

<script>
import FileNavbar from './FileNavbar.vue';
import FileNavigation from './FileNavigation.vue';
import FileDirectory from './FileDirectory.vue';

import Folder from '@/data/filesystem/Folder';
import { flatMapFilesystem } from '@/utils/files';
import { APPLICATION_TYPES } from '~/constants/applications';

export default {
  name: 'FileManager',
  components: {
    FileNavbar,
    FileNavigation,
    FileDirectory,
  },
  data() {
    return {
      filesystem: flatMapFilesystem(Folder),
      isFolderExpanded: {
        [Folder.name]: true,
      },
      history: [Folder.name],
    };
  },
  computed: {
    filteredFilesystem() {
      return this.filesystem
        .filter(file => file.type === APPLICATION_TYPES.FOLDER)
        .filter(
          (file, index) =>
            index === 0 ||
            !!this.isFolderExpanded[file.name] ||
            !!this.isFolderExpanded[file.parent]
        );
    },
    currentDirectory() {
      return this.filesystem.find(
        file => file.name === this.history[this.history.length - 1]
      );
    },
    url() {
      const { name } = this.currentDirectory;

      let path = [name];
      [...this.filesystem].reverse().forEach(file => {
        if (file.name === path[path.length - 1] && file.parent) {
          path = [...path, file.parent];
        }
      });

      return `C:\\\\${path.reverse().join('\\')}`;
    },
  },
  methods: {
    pushHistory(name) {
      this.history = [...this.history, name];
    },
    popHistory() {
      if (this.history.length === 1) {
        return;
      }
      this.history = [...this.history.slice(0, -1)];
    },
    handleOpenFolder(name) {
      this.pushHistory(name);
    },
    handleExpandFolder(name) {
      const { isFolderExpanded } = this;
      isFolderExpanded[name] = true;
      this.isFolderExpanded = { ...isFolderExpanded };
    },
    handleCollapseFolder(name) {
      const { isFolderExpanded, filteredFilesystem } = this;
      isFolderExpanded[name] = false;
      this.isFolderExpanded = { ...isFolderExpanded };

      let collapsedSubfolders = [];

      filteredFilesystem.forEach(file => {
        if (file.parent === name) {
          isFolderExpanded[file.name] = false;
          collapsedSubfolders = [...collapsedSubfolders, file.name];
        }
      });

      this.isFolderExpanded = { ...isFolderExpanded, ...collapsedSubfolders };

      /* close every subfolder */
      collapsedSubfolders.forEach(file => this.handleCollapseFolder(file));
    },
  },
};
</script>

<style lang="scss">
.file-manager {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 600px;
  min-height: 300px;

  &__container {
    flex: 1;
    display: flex;
  }

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
