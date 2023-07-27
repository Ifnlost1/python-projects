
export default interface User {
    name: string,
    age: number,
    isdead: boolean
}




export default class BankAccount {
    private titular: string;
    private saldo: number;

    constructor(titular: User, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    get saldo() {
        return this.saldo;
    }

    get titular() {
        return this.titular;
    }

    set titular(newTitular: User) {
        if (this.titular.isdead) {
            this.titular = newTitular;
        } else {
            throw new Error("o titular atual ainda não morreu.")
        }
    }

    set saldo(newSaldo: number) {
        if (newSaldo < 0) {
            throw new Error("O saldo é megativo!");
        } else {
            this.saldo += newSaldo;
        }
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return valor;
        } else {
            throw new Error("Saldo indisponivel :(");
        }
    }
}