// --algo
// 1. считать инфо из атрибута и записать его квадрат в другой атрибут
// 2 Напишем функцию реализующую данный функ-нал
// 3. Получаем ноду со всеми эл-ми класса .number
// 4. Переводим ноду в массив
// 5. проходимся мэпом по каждому элементу массива:
// 5.1 получаем атрибут через dataset
// 5.2 возводим в квадрат
// 5.1 присваиваем возеденное значение в новый атрибут    через dataset
// input none
// output none
export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number'); // получаем ноду со всеми элементами .number
  const numbersArr = Array.from(numbers); // переводим в массив
  const squarNum = numbersArr.map((li) => {
    const sqrNum = li.dataset.number ** 2;
    li.dataset.squaredNumber = sqrNum;
    return sqrNum;
  });
  return squarNum;
};

// -- test Data
squaredNumbers();
