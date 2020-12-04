let sqrt =(number, low, high) => {
  let guess = (low + high) / 2;
  let approx = guess * guess;
  if (Math.abs(number - approx) < 0.01) return Math.floor(guess);
  if (approx > number)
    high = guess;
  else
    low = guess;
  return sqrt(number, low, high);
}

let mySqrt = (number) => {
  if (number < 2) return number;
  return sqrt(number, 0, number);
}