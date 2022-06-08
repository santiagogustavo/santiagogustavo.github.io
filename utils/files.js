export const flatMapFilesystem = filesystem => {
  let formattedFiles = [];

  const flatMapFiles = ({ files, ...root }, level = 0, parent) => {
    formattedFiles = [...formattedFiles, { ...root, level, parent, files }];
    if (!files) {
      return;
    }

    files.forEach(file => flatMapFiles(file, level + 1, root.name));
  };

  flatMapFiles(filesystem);

  return formattedFiles;
};
