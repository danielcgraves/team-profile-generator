const Manager = require('../lib/Manager');
const manager = new Manager('Daniel', '1', 'dgraves@email.com', '101');

describe("Manager", () => {
    describe("name", () => {
        it("should give us the manager's name", () => {
            expect(manager.name).toBe("Daniel");
        })
    })
    describe("id", () => {
        it("should give us the manager's id", () => {
            expect(manager.id).toBe("1");        
        });
    });
    describe("email", () => {
        it("should give us the manager's email", () => {
            expect(manager.email).toBe("dgraves@email.com");        
        });
    });
    describe("getName", () => {
        it("should return the name from the getName() method", () => {
            expect(manager.getName()).toBe("Daniel");
        });
    });
    describe("getId", () => {
        it("should return the id from the getId() method", () => {
            expect(manager.getId()).toBe("1");
        });
    });
    describe("getEmail", () => {
        it("should return the email from the getEmail() method", () => {
            expect(manager.getEmail()).toBe("dgraves@email.com");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the office number from the getOfficeNumber() method", () => {
            expect(manager.getOfficeNumber()).toBe("101");
        });
    });
    describe("getRole", () => {
        it("should return 'Manager' from the getRole() method", () => {
            expect(manager.getRole()).toBe("Manager");
        });
    });
}); 