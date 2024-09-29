import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/_Models/payment.model';
import { PaymentService } from 'src/app/_Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments?:Payment[];

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }
  
  private getPayments(){

    this.paymentService.getPaymentList().subscribe(data =>{

      this.payments=data;

    }

    );

}



}
