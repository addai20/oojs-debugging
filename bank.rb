class Transfer
  attr_accessor :status, :amount, :sender, :receiver

  def initialize(sender, receiver, amount)
    @status = "pending"
    @sender = sender
    @receiver = receiver
    @amount = amount
  end

  def valid?
    sender.valid? && amount >= 0
  end

  def execute_transaction
    if valid? && sender.balance > amount && self.status == "pending"
      sender.balance -= amount
      receiver.balance += amount
      self.status = "complete"
    else
      reject_transfer
    end
  end

  def reject_transfer
    self.status = "rejected"
    "Transaction rejected. Please check your account balance."
  end
end

class BankAccount
  attr_accessor :balance, :name

  def initialize(name)
    @name = name
    @balance = 1000
  end

  def deposit(deposit_amount)
    self.balance += deposit_amount
  end

  def valid?
    balance > 0
  end
end
