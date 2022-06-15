import { APPLICATION_TYPES } from '@/constants/applications';
import Windows from '@/constants/windows';

export default ({ name, label, url, metadata }) => ({
  name,
  label,
  url,
  metadata: {
    url,
    ...metadata,
  },
  component: Windows.IMAGE,
  type: APPLICATION_TYPES.APPLICATION,
  minimizable: true,
  maximizable: true,
});
