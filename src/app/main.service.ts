import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  getCoursesList(){
    return this.http.get("/api/getCourses");
  }

  getFilterData(){
    return this.http.get("/api/getFilterData");
  }
}
