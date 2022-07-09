export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  const NodeList = Array.from(elementsArray);
  return NodeList;
};
