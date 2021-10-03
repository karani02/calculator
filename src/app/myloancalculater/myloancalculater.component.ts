import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myloancalculater',
  templateUrl: './myloancalculater.component.html',
  styleUrls: ['./myloancalculater.component.scss']
})
export class MyloancalculaterComponent implements OnInit {
  r: any;
  b: any;
  a: any;
  q: any;
  s: any;
  y: any;
  k: any;
  x: any;
  g: any;
  j: any;
  l: any;
  m: any;
  n: any;

  constructor(
    public fb: FormBuilder
  ) { }
  ngOnInit(): void {
  }
  myForm = this.fb.group({
    principal: ['', [Validators.required]],
   interest: ['', [Validators.required]],
   period: ['', [Validators.required]]
  })
  get f() { return this.myForm.controls; }
  submitData(){
   let P = this.f.principal.value;
   let I = this.f.interest.value;
   let t = this.f.period.value;
   
   this.r = I/100;
   this.b = this.r/12;
   this.a =1+this.b;
   this.s =  Math.pow(this.a,t);
   this.q = this.s*this.b;
   this.y = P*this.q;
   this.k = this.s-1;
   this.x= this.y/this.k;
   this.g = this.x*t;
   this.j = this.g-P;
   this.l =Math.round(this.x)
   this.m =Math.round(this.g)
   this.n =Math.round(this.j)
   console.log("monthly payment =", this.l)
   console.log("total amount payable =", this.m)
   console.log("total interest =", this.n)

  }
}
function pow(a: number, t: any) {
  throw new Error('Function not implemented.');
}


