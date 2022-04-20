import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productList:any;

  constructor(private service:ProductService,private router:Router) {
    this.service.viewProduct().subscribe(data=>{
      this.productList=data;
    })
   }

  ngOnInit(): void {
  }

}
