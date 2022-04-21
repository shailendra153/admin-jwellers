import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild("mySelect")categoryId :ElementRef|undefined;
  categoryList:any;
  productName:any="";
  productPrice:any="";
  description:any="";
  discount:any="";
  quantity:any="";
  image:any;
  

  constructor( private categoryService:CategoryService,private productService:ProductService,private router:Router) {
    this.categoryService.viewCategort().subscribe(data=>{
      console.log(data);
      this.categoryList=data;
    });
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
