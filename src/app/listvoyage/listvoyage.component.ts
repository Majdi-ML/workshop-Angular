import { Component } from '@angular/core';
import { Voyage } from '../model/Voyage';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-listvoyage',
  templateUrl: './listvoyage.component.html',
  styleUrls: ['./listvoyage.component.css']
})
export class ListvoyageComponent {
  listProduct:Voyage[]=[]
  constructor(private consP:ConsumerProductService){}
  ngOnInit(){
    
    this.consP.getVoyage().subscribe(
      (data)=>this.listProduct=data
    )
  }

}
