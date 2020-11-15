import { Component } from '@angular/core';
import { Course,testContentData } from './testdata.model';
import { FilterType, testFilterData} from './testfilterdata.model';
import { GLOBALFILTERSTYLE } from "./filterstyle.config";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'customFilter2';
  CourseContent:Course[] = testContentData;
  filterData:FilterType[] = testFilterData;
  rulesList=[];
  filterStyle=GLOBALFILTERSTYLE;
  constructor(){}

  setRules(rulesList){
    this.rulesList = rulesList;
  }



  
}
