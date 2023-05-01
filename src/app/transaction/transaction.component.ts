import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../TransactionService/transaction.service';
import { Transaction } from '../Entities/transaction';
import { Type_transaction } from '../Entities/Type_transaction';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  searchType: string = 'email';

  transactions:any;
  form : boolean = false;
  transaction!:Transaction;
  receiverEmail: any;
  senderEmail:any;
  p: number = 1;
  searchTerm: string = '';
  constructor(private transactionService: TransactionService) { }
  date: string = '';
  
  ngOnInit(): void {
      this.getTransactions();;
    this.transaction={
      id_transaction:null,
      sender:null,
      receiver:null,
      date_transaction:null,
      type:null,
      value:null,
      status:null,
      email_receiver:null,
      email_sender:null,
      pret:null,
      investement:null,

  };
  }


  showWithdrawForm(): void {
    const formElement = document.getElementById('withdraw-form');
    if (formElement) {
      formElement.style.display = 'block';
    }
  }
  getTransactions(){
  this.transactionService.getTransactions().subscribe(res=>this.transactions=res);


  }
 /*
  getTransactionsByDate() {
    const dateObj = new Date(this.date);
    this.transactionService.getTransactionsByDate(dateObj).subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  getTransactionsBySender() {
    this.transactionService.getTransactionsBySender(Number(this.sender)).subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  getTransactionsByReceiver() {
    this.transactionService.getTransactionsByReceiver(Number(this.receiver)).subscribe(transactions => {
      this.transactions = transactions;
    });
  } */
  onWithdrawClick(userId: number, amount: number, receiverId: number, type: Type_transaction): void {
    this.transactionService.withdraw(userId, amount, receiverId, type)
      .subscribe(transaction => {
        console.log('Transaction completed:', transaction);
        // handle success case here
      }, error => {
        console.error('Transaction failed:', error);
        // handle error case here
      });
  }
 /* getEmailReceiver(transactionId: any) {
    this.transactionService.getEmailReceiver(transactionId).subscribe(
      (email: any) => {
        this.receiverEmail = email;
        console.log('Receiver email:', this.receiverEmail);
      },
      (error: any) => {
        console.error('Failed to get receiver email:', error);
      }
    );
  }

getEmailSender(id_transaction: number) {
  console.log('Getting sender email for transaction with ID', id_transaction);
  this.transactionService.getEmailSender(id_transaction).subscribe({
    next: (res: string) => {
      this.senderEmail = res;
      console.log('Sender email:', this.senderEmail);
      // handle success case here
    },
    error: (error: any) => {
      console.error('Failed to get sender email:', error);
      // handle error case here
    }
  });
} */

  
  }

  



