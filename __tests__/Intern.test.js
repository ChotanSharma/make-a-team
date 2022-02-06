
const Intern = require("../lib/Intern.js");

test("Create an Intern object", () => {
    const intern = new Intern("John", 201, "johnstu@yahoo.com", "MSU");

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toBe("MSU");
});

test("get the role of the person in the company", () => {
    const intern = new Intern("John", 201, "johnstu@yahoo.com", "MSU");

    expect(intern.getRole()).toEqual("Intern");
});

test("get the school name of the intern", () => {
    const intern = new Intern("John", 201, "johnstu@yahoo.com", "MSU");

    expect(intern.getSchool()).toEqual("MSU");
});