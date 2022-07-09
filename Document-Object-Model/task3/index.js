export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
getItemsList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  const NodeList = Array.from(elementsArray);
  return NodeList;
};
getItemsArray();
