import { describe, it, expect } from 'vitest';

describe('Vitest Setup', () => {
  it('should verify vitest is working', () => {
    expect(true).toBe(true);
  });

  it('should test basic math', () => {
    expect(2 + 2).toBe(4);
  });

  it('should test string matching', () => {
    const text = 'Hello, World!';
    expect(text).toContain('World');
  });

  it('should test arrays', () => {
    const array = [1, 2, 3, 4, 5];
    expect(array).toHaveLength(5);
    expect(array).toContain(3);
  });

  it('should test objects', () => {
    const user = { name: 'John', age: 30 };
    expect(user).toHaveProperty('name');
    expect(user.age).toBe(30);
  });
});
