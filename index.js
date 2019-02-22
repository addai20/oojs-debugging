
//--------Don't edit this file. Try only to edit bank.js and transfer.js. Remember to use your debugger tools!--------//

//1. We should be able to create two bank accounts for Ann and Jake
let ann = new BankAccount("Ann")
console.log(ann)
let jake = new BankAccount("Jake")
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
