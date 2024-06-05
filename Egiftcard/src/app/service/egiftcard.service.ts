import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egiftcard } from '../model/Egiftcard';

@Injectable({
  providedIn: 'root'
})
export class EgiftcardService {

  constructor(private httpclient : HttpClient) { }
  
  getAllDetails():Observable<any>{
    return this.httpclient.get("http://localhost:8085/api/all");
  }
  createCustomer(newEgiftcard:Egiftcard):Observable<any>{
    return this.httpclient.post("http://localhost:8085/api/register",newEgiftcard,{responseType:'text'})

  }
  deleteCustomer(customerId?:number):Observable<any>{
    return this.httpclient.delete("http://localhost:8085/api/delete/"+customerId)

  }
  updateCustomer(updatecustomer:Egiftcard):Observable<any>{
    return this.httpclient.put("http://localhost:8085/api/update",updatecustomer,{responseType:'text'})

  }
}
