export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const containerElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    containerElem.append(imgElem);
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });
  return p;
};
const resultPromise = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);
resultPromise
  .then((data) => {
    console.log(data);
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
  })
  .catch((error) => console.log(error));
