import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../_Models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 // constructor() { }
 private _baseUrl="http://localhost:1581/api/payments";



 constructor(private http:HttpClient) {



  }

  

getPaymentList():Observable<Payment[]>{

   return this.http.get<Payment[]>(`${this._baseUrl}`);

 }



createPayment(payment:Payment):Observable<Object>{

  return this.http.post(`${this._baseUrl}`,payment);

 }


}
