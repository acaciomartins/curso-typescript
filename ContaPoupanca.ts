import Conta from "./Conta";

export default class ContaPoupanca extends Conta implements Rendimento {

    depositar(valor: number) {
        this.saldo = this.saldo + valor;
    }

    rendimento_atual: number = 0;

    gerarRelatorio(): void {
        console.log("Conta Investimento, Número da conta: " + this.numero + ", Saldo atual: " + this.saldo + ", Rendimento: " + this.rendimento_atual);
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor + (valor * 0.04);
    }

    valorizar(): void {
        this.saldo += this.saldo * 0.02;
        this.rendimento_atual = this.saldo;
    }

}
