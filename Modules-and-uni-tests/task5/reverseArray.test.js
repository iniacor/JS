import { reverseArray } from './reverseArray';

it('Should get reverse array', () => {
  const result = reverseArray([2, 4, 6, 7, 3, 5]);
  expect(result).toEqual([5, 3, 7, 6, 4, 2]);
});
it('Should get null', () => {
  const result = reverseArray(2);
  expect(result).toEqual(null);
});
it('Should get NaN', () => {
  const result = reverseArray([NaN]);
  expect(result).toEqual([NaN]);
});
