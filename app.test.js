const { numbers, halved } = require('./app');

test('array has a length of 5', () => {
  expect(numbers.length).toBe(5);
});

test('halved array returns the correct value', () => {
  expect(halved).toEqual([0.5, 1, 1.5, 2, 2.5]);
});
