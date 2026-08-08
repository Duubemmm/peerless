// const test = require("node:test");
// const assert = require("node:assert");
// const request = require("supertest");

// const app = require("../app");

// test("GET /health returns 200", async () => {
//   const response = await request(app).get("/health");

//   assert.strictEqual(response.statusCode, 200);
//   assert.deepStrictEqual(response.body, {
//     status: "ok",
//   });
// });

// test("GET /ready returns 200", async () => {
//   const response = await request(app).get("/ready");

//   assert.strictEqual(response.statusCode, 200);
//   assert.deepStrictEqual(response.body, {
//     status: "ready",
//   });
// });

// test("GET unknown route returns 404", async () => {
//   const response = await request(app).get("/does-not-exist");

//   assert.strictEqual(response.statusCode, 404);
//   assert.deepStrictEqual(response.body, {
//     error: "Route not found",
//   });
// });


const { test, describe } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
    test("responds with 200 and a message", async () => {
        const res = await request(app).get("/");
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.message, "API is running");
    });
});

describe("GET /health", () => {
    test("responds with 200 and status healthy", async () => {
        const res = await request(app).get("/health");
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.status, "healthy");
    });
});

describe("GET /ready", () => {
    test("responds with 200 and status ready", async () => {
        const res = await request(app).get("/ready");
        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.status, "ready");
    });
});