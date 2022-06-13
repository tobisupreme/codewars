function powersOfTwo(n){
  let result = [];
  for (let i = 0; i <= n; i++) {
    let power = 2 ** i;
    result.push(power);
  }
  return result;
}