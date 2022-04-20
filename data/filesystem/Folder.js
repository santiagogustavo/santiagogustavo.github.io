export default {
  name: 'Folder',
  type: 'folder',
  files: [
    {
      name: 'Subfolder 1',
      type: 'folder',
      files: [
        {
          name: 'Subfolder 1-1',
          type: 'folder',
          files: [
            {
              name: 'Subfolder 1-1-1',
              type: 'folder',
            },
          ],
        },
        {
          name: 'Subfolder 1-2',
          type: 'folder',
        },
      ],
    },
    {
      name: 'Subfolder 2',
      type: 'folder',
    },
  ],
};
