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

    test("endpoint /palindromo", async () => {
        const palabra = "madam";
        return await request(app)
            .get(`/palindromo/${palabra}`)
            .expect("Content-Type", /text\/html/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, La frase ingresada es palindromo`);
            });
    });

    test("endpoint /primo", async () => {
        const numero = 5;
        return await request(app)
            .get(`/primo/${numero}`)
            .expect("Content-Type", /text\/html/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, el numero ingresado es un numero primo`);
            });
    });

});
