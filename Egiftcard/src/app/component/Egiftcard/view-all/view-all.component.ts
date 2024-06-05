import { Component, OnInit } from '@angular/core';
import { EgiftcardService } from 'src/app/service/egiftcard.service';
import { Egiftcard }  from 'src/app/model/Egiftcard';


@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  alldetails:Egiftcard[]=[];
  msg?:string;
  errorMsg?:string;
  isUpdate:boolean=false;
  updatecustomer:Egiftcard = new Egiftcard();

  constructor( private egiftcardservice : EgiftcardService) { }

  ngOnInit() {
    
    this.egiftcardservice.getAllDetails().subscribe(
      (data)=>{this.alldetails=data;console.log(JSON.stringify(data))}
    );
  }
  updateCustomer(updateCustomer:Egiftcard){
    console.log("Updatingg" + JSON.stringify(updateCustomer))
    this.updatecustomer=updateCustomer;
    this.isUpdate=true;
  }
  updateConfirm(){
    console.log(JSON.stringify(this.updatecustomer))
    this.egiftcardservice.updateCustomer(this.updatecustomer).subscribe(
      (data)=>{
        this.msg="customer updated"
        this.errorMsg=undefined;
        console.log("updated customer :" + JSON.stringify(this.updatecustomer))
      },
      (error)=>{
        this.msg=undefined;
        console.log(error.error)
        this.errorMsg=undefined;
      },
      ()=>{this.isUpdate=false;}
    );
  }
  deleteCustomer(customerId?:number){
    console.log("Delete customerId :"+customerId)
    this.egiftcardservice.deleteCustomer(customerId).subscribe(
      (data)=>{
        this.msg="customer deleted";
        this.errorMsg=undefined;
        this.alldetails=this.alldetails.filter((egiftcard)=>{egiftcard.customerId==customerId})
      },
      (error)=>{
        this.msg=undefined;
        this.errorMsg=undefined;
      }

    );

  }

}
