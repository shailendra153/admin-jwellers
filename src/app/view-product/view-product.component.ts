import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import{UpdateDataService} from '../update-data.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productList:any;

  constructor(private service:ProductService,private route:Router,private update:UpdateDataService) {
    this.service.viewProduct().subscribe(data=>{
      this.productList=data;
    })
   }
   deleteProduct(productId:String,index:Number){
    if(confirm("Are you sure")){
     this.service.deleteProduct(productId).subscribe(data=>{
       if(data){
         console.log(data);
         this.productList.splice(index,1);
       }
     })
    }
    
}
updateCategory(data:any){
   this.update.setData(data);
     this.route.navigate(["update-product"]);
    }

  ngOnInit(): void {
  }

}
