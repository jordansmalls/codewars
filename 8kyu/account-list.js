//? Build a bank account object, defined by:
//? A name property.
//? A balance property, initially set to 0.
//? A credit method adding the value passed as an argument to the account balance.
//? A describe method returning the account description.

//? Then write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.


class Account {
    constructor(name,balance){
        this.name = name
        this.balance = 0
    }
    credit(amount){
        this.balance += amount
    }
    describe(){
        return `Owner: ${this.name}, Balance: ${this.balance}`
    }
}


let accountList = [];

accountList.push(new Account('Sean'))
accountList.push(new Account('Brad'))
accountList.push(new Account('Georges'))


accountList.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
});