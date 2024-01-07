const fibonacci = function (number) {
  const targetIndex = parseInt(number);
  if (targetIndex < 0) return "OOPS";
  if (targetIndex === 0) return 0;
  if (targetIndex === 1) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 2; i <= number; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
