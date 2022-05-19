import { Component, OnInit } from '@angular/core';
import { DealService } from 'src/app/services/deal.service';  
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Router } from '@angular/router';  
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent implements OnInit {

  submitted: boolean= false;  
  dealForm: any;  
    
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private dealService: DealService,private router:Router) { }  
  
  ngOnInit(): void {  
    this.dealForm = this.formBuilder.group({  
      "DealId":["",Validators.required],
      "DealNumber":["",Validators.required],
      "EstimatedMoveDate":["",Validators.required],
      "EstimatedPayDate":["",Validators.required],
      "AllocationVolume" :["",Validators.required],
      "Commodity" :["",Validators.required],
      "NotionalAmount" :["",Validators.required],
      "Collateral" :["",Validators.required],
      "NetExposure" :["",Validators.required],
      "Exposure" :["",Validators.required],
      "CounterpartyId":["",Validators.required],
      "CounterpartyName" :["",Validators.required],
      "AllocationNumber":["",Validators.required],
      "ExpectedCreditRelease":["",Validators.required],
      "CreditComments":["",Validators.required],
      "CreditAnalyst":["",Validators.required],
      "Reason":["",Validators.required],
      "DealStatus":["",Validators.required],
      "IsBuyDeal" :["",Validators.required],
      "DealCreditHoldReleaseCommentId":["",Validators.required],
      "DealCreditHoldReleaseReasonId":["",Validators.required],
      "ResponsibleAnalystId":["",Validators.required],
      "DealCreditHoldReleaseStatusId":["",Validators.required],
      "BusinessUnit":["",Validators.required],
      "Scheduler":["",Validators.required],
      "Trader":["",Validators.required],
      "TransactionUnits":["",Validators.required],
      "ResponsibleAnalyst":["",Validators.required],
      "OrderNumber":["",Validators.required],
      "ItemNumber":["",Validators.required],
      "CreditRevisionDate":["",Validators.required],
      "RevisedBy":["",Validators.required],
      "ContractStartDate":["",Validators.required],
      "ContractEndDate":["",Validators.required],
      "ParentName":["",Validators.required],
      "BookingCompany" :["",Validators.required] 
    });  
  }  
  onSubmit() {  
    this.submitted = true;  
    if (this.dealForm.invalid) {  
      return;  
    }  
    this.dealService.addDeal(this.dealForm.value) 
      .subscribe( (data: { toString: () => string | undefined; }) => {  
        this.toastr.success("success", data.toString());  
        this.router.navigate(['deals']);  
      });  
  }  
  Cancel()  
  {  
    this.router.navigate(['deals']);  
  } 

}

