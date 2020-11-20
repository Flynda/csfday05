import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup

  nameFormControl = new FormControl('', [Validators.required]);
  contactNoFormControl = new FormControl('', [Validators.required]);
  genderFormControl = new FormControl('');
  dateOfBirthFormControl = new FormControl('', [Validators.required]);
  orderDateFormControl = new FormControl('', [Validators.required]);
  orderTypeFormControl = new FormControl('', [Validators.required]);
  orderUnitFormControl = new FormControl('', [Validators.required]);

  currentYear = new Date().getFullYear()
  currentMonth = new Date().getMonth()
  currentDay = new Date().getDate()
  maxDate: Date;

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      
      name: this.nameFormControl,
      contactNo: this.contactNoFormControl,
      gender: this.genderFormControl,
      dateOfBirth: this.dateOfBirthFormControl,
      orderDate: this.orderDateFormControl,
      orderType: this.orderTypeFormControl,
      orderUnit: this.orderUnitFormControl
    });
    this.maxDate = new Date(this.currentYear + 0, this.currentMonth, this.currentDay - 1);
  }

  reset(formDirective : FormGroupDirective){
    this.orderForm.reset()
    formDirective.resetForm();

    Object.keys(this.orderForm.controls).forEach(key => {
      this.orderForm.get(key).setErrors(null)
    })

    this.nameFormControl.setValidators([Validators.required])
    
    this.nameFormControl.updateValueAndValidity()

    // this.contactNoFormControl.setValidators([Validators.required])
    // this.contactNoFormControl.updateValueAndValidity()
    // this.dateOfBirthFormControl.setValidators([Validators.required])
    // this.dateOfBirthFormControl.updateValueAndValidity()
    // this.orderDateFormControl.setValidators([Validators.required])
    // this.orderDateFormControl.updateValueAndValidity()
    // this.orderTypeFormControl.setValidators([Validators.required])
    // this.orderTypeFormControl.updateValueAndValidity()
    // this.orderUnitFormControl.setValidators([Validators.required])
    // this.orderUnitFormControl.updateValueAndValidity()
    // console.log(this.orderForm.valid)
  }

  addOrder(){
    console.log(this.orderForm.value)
  }

  
}
