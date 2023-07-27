import { BankAccount, User } from "./BankAccount";

const jose: User = {
    name: "José da Silva",
    age: 32,
    isdead: false
}

let joseconta = new BankAccount(jose, 1350.40);

console.log(joseconta.ssaldo);
joseconta.saldo = 36;
console.log(joseconta.ssaldo)


