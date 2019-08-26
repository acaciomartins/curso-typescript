export default abstract class Conta {
    numero: number;
    saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    abstract valorizar(): void;
    abstract sacar(valor: number): void;
}