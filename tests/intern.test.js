const { expect, it } = require("@jest/globals")
const Intern = require("../dist/Intern")
describe("Intern", () => {
  it("Making an Intern", () => {
    const intern = new Intern("papyrus", "888", "papyrus@gmail.com", "Vanderbilt")
    expect(intern.name).toBe("papyrus")
    expect(intern.id).toBe("888")
    expect(intern.email).toBe("papyrus@gmail.com")
    expect(intern.school).toBe("Vanderbilt")
  })
  it("Intern's School", () => {
    const intern = new Intern("papyrus", "888", "papyrus@gmail.com", "Vanderbilt")
    expect(intern.getSchool()).toBe('Vanderbilt')
    expect(intern.getRole()).toBe('Intern')
  })
})