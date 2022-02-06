const Manager = require('../lib/Manager.js');

test("Create a manager object", () => {
    const manager = new Manager("Kim", 221, "exmple@yahoo.com", 100);

    expect(manager.name).toBe('Kim');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() should return the position of the employee", () => {
    const manager = new Manager("Kim", 221, "exmple@yahoo.com", 100);

   expect(manager.getRole()).toBe("Manager");
});