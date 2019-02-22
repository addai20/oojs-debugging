class Transfer {
  constructor(s, r, a){
    this.status = "pending"
    this.sender = sender
    this.receiver = receiver
    this.amount = amount
  }

  executeTransaction(){
    let senderBalanceAfterTransfer = sender.getBalance() - amount
    if(status == "pending" && senderBalanceAfterTransfer > 0){
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
