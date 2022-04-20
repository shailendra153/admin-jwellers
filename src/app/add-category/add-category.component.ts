import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
image:any;
categoryName:any="";
  constructor(private service:CategoryService) { }
  fd:FormData=new FormData;

  ngOnInit(): void {
  }
  public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.image = file
    }
  }

  public upload(){
    let formData = new FormData();
    formData.append("categoryName",this.categoryName);
    formData.append("categoryImage",this.image);
    this.service.addCategory(formData).subscribe(data =>{
      if(data){
        alert('category added successfully');
      }else{
        alert('category not added');
      }
    })

  }

}
