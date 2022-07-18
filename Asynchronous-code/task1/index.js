// export const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement('img');
//   imgElem.setAttribute('alt', 'My Photo');
//   imgElem.src = imgSrc;
//   const containerElem = document.querySelector('.page');
//   containerElem.append(imgElem);

//   const onImageLoaded = () => {
//     callback(null, imgElem);
//   };

//   imgElem.addEventListener('load', onImageLoaded);
//   imgElem.addEventListener('error', () => callback('Image load is failed'));
// };
// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// };

// test Data
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded
// );

// algo
// 1 Добавить картинку и рендер размеров в спан
// 2 функция
// 3 Ищем в переменную контейнер .page +++
// 4 Создаем в переменную элемент img +++
// 5 Добавляем атрибут alt +++
// 6 Назначаем атрибут src +++
// 7 Достаем из переменой imgElem ширину и высоту +++ ?
// 8 Добавляем через append в page картинку ImgElem +++
// 9 Вешаем на картинку слушатель на событие  load +++
// 10 После загрузки вызываем callbck(null, imgElem)+++
// 11 При ошиьке загрузки callback вызываем с текстом "Image load is failed"  в первом аргументе+++

export const addImage = (imgSrc, callback) => {
  const containerElem = document.querySelector('.page');
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  containerElem.append(imgElem);
  const onImageLoaded = () => {
    callback(null, imgElem);
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded
);
