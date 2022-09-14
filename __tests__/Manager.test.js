const Manager = require('../lib/Manager');

//creates object for employee
test('creates an employee object', () => {
    const manager = new Manager('Michael', 20, 'm.zimm20@gmail.com', 201);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


//test for getRole()
test('get employee role', () => {
    const manager = new Manager('Michael');
    
    expect(manager.getRole()).toEqual('Manager');
});