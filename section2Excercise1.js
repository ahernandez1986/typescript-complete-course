"use strict";
//Uso de tipo BankAccountType
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
//Uso de tipo PersonalDataType
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
