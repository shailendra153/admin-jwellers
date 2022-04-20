import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
   public viewCategort(){
     let url="https://artifical.herokuapp.com/category/view-category";
     return this.http.get<any>(url);

    }
    deleteCategory(categoryId:String){
      let url="https://artifical.herokuapp.com/category/delete-category/"+categoryId;
      return this.http.get<any>(url);
    }
    singleCategory(categoryId:String){
      let url="https://artifical.herokuapp.com/category/category-by-id/"+categoryId;
      return this.http.get<any>(url);
    }
    addCategory(fd:any){
      let url="https://artifical.herokuapp.com/category/add-category";
      return this.http.post<any>(url,fd);
    }
    updateCategory(fd:any){
      let url="https://artifical.herokuapp.com/category/update-category";
      return this.http.post<any>(url,fd);
    }
}
