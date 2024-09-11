import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";

describe("Test Suite App", () => {

    // Prueba para el endpoint raíz "/"
    test("endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
            });
    });

    // Prueba para el endpoint "/key" 
    test("endpoint /key", async () => {
        return await request(app)
            .get("/key")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toHaveProperty('key');
                expect(response.body.key).toBeDefined();
            });
    });

    // Prueba para el endpoint "/palindromo" 
    test("endpoint /palindromo", async () => {
        const palabra = "reconocer";
        return await request(app)
            .get(`/palindromo?palabra=${palabra}`)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`La palabra ${palabra} es un palíndromo`);
            });
    });

    // Prueba para el endpoint "/primo"
    test("endpoint /primo", async () => {
        const numero = 7;
        return await request(app)
            .get(`/primo?numero=${numero}`)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`El número ${numero} es primo`);
            });
    });

});
