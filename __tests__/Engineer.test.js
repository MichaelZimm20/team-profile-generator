const Engineer = require('../lib/Engineer');

//creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Michael', 20, 'm.zimm20@gmail.com', 'MichaelZimm20');

    expect(engineer.github).toEqual(expect.any(String));
});

//tests for getGitHub()
test('get Engineer github', () => {
    const engineer = new Engineer('Michael');
    engineer.github = 'MichaelZimm20';

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//test for getRole()
test('get engineer role', () => {
    const engineer = new Engineer('Michael');
    
    expect(engineer.getRole()).toEqual('Engineer');
});