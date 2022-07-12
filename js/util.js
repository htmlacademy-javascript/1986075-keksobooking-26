function getRandomIntInclusive(min, max, degreeOfNumber) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0) {
    const result = (Math.random() * (max - min + 1));
    return result.toFixed(degreeOfNumber);
  }else{
    print('Число меньше 0');
  }}
// getRandomIntInclusive(0.6, 9.2, 4); // Проверка работоспособности функции

export {getRandomIntInclusive};
