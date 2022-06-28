import { getEvenNumbers } from './calculator';
it('Should 17 equal 17', () => {
  expect(17).toEqual(17);
});
it('Should 18  not equal 17', () => {
  expect(18).not.toEqual(17);
});
it('Should keep even numbers only', () => {
  const result = getEvenNumbers([2, 4, 6, 7, 3, 5]);
  expect(result).toEqual([2, 4, 6]);
});
