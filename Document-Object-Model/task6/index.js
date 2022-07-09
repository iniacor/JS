export const setButton = (buttonText) => {
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = `<button>${buttonText}</button>`;
  // bodyElem.textContent = '<button>buttonText</button>';
};
// -test Data
// setButton('push me');
