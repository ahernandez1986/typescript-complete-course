//Definicion de tipo BankAccountType
type BankAccountType = {
	money: number,
	deposit: (val: number) => void
};

//Uso de tipo BankAccountType
let bankAccount: BankAccountType = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

//Definicion de tipo PersonalDataType
type PersonalDataType = {
    name: string,
    bankAccount:BankAccountType,
    hobbies: string[]
} ;

//Uso de tipo PersonalDataType
let myself: PersonalDataType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000); 
console.log(myself);