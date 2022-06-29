import { getMinSquaredNumber } from './getMinSquaredNumber';
it('Should get min squared numbers', () => {
  const result = getMinSquaredNumber([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
