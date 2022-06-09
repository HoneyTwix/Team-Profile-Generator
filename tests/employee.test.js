const {expect, it} = require('@jest/globals')
const Employee = require('../dist/employee')
describe('Employee',()=>{
    it('Making the Employee Object',()=>{
    const employee = new Employee('diana','4','diana@gmail.com')
    expect(employee.name).toBe('diana')
    expect(employee.id).toBe('4')
    expect(employee.email).toBe('diana@gmail.com')
    })
    it('Returning a Name',()=>{
        const employee = new Employee('diana', '4', 'diana@gmail.com')
        expect(employee.getName()).toBe('diana')
    })
    it('Returning an ID',()=>{
        const employee = new Employee('diana','4','diana@gmail.com')
        expect(employee.getId()).toBe('4')
    })
    it('Returning an Email',()=>{
        const employee = new Employee('diana','4','diana@gmail.com')
        expect(employee.getEmail()).toBe('diana@gmail.com')

    })
    it('Returning Role',()=>{
        const employee = new Employee('diana','4','diana@gmail.com')
        expect(employee.getRole()).toBe('Employee')
    })
    
})