"use strict"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max, numbers) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min >= 0 && max >= 0) {
      let result = (Math.random() * (max - min + 1));
    return result.toFixed(numbers)
    }else{
      console.log('Число меньше 0');
    }}
    console.log(getRandomIntInclusive(0.6, 9.2, 4));
