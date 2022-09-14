const Employee = require('../lib/Employee');

//creates object for employee
test('creates an employee object', () => {
    const employee = new Employee('Michael', '20', 'm.zimm20@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//tests for getName()
test('get employee name', () => {
    const employee = new Employee('Michael');

    expect(employee.getName()).toEqual(expect.stringContaining('Michael'));
});

//tests for getId()
test('get employee id', () => {
    const employee = new Employee('Michael');
    employee.id = 20;

    expect(employee.getId()).toEqual(expect.any(Number));
});

//tests for getEmail()
test('get employee email', () => {
    const employee = new Employee('Michael');
    employee.email = 'm.zimm20@gmail.com';

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//test for getRole()
test('get employee role', () => {
    const employee = new Employee('Michael');
    
    expect(employee.getRole()).toEqual('Employee');
});
