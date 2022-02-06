const Engineer = require("../lib/Engineer.js");

test("Create an Engineer object", () => {
    const engineer = new Engineer("Ron", 211, "ronstu@yahoo.com", "ron211");

    expect(engineer.name).toBe('Ron');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toBe("ron211");
});

test("get the role of the person in the company", () => {
    const engineer = new Engineer("Ron", 211, "ronstu@yahoo.com", "ron211");


    expect(engineer.getRole()).toEqual("Engineer");
});

test("get the employee's github id", () => {
    const engineer = new Engineer("Ron", 211, "ronstu@yahoo.com", "ron211");

    expect(engineer.getGitHub()).toEqual("ron211");
});


