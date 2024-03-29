import { showSnackbar } from '@/utils/toast/useToast';

const copyToClipboard = async (text: string, showString?: boolean) => {
  await navigator.clipboard.writeText(text);
  if (showString) {
    showSnackbar(`Copied to ${text} clipboard!`, 'success');
  } else {
    showSnackbar('Successfully copied to clipboard!', 'success');
  }
};

export default copyToClipboard;