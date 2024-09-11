export const esPrimo = (numero: number) => {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};

describe('Pruebas para esPrimo', () => {

    // Caso de borde: Número menor que 2
    test('Número -5 no es primo', () => {
        expect(esPrimo(-5)).toBe(false);
    });

    test('Número 0 no es primo', () => {
        expect(esPrimo(0)).toBe(false);
    });

    test('Número 1 no es primo', () => {
        expect(esPrimo(1)).toBe(false);
    });

    // Casos de números primos pequeños
    test('Número 2 es primo', () => {
        expect(esPrimo(2)).toBe(true);
    });

    test('Número 3 es primo', () => {
        expect(esPrimo(3)).toBe(true);
    });

    // Casos de números no primos pequeños
    test('Número 4 no es primo', () => {
        expect(esPrimo(4)).toBe(false);
    });

    test('Número 6 no es primo', () => {
        expect(esPrimo(6)).toBe(false);
    });

    // Casos de números primos grandes
    test('Número 29 es primo', () => {
        expect(esPrimo(29)).toBe(true);
    });

    test('Número 31 es primo', () => {
        expect(esPrimo(31)).toBe(true);
    });

    // Casos de números no primos grandes
    test('Número 100 no es primo', () => {
        expect(esPrimo(100)).toBe(false);
    });

    test('Número 200 no es primo', () => {
        expect(esPrimo(200)).toBe(false);
    });

    test('Número 300 no es primo', () => {
        expect(esPrimo(300)).toBe(false);
    });
});
