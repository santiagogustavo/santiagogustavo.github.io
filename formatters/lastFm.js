export const formatTrack = track => {
  if (!track) return undefined;
  const { artist, name, image, url, date } = track;

  const listenedAt = date?.uts;
  const selectedImg = image[0];
  const thumbnail = selectedImg?.['#text'];

  const attr = track['@attr'];
  const nowPlaying = attr?.nowplaying === 'true';

  return {
    artist: artist['#text'],
    name,
    thumbnail,
    url,
    nowPlaying,
    listenedAt,
  };
};
