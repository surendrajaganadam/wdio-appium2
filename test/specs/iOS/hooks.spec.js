describe('Examples on hooks ', () => {

before( async () => {
console.log('This is before hook');
})

beforeEach( async () => {
console.log('This is before each hook');
})

after( async () => {
console.log('This is after hook');
})

afterEach( async () => {
console.log('This is after each hook');
})

it('Hook1', async () => {
console.log('This is hook 1');

});

it('Hook2', async () => {
console.log('This is hook 1');

});

});