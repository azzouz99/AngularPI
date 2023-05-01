import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../TransactionService/transaction.service';
import { Type_transaction } from '../Entities/Type_transaction';

@Component({
  selector: 'app-withdrawmodel',
  templateUrl: './withdrawmodel.component.html',
  styleUrls: ['./withdrawmodel.component.css']
})
export class WithdrawmodelComponent implements OnInit {
  userId!: number;
  amount: number=0;
  receiverId!: number;
  type: Type_transaction = Type_transaction.WITHDRAW;
  constructor(private transactionService: TransactionService){ }


  ngOnInit(): void {
  }
  onSubmit() {
    this.transactionService.withdraw(this.userId, this.amount, this.receiverId, this.type)
      .subscribe(transaction => {
        console.log('Transaction successful:', transaction);
        // TODO: show success message to user
      }, error => {
        console.error('Transaction failed:', error);
        // TODO: show error message to user
      });
  }

}
