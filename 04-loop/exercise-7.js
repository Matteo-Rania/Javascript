function sumUntil(maxValue) {
  let sum = 0;
  for(i = 0; i <= maxValue; i++){
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5));