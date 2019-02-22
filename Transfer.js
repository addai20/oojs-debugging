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
