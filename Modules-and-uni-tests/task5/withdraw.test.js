import { withdraw } from './withdraw';

it('Should get balance after withdraw = 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('Should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
  expect(result).toEqual(-1);
});

it('Should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Jn', 50);
  expect(result).toEqual(-1);
});

it('Should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'john', 50);
  expect(result).toEqual(-1);
});

it('Should get -1', () => {
  const result = withdraw('Ann', 'John', 'User', 1400, 87, -6, 'John', 50);
  expect(result).toEqual(-1);
});

it('Should get -1', () => {
  const result = withdraw('Ann', 'John', 'User', 1400, 87, -6, 'John', '50s');
  expect(result).toEqual(-1);
});
