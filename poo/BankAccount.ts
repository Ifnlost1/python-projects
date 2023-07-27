

export interface User {
    name: string,
    age: number,
    isdead: boolean
}




export class BankAccount {
    constructor(private _titular: User, private _saldo: number) {}

    get saldo() {
        return this._saldo;
    }

    //string saldo
    get ssaldo() {
        return this.saldo.toFixed(3);
    }

    get titular() {
        return this._titular;
    }

    set titular(newTitular: User) {
        if (this.titular.isdead) {
            this._titular = newTitular;
        } else {
            throw new Error("o titular atual ainda não morreu.")
        }
    }

    set saldo(newSaldo: number) {
        if (newSaldo < 0) {
            throw new Error("O saldo é megativo!");
        } else {
            this._saldo += newSaldo;
        }
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this._saldo -= valor;
            return valor;
        } else {
            throw new Error("Saldo indisponivel :(");
        }
    
    }
}