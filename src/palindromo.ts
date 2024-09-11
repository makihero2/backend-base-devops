export const esPalindromo = (frase: string) => {
    const fraseLimpia = frase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const fraseInvertida = fraseLimpia.split("").reverse().join("");
    return fraseLimpia === fraseInvertida;
};


describe('Pruebas para esPalindromo', () => {

    // Caso de borde: Cadena vacía
    test('Cadena vacía es un palíndromo', () => {
        expect(esPalindromo('')).toBe(true);
    });

    // Caso de borde: Frase con espacios
    test('Frase con espacios "a man a plan a canal panama" es un palíndromo', () => {
        expect(esPalindromo('a man a plan a canal panama')).toBe(true);
    });

    // Caso de borde: Frase con mayúsculas y minúsculas
    test('Frase con mayúsculas "Able was I ere I saw Elba" es un palíndromo', () => {
        expect(esPalindromo('Able was I ere I saw Elba')).toBe(true);
    });

    // Caso de borde: Frase que no es un palíndromo
    test('Frase "Hello World" no es un palíndromo', () => {
        expect(esPalindromo('Hello World')).toBe(false);
    });

    // Caso de borde: Palíndromo de una sola letra
    test('Palíndromo de una sola letra "a" es un palíndromo', () => {
        expect(esPalindromo('a')).toBe(true);
    });

    // Caso de borde: Palíndromo con números
    test('Frase con números "12321" es un palíndromo', () => {
        expect(esPalindromo('12321')).toBe(true);
    });

    // Caso de borde: Frase con letras repetidas
    test('Frase con letras repetidas "aaaaaaa" es un palíndromo', () => {
        expect(esPalindromo('aaaaaaa')).toBe(true);
    });


});
