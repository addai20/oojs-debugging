class Transfer {
  constructor(sender, receiver, amount){
    this.status = "pending"
    this.sender = sender
    this.receiver = receiver
    this.amount = amount
  }

  isValid(){
    return this.sender.isValid() && this.amount >= 0
  }

  executeTransaction(){
    if(isValid && sender.getBalance() > amount && status == "pending"){
      sender.setBalance(sender.getBalance() - amount)
      receiver.setBalance(receiver.getBalance() + amount)
      status = "complete"
      return "Transaction completed"
    }else{
      return rejectTransfer()
    }
  }

  rejectTransfer(){
    this.status = "rejected"
    return "Transaction rejected. Please check your account balance."
  }

  getStatus(){
    this.status
  }

}

class BankAccount {

  constructor(name){
    balance = 1000
    name = name
  }

  deposit(){
    this.balance
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

//---------------Don't edit below this line-------------------//

//1. We should be able to create two bank accounts for Ann and Jake
let ann = new BankAccount("Ann")
console.log(ann)
let jake = new BankAccount("jake")
console.log(jake)

//2.1 We should be able to creata a first transfer where Ann transfer $900 to Jake
//2.2 When we execute that transfer, it should be completed and Ann should have $100
let t1 = new Transfer(ann, jake, 900)
console.log(t1.executeTransaction())
console.log("%c Ann should now has a balance of 100:", 'color: cyan', ann.getBalance())

//3.1 We should be able to create a second transfer where Ann transfer $101 to Jake
//3.2 When we execut that transfer, it should NOT be sucessful and the status of that transfer should be "rejected"
let t2 = new Transfer(ann, jake, 101)
console.log(t2.executeTransaction())
console.log("%c The status of this transfer should be rejected:", 'color: cyan', t2.getStatus())

//4 We then deposit $50 into Ann's account, her new balance is $150.
ann.deposit(50)
console.log("%c Ann's new balance should be 150:", 'color: cyan', ann.getBalance())
