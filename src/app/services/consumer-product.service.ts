import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Voyage } from '../model/Voyage';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  getVoyage(){
    return this.http.get<Voyage[]>('http://localhost:3000/voyages')
  }
  getProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
  }
  AddProduct(p:Product){
    return this.http.post('http://localhost:3000/products',p)
  }
  AddVoyage(p:Voyage){
    return this.http.post('http://localhost:3000/voyages',p)
  }
  DeleteProduct(id:number){
    return this.http.delete('http://localhost:3000/products'+'/'+id)
  }
  UpdateProduct(id:number,p:Product){
    return this.http.put('http://localhost:3000/products'+'/'+id,p)
  }
}
