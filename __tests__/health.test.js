import healthStatus from '../src/health';

test('should return healthy', () => {
  expect(healthStatus({
    name: 'Маг',
    health: 90,
  })).toBe('healthy');
});

test('should return wounded', () => {
  expect(healthStatus({
    name: 'ЧакЧак',
    health: 50,
  })).toBe('wounded');
});

test('should return critical', () => {
  expect(healthStatus({
    name: 'Ромашка',
    health: 14,
  })).toBe('critical');
});
