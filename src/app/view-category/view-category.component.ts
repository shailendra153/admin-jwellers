import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryList:any;
  constructor(private service:CategoryService,private update:UpdateDataService,private route:Router) {
    this.service.viewCategort().subscribe(data=>{
      console.log(data);
      this.categoryList=data;
    })
   }
   deleteCategory(categoryId:String,index:Number){
    if(confirm("Are you sure")){
     this.service.deleteCategory(categoryId).subscribe(data=>{
       if(data){
         console.log(data);
         this.categoryList.splice(index,1);
       }
     })
    }
    
}
updateCategory(data:any){
   this.update.setData(data);
     this.route.navigate(["update-category"]);
    }

  ngOnInit(): void {
  }

}
