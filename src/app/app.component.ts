import { Component } from '@angular/core';
import { Course } from './testdata.model';
import { FilterType } from './testfilterdata.model';
import { GLOBALFILTERSTYLE } from "./filterstyle.config";
import { MainService } from "./main.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'customFilter2';
  CourseContent; 
  filterData;
  rulesList=[];
  filterStyle=GLOBALFILTERSTYLE;
  constructor(private service:MainService){
    this.service.getCoursesList().subscribe((res)=>{
      this.CourseContent = res;
    });
    this.service.getFilterData().subscribe((res)=>{
      this.filterData = res;
    });
  }

  setRules(rulesList){
    // console.log({rulesList:rulesList});
    
    this.rulesList = rulesList;
  }



  
}
