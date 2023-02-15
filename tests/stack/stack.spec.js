const { expect, describe, it, beforeEach } = require('@jest/globals');
const { Stack } = require('../../src/classes/Stack');

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
  });

  it('can pop off', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});

    stack.push('🥭');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥭');

    stack.pop('🥭');
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
    expect(stack.peek).toBe(undefined);
  });
});

// const cb = msg => {
// console.log(msg);
// };
//
// describe('testSuite', () => {
//   beforeAll(() => cb('🍎1 - beforeAll'));
//   afterAll(() => cb('🍎2 - afterAll'));
//   beforeEach(() => cb('🍎3 - beforeEach'));
//   afterEach(() => cb('🍎4 - afterEach'));
//   test('test - 1', () => cb('🍎5 - test'));

//   describe('Scoped / Nested block', () => {
//     beforeAll(() => cb('🍐scoped 6 - before All'));
//     afterAll(() => cb('🍐scoped 7 - after All'));
//     beforeEach(() => cb('🍐scoped 8 - before Each'));
//     afterEach(() => cb('🍐scoped 9 - after Each'));
//     test('scoped test - 2', () => cb('🍐scoped 10 - test'));
//   });
// });

// 🍎1 - beforeAll
// 🍎3 - beforeEach
// 🍎5 - test
// 🍎4 - afterEach
// 🍐scoped 6 - before All
// 🍎3 - beforeEach
// 🍐scoped 8 - before Each
// 🍐scoped 10 - test
// 🍐scoped 9 - after Each
// 🍎4 - afterEach
// 🍐scoped 7 - after All
// 🍎2 - afterAll
