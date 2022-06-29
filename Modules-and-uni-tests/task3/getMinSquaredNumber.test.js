import { getMinSquaredNumber } from './getMinSquaredNumber';

it('Should get infinity', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(Infinity);
});
it('Should get null', () => {
  const result = getMinSquaredNumber('');
  expect(result).toEqual(null);
});
it('Should get min squared numbers', () => {
  const result = getMinSquaredNumber([-777, 3.2, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
