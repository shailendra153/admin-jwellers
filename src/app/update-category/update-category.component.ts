import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { UpdateDataService } from '../update-data.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryName:any="";
  image:any="";
  newImage:any;
  data:any;
  constructor(private update:UpdateDataService,private service:CategoryService,private router:Router) {
    this.data=this.update.getData();
    console.log(this.data);
    this.image=this.data.categoryImage;
    this.categoryName=this.data.categoryName;

   }
   public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.newImage = file
    }
  }

  public upload(){
    console.log(this.data._id)
    let formData = new FormData();
    formData.append("categoryName",this.categoryName);
    formData.append("categoryImage",this.newImage);
    formData.append("categoryId",this.data._id);
    formData.append("oldImage",this.image)
    this.service.updateCategory(formData).subscribe(data =>{
      if(data.message=="Success"){
        alert('category update successfully');
        this.router.navigate(['view-category']);
        
      }else{
        alert('category not update');
      }
    },err=>{
      alert("Kindly Update Category Name Or Category Image");
    })

  }
  cancel(){
    this.router.navigate(['view-category']);
  }

  ngOnInit(): void {
  }

}
