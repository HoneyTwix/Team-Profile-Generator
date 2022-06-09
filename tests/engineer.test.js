const { it, expect } = require("@jest/globals")
const Engineer = require("../dist/engineer")
describe("Engineer", () => {
  it("There's an engineer", () => {
    const engineer = new Engineer("Ronald", "999", "ronald@gmail.com", "HoneyTwix")
    expect(engineer.name).toBe("Ronald")
    expect(engineer.id).toBe("999")
    expect(engineer.email).toBe("ronald@gmail.com")
    expect(engineer.github).toBe("HoneyTwix")
  })
  it("Acquiring Github", () => {
    const engineer = new Engineer("Ronald", "999", "ronald@gmail.com", "HoneyTwix")
    expect(engineer.getGitHub()).toBe("HoneyTwix")
  })
  it("Acquiring Role", () => {
    const engineer = new Engineer("Ronald", "999", "ronald@gmail.com", "HoneyTwix")
    expect(engineer.getRole()).toBe("Engineer")
  })
})