import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  viewProduct(){
    let url="https://artifical.herokuapp.com/product/view-product";
    return this.http.get<any>(url);
  }
  
  deleteProduct(productId:String){
    let url="https://artifical.herokuapp.com/product/delete-product/"+productId;
    return this.http.get<any>(url);

  }
  sigleProduct(productId:String){
    let url="https://artifical.herokuapp.com/product/product-by-id"+productId;
    return this.http.get<any>(url);
  }
  productsByCategory(categoryId:String){
    let url="https://artifical.herokuapp.com/product/"+categoryId;
    return this.http.get<any>(url);
  }
  addProduct(fd:any){
    let url="https://artifical.herokuapp.com/product/add-product";
    return this.http.post<any>(url,fd);
  }
  updateProduct(fd:any){
    let url="https://artifical.herokuapp.com/product/update-product";
    return this.http.post<any>(url,fd);
  }
}
