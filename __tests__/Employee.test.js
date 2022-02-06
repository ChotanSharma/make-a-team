const Employee = require("../lib/Employee.js");
test("Create an Employee object", () => {
    const employee = new Employee("John", 201, "johnstu@yahoo.com", "MSU");

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get the employee's name", () => {
    const employee = new Employee("John", 201, "johnstu@yahoo.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("getID should return employee's current id", () => {
    const employee = new Employee("John", 201, "johnstu@yahoo.com", "MSU");

    expect(employee.getID()).toEqual(expect.any(Number));
});

test("get the employee's email id", () => {
    const employee = new Employee("John", 201, "johnstu@yahoo.com", "MSU");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("get the employee's role in the company", () => {
    const employee = new Employee("John", 201, "johnstu@yahoo.com", "MSU");


    expect(employee.getRole()).toEqual("employee");
});

