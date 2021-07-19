const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can add another test and it still works!!!', () => {
  expect(getGreeting('Reese')).toBe("Hi Reese");
});