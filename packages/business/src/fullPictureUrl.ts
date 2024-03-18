import { getConfig } from '@ivy-lj/config';

function isAbsoluteURL(url: string) {
  return /^https?:\/\//i.test(url);
}

function fullPictureUrl(src?: string) {
  if (!src) return '';
  if (!isAbsoluteURL(src)) {
    return `${getConfig().cdnPrefix}${src}`;
  }
  return src;
}

export default fullPictureUrl;
