class Transfer {
  constructor(s, r, a){
    this.status = "pending"
    this.sender = sender
    this.receiver = receiver
    this.amount = amount
  }

  executeTransaction(){
    let sendersBalanceAfterTransfer = sender.getBalance() - amount
    let message
    if(status == "pending" && sendersBalanceAfterTransfer > 0){
      sender.setBalance(sender.getBalance() - amount)
      receiver.setBalance(receiver.getBalance() + amount)
      message = "Transaction completed"
      status = "complete"
    }else{
      message = rejectTransfer()
    }
    return message
  }

  rejectTransfer(){
    this.status = "rejected"
    return "Transaction rejected. Please check your account balance."
  }

  getStatus(){
    this.status
  }

}
