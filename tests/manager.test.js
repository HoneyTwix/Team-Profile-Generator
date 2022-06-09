const { it, expect } = require("@jest/globals")
const Manager = require("../dist/Manager")
describe("Manager", () => {
  it("Making a Manager", () => {
    const manager = new Manager("sans", "111", "sans@gmail.com", "3")
    expect(manager.name).toBe("sans")
    expect(manager.id).toBe("111")
    expect(manager.email).toBe("sans@gmail.com")
    expect(manager.officeNumber).toBe("3")
  })
  it("Gets Role", () => {
    const manager = new Manager("sans", "111", "sans@gmail.com", "3")
    expect(manager.getRole()).toBe('Manager')

  })
})