import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/_Models/payment.model';
import { PaymentService } from 'src/app/_Services/payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  
   payment:Payment=new Payment()
  


  constructor( private paymentService:PaymentService, private router:Router) {
   
   }

  ngOnInit(): void {
  }
  savePayment(){



    this.paymentService.createPayment(this.payment).subscribe(data =>{



      console.log(data);



      this.goToPayment();



    },



    error=>console.log(error));



  }





  goToPayment(){



    this.router.navigate([`/payment`]);



  }





  onSubmit(){



    console.log(this.payment);



    this.savePayment();



  }

}
