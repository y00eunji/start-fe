function random(min, max) {
  if (typeof max === 'undefined') {
    max = min;
    min = 0;
  }

  if (isNaN(min)) return -1;
  if (isNaN(max)) return -1;

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export default random;
