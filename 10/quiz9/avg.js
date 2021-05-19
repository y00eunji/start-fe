function avg() {
  let total = 0;
  let num_list = arguments;

  if (typeof arguments[0] === 'object') num_list = arguments[0];

  let num_length = num_list.length;

  for (let i = 0; i < num_list.length; i++) {
    if (isNaN(num_list[i])) {
      num_length -= 1;
      continue;
    }
    total += num_list[i];
  }

  return total / num_length;
}

export default avg;
