export const getTitle = () => {
  const titleElem = document.querySelector('.title');
  const titleContent = titleElem.textContent;
  return titleContent;
};
export const getDescription = () => {
  const descriptElem = document.querySelector('.about');
  const descripContent = descriptElem.innerText;
  return descripContent;
};
export const getPlans = () => {
  const plansElem = document.querySelector('.plans');
  const plansContent = plansElem.innerHTML;
  return plansContent;
};
export const getGoal = () => {
  const goalElem = document.querySelector('.goal');
  const goalContent = goalElem.outerHTML;
  return goalContent;
};
