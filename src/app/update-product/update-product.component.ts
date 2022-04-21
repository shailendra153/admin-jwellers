import { Component, ElementRef,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { UpdateDataService } from '../update-data.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  
   data:any; 
   categoryList:any;
   productName:any="";
   productPrice:any="";
   description:any="";
   discount:any="";
   quantity:any="";
   newImage:any;
   image:any="";
   categoryId:any=""


   
  constructor(private updateService:UpdateDataService,private categoryService:CategoryService,private productService:ProductService,private router:Router){
    this.categoryService.viewCategort().subscribe(data=>{
      this.categoryList=data;
      });
    this.data=this.updateService.getData();
    this.productName=this.data.productName;
    this.productPrice=this.data.productPrice;
    this.description=this.data.description;
    this.quantity=this.data.quantity;
    this.discount=this.data.discount;
    this.image=this.data.productImage;
    this.categoryId=this.data.categoryId.categoryName;
     

  }
  public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.newImage = file
    }
  }

  public update(){
    let formData = new FormData();
    formData.append("productName",this.productName);
    formData.append("productImage",this.newImage);
    formData.append("oldImage",this.image);
    formData.append("productId",this.data._id);
    formData.append("productPrice",this.productPrice);
    formData.append("description",this.description);
    formData.append("discount",this.discount);
    formData.append("quantity",this.quantity);
    formData.append("categoryId",this.data.categoryId._id);
    this.productService.updateProduct(formData).subscribe(data=>{
    if(data){
      alert('product update successfully');
      this.router.navigate(['view-product']);
      
    }else{
      alert('category not update');
    }
  },err=>{
    alert("Kindly Update product Details");
  })

  }
  cancel(){
    this.router.navigate(['view-product']);
  }


  ngOnInit(): void {
  }

}
