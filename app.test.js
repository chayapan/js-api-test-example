
const crypto = require('crypto');

const request = require("supertest")
const baseURL = "http://localhost:3000"


describe("GET /todos", () => {
    const newTodo = {
      "id": crypto.randomUUID(),
      "item": "Drink water",
      "completed": false,
    }
    beforeAll(async () => {
      // set up the todo
      await request(baseURL).post("/todo").send(newTodo);
    })
    afterAll(async () => {
      await request(baseURL).delete(`/todo/${newTodo.id}`)
    })
    it("should return 200", async () => {
      const response = await request(baseURL).get("/todos");
      expect(response.statusCode).toBe(200);
      expect(response.body.error).toBe(null);
    });
    it("should return todos", async () => {
      const response = await request(baseURL).get("/todos");
      console.log(response.body);
      // When empty
      // expect(response.body).toEqual({"data":[],"error":null});
      expect(response.body.data.length >= 1).toBe(true);
    });
  });

describe("POST /todo", () => {
    const newTodo = {
       "id": crypto.randomUUID(),
        "item": "Drink water",
        "completed": false,
    }
    afterAll(async () => {
        await request(baseURL).delete(`/todo/${newTodo.id}`)
    })
    it("should add an item to todos array", async () => {
        console.log("Adding item.");
        console.log(newTodo);
        const response = await request(baseURL).post("/todo").send(newTodo);
        console.log(response.body.data);
        expect(response.statusCode).toBe(201);
        const lastItem = response.body.data[response.body.data.length-1]
        expect(lastItem.item).toBe(newTodo["item"]);
        expect(lastItem.completed).toBe(newTodo["completed"]);
    });
});