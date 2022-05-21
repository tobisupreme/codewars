// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/

function solution(molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) {
  const R = 0.082;
  temp = convertToKelvin(temp);
  return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * R * temp) / volume;
}

function convertToKelvin(temp) {
  let base0 = 273.15;
  return temp - 0 + base0;
}
