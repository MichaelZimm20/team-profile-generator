const Intern = require('../lib/Intern');

//creates object for employee
test('creates an employee object', () => {
    const intern = new Intern('Michael', 20, 'm.zimm20@gmail.com', "MyUniversity");

    expect(intern.school).toEqual(expect.any(String));
});

//test for getSchool
test('gets Intern school', () => {
    const intern = new Intern('Michael', 20, 'm.zimm20@gmail.com', "MyUniversity");
    intern.school = 'MyUniversity';

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
   

//test for getRole()
test('get intern role', () => {
    const intern = new Intern('Michael');
    
    expect(intern.getRole()).toEqual('Intern');
});