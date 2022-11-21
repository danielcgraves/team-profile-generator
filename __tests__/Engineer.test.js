const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Daniel', '1', 'dgraves@email.com', 'https://github.com/danielcgraves');

describe("Engineer", () => {
    describe("name", () => {
        it("should give us the engineer's name", () => {
            expect(engineer.name).toBe("Daniel");
        })
    })
    describe("id", () => {
        it("should give us the engineer's id", () => {
            expect(engineer.id).toBe("1");        
        });
    });
    describe("email", () => {
        it("should give us the engineer's email", () => {
            expect(engineer.email).toBe("dgraves@email.com");        
        });
    });
    describe("getName", () => {
        it("should return the name from the getName() method", () => {
            expect(engineer.getName()).toBe("Daniel");
        });
    });
    describe("getId", () => {
        it("should return the id from the getId() method", () => {
            expect(engineer.getId()).toBe("1");
        });
    });
    describe("getEmail", () => {
        it("should return the email from the getEmail() method", () => {
            expect(engineer.getEmail()).toBe("dgraves@email.com");
        });
    });
    describe("getGithub", () => {
        it("should return the github from the getGithub() method", () => {
            expect(engineer.getGithub()).toBe("https://github.com/danielcgraves");
        });
    });
    describe("getRole", () => {
        it("should return 'Engineer' from the getRole() method", () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
}); 