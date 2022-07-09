// --algo
// 1 Найти спан по дата атрибуту
// 2 Напишем функцию
// 3 Занесем в переменную dataSect значение поиска =>
// `span[data-number="${num}"]`
//  получаем в переменную значение родителя эл-та
//  через перентноду
// 4 Возвращаем значение атрибута data-section(через  dataset)
// input number
// output string
export const getSection = (num) => {
  const body = document.querySelector('body');
  const dataSect = body.querySelector(`span[data-number="${num}"]`).parentNode
    .dataset.section;
  console.log(dataSect);
  return dataSect;
};

// -test Data
// getSection(5);
