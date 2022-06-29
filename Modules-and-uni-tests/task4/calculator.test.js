import { calc } from './calculator';

it('Should get sum', () => {
  const res = calc('1 + 2');
  expect(res).toEqual('1 + 2 = 3');
});
it('Should get result after subtracting', () => {
  const res = calc('4 - 3');
  expect(res).toEqual('4 - 3 = 1');
});
it('Should get result after dividing', () => {
  const res = calc('6 / 2');
  expect(res).toEqual('6 / 2 = 3');
});
it('Should get result after multiplying', () => {
  const res = calc('2 * 2');
  expect(res).toEqual('2 * 2 = 4');
});
it('Should get null', () => {
  const res = calc(4);
  expect(res).toEqual(null);
});
