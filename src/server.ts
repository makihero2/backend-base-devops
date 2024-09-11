import express from "express";
import { configuration } from "./config.js";
import { esPalindromo } from "./palindromo.js";
import { esPrimo } from "./numeros.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
});

app.get("/key", (req, res) => {
  if (configuration.apiKey) {
    res.json({ message: `Hola, esta api contiene la siguiente api-key: ${configuration.apiKey}` });
  } else {
   // res.status(500).json({ error: "API key no configurada" });
  }
});


app.get("/palindromo/:frase", (req, res) => {
  const { frase } = req.params;
  if (frase === undefined || frase.trim() === "") {
    //return res.status(400).send("Frase no proporcionada o vacía");
  }
  const esPalindromoResult = esPalindromo(frase);
  res.send(`Hola, La frase ingresada "${frase}" ${esPalindromoResult ? "es" : "no es"} un palíndromo`);
});

app.get("/primo/:numero", (req, res) => {
  const { numero } = req.params;
  const num = parseInt(numero, 10);

  if (isNaN(num)) {
   // return res.status(400).send("Número no válido");
  }

  const esPrimoResult = esPrimo(num);
  res.send(`Hola, el número ingresado ${num} ${esPrimoResult ? "es" : "no es"} un número primo`);
});

export default app;
