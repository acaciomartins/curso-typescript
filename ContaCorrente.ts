import Conta from "./Conta";

export default class ContaCorrente extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }


    sacar(valor: number): void {
        this.saldo = this.saldo - valor + (valor * 0.02);
    }

    valorizar(): void {
        this.saldo;
    }


}