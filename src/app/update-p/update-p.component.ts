import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.css']
})
export class UpdatePComponent {
  id!:number
  P!:Product
  AddForm!:FormGroup
  constructor(private act:ActivatedRoute,private consP:ConsumerProductService,private route:Router){}
  ngOnInit(){
    this.AddForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(6)]),
      quantity:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      price:new FormControl('',Validators.required),
      like:new FormControl('',Validators.required)
    })

  this.id=this.act.snapshot.params['id'];
    this.consP.getProductById(this.id).subscribe((data)=>{
      this.P=data
      this.AddForm.patchValue(this.P)
    })

  }

  save(){
    
    this.consP.UpdateProduct(this.id,this.AddForm.value).subscribe(
      ()=>this.route.navigateByUrl('/product')
    )
  }

}
