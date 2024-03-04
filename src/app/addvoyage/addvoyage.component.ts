import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css']
})
export class AddvoyageComponent {
  constructor( private route:Router,private consp:ConsumerProductService){}
  AddForm!:FormGroup
  ngOnInit(){

    this.AddForm = new FormGroup({
      id: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(6)]),
      depart: new FormControl('', [Validators.required, Validators.pattern(/^Vdepart.*/)]),
      arrive: new FormControl('', [Validators.required, Validators.minLength(6)]),
      nb_place: new FormControl('', Validators.required),
      nb_view: new FormControl('', Validators.required)
    });
    
  }
  save(){
    // this.ps.AddProduct(this.AddForm.value)
    // this.route.navigateByUrl('/product')
    this.consp.AddVoyage(this.AddForm.value).subscribe(
      ()=>this.route.navigateByUrl('/list')
    )
  }

}
