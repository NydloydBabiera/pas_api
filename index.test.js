const request = require("supertest");
const app = require("./src/index");

//post
describe("Add employee and user accounts", () => {
  test("Request should return 201", async () => {
    const response = await request(app)
      .post("/pas_api/insertNewEmp")
      .send({
        firstName: "nydloyd",
        middleName: "villaruel",
        lastName: "babiera",
        age: 24,
        gender: "male",
        address_emp: "tacurong city",
      });
    console.log(response.text);
    expect(response.status).toBe(201);
  });
});

describe("Select statement or query", () => {
  test("Should return 200", async () => {
    const response = await request(app).get("/pas_api/getAllEmp");
    expect(response.status).toBe(201);
  });
});
