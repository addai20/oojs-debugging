class BankAccount {

  constructor(name){
    balance = 1000
    name = name
  }

  deposit(){
    return this.balance
  }

   isValid(){
     return this.balance > 0
   }

   setBalance(newBalance){
     this.balance = newBalance
   }

   getBalance(){
     return this.balance
   }
}
