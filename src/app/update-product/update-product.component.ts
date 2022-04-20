import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { ProductService } from '../product.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
data:any;
productName:any;
oldImage:any;
productPrice:any;
description:any;
categoryId:any;
discount:any;
quantity:any;
image:any;
  constructor(private update:UpdateDataService,private productService:ProductService,private route:Router) {
      this.data=update.getData();
      this.productName=this.data.productName;
this.oldImage=this.data.productImage;
this.productPrice=this.data.productPrice;
this.description=this.data.description;
this.discount=this.data.discount;
this.quantity=this.data.quantity;

      
   }
   public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file
    }
  }

  public upload(){
    
    
    let formData = new FormData();
    formData.append("productName",this.productName);
    formData.append("productImage",this.image);
    formData.append("productPrice",this.productPrice);
    formData.append("description",this.description);
    formData.append("categoryId",this.categoryId?.nativeElement.value);
    if(this.discount)
    formData.append("discount",this.discount);
    if(this.quantity)
    formData.append("quantity",this.quantity);
    this.productService.addProduct(formData).subscribe(data =>{
      if(data){
        alert('Product added successfully');
      }else{
        alert('Product not added');
      }
    })

  }


  ngOnInit(): void {
  }

}
