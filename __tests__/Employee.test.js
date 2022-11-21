const Employee = require('../lib/Employee');
const employee = new Employee('Daniel', '1', 'dgraves@email.com');

describe("Employee", () => {
    describe("name", () => {
        it("should give us the employee's name", () => {
            expect(employee.name).toBe("Daniel");
        })
    })
    describe("id", () => {
        it("should give us the employee's id", () => {
            expect(employee.id).toBe("1");        
        });
    });
    describe("email", () => {
        it("should give us the employee's email", () => {
            expect(employee.email).toBe("dgraves@email.com");        
        });
    });
    describe("getName", () => {
        it("should return the name from the getName() method", () => {
            expect(employee.getName()).toBe("Daniel");
        });
    });
    describe("getId", () => {
        it("should return the id from the getId() method", () => {
            expect(employee.getId()).toBe("1");
        });
    });
    describe("getEmail", () => {
        it("should return the email from the getEmail() method", () => {
            expect(employee.getEmail()).toBe("dgraves@email.com");
        });
    });
    describe("getRole", () => {
        it("should return 'Employee' from the getRole() method", () => {
            expect(employee.getRole()).toBe("Employee");
        });
    });
}); 