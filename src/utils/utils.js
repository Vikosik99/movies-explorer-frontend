export function calcDuration(duration) {
  const minutes = Math.floor(duration % 60);
  const hours = Math.floor(duration / 60);
  return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
}