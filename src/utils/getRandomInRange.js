export const getRandomInRange = (min, max) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('Правильный ответ:', randomValue);
  return randomValue;
};
