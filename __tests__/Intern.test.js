const Intern = require('../lib/Intern');
const intern = new Intern('Daniel', '1', 'dgraves@email.com', 'University Of Utah');

describe("Intern", () => {
    describe("name", () => {
        it("should give us the intern's name", () => {
            expect(intern.name).toBe("Daniel");
        })
    })
    describe("id", () => {
        it("should give us the intern's id", () => {
            expect(intern.id).toBe("1");        
        });
    });
    describe("email", () => {
        it("should give us the intern's email", () => {
            expect(intern.email).toBe("dgraves@email.com");        
        });
    });
    describe("getName", () => {
        it("should return the name from the getName() method", () => {
            expect(intern.getName()).toBe("Daniel");
        });
    });
    describe("getId", () => {
        it("should return the id from the getId() method", () => {
            expect(intern.getId()).toBe("1");
        });
    });
    describe("getEmail", () => {
        it("should return the email from the getEmail() method", () => {
            expect(intern.getEmail()).toBe("dgraves@email.com");
        });
    });
    describe("getSchool", () => {
        it("should return the school from the getSchool() method", () => {
            expect(intern.getSchool()).toBe("University Of Utah");
        });
    });
    describe("getRole", () => {
        it("should return 'Intern' from the getRole() method", () => {
            expect(intern.getRole()).toBe("Intern");
        });
    });
}); 