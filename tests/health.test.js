

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
    // test("responds with 200 and status ready", async () => {
    //     const res = await request(app).get("/ready");
    //     assert.strictEqual(res.status, 200);
    //     assert.strictEqual(res.body.status, "ready");
    // });

     test("TEMP: intentionally broken for rollback demo", async () => {
        const res = await request(app).get("/ready");
        assert.strictEqual(res.status, 500);
    });
});