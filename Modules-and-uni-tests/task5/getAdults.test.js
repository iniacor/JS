import { getAdults } from './getAdults';

it('Should get value > 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('Should get {}', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('Should get {}', () => {
  const result = getAdults({ 'John Doe': -19, Tom: -17, Bob: -18 });
  expect(result).toEqual({});
});
