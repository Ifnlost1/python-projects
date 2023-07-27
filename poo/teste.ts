import { BankAccount, User } from "./BankAccount";

const jose: User = {
    name: "José da Silva",
    age: 32,
    isdead: false
}

const agiota: User = {
    name: "Carlos Alberto",
    age: 48,
    isdead: false
}

let joseconta: BankAccount = new BankAccount(jose, 1350.40);

console.log(joseconta.ssaldo);
joseconta.saldo = 36;
console.log(joseconta.ssaldo)

console.log(`Infelizmente, José é um homem bebâdo, e acabou fazendo um acordo com um agiota sem perceber :(
    
    O agiota, enfurecido, acabou matando o José, e roubou sua conta :(`)


jose.isdead = true;
joseconta.titular = agiota

console.log(joseconta.titular)