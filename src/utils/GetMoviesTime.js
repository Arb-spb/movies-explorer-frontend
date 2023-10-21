export function getMoviesTime(duration) {
  const m = duration % 60;
  const h = (duration - m)/60;

  return h ? `${h}ч ${m}м` : `${m}м`
}
