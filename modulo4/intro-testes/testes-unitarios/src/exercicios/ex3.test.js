import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("procura numeros duplicados", () => {
    const resultado = checaItensDuplicados([1, 2 ,1]);

    expect(resultado).toEqual(true)});

    test("procura itens duplicados", () => {
        const resultado = checaItensDuplicados(["a", "a", "b", "c"]);
    
        expect(resultado).toEqual(true)});

    test("procura itens duplicados", () => {
        const resultado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        
        expect(resultado).toEqual(true)})
    test("procura itens duplicados", () => {
        const resultado = checaItensDuplicados([]);
            
        expect(resultado).toEqual(false)})
});
