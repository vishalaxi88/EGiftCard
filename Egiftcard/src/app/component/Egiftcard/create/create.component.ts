import { Component, OnInit } from '@angular/core';
import { Egiftcard } from 'src/app/model/Egiftcard';
import { EgiftcardService } from 'src/app/service/egiftcard.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newEgiftcard: Egiftcard= new Egiftcard();

  msg?:string;
  errorMsg?:string;

  constructor(private egiftcardservice : EgiftcardService) { }

  ngOnInit() {
  }
  addAccount(){
    alert(JSON.stringify( this.newEgiftcard))
    this.egiftcardservice.createCustomer(this.newEgiftcard).subscribe(
      (data)=>{
        this.msg="Customer Registered";
        this.errorMsg=undefined;
      },
    (error)=>{
      this.msg= undefined;
      this.errorMsg=error.error(); 
    }
    );
  }

}
