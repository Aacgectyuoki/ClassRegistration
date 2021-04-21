import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  deleteById(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  createClassDetailsInfo(classRef:any){
    this.http.post("http://localhost:4000/class/createClassDetails",classRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  retrieveAllClassDetails():Observable<Product[]>{
     return this.http.get<Product[]>("http://localhost:4000/class/allClassDetails")
  }

  retrieveProductById(id:any):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:4000/class/retrieveClassById/"+id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteClassById(id:any):any{
    return this.http.delete("http://localhost:4000/class/deleteById/"+id,{responseType:'text'});
  }

  updateDetails(classRef:any):any{
    return this.http.put("http://localhost:4000/class/updateClassDetails",classRef,{responseType:'text'})
  }
}