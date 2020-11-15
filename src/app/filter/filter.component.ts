import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { FilterType,FilterRules } from "../testfilterdata.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  rules:FilterRules[]=[];
  @Input("categoryList") categoryList:FilterType[];
  @Output("filterRule") filter:EventEmitter<FilterRules[]> = new EventEmitter<FilterRules[]>();
  @Input("styling") filterStyle;
  constructor(private changeRef:ChangeDetectorRef) { }

  removeAllRulesofType(name,condition):boolean{
    let remove:boolean = false;
    let index=0;
    this.rules.forEach((rule)=>{
      if(rule.ruleName == name){
        if(rule.ruleCondition == condition) remove=true;
        this.rules.splice(index,1);
      }
      index+=1;
    });
    return remove;
  }

  dateChange(name,condition,curr,type:string){
    let temp  = new Date(curr.value);
    this.removeAllRulesofType(name,condition);
    if(curr && curr.value.length > 0){
      curr = new Date((temp.getMonth()+1).toString()+"/"+temp.getDate().toString()+"/"+temp.getFullYear());
      this.rules.push({ruleName:name,ruleCondition:curr,matchCondition:condition,type:type});
    }  
    this.filter.emit(this.rules);
  }

  listChange(name,condition,curr,type:string){
    this.removeAllRulesofType(name,condition);
    if(condition.length > 0 ) this.rules.push({ruleName:name,ruleCondition:condition,matchCondition:'EXACT_MATCH',type:type});
    this.filter.emit(this.rules);
  }

  checkBoxChange(name,condition,curr,type:string){
    let index=0;
    let removed=false;
    this.rules.forEach((rule)=>{
      if(rule.ruleName == name && rule.ruleCondition == condition){
        this.rules.splice(index,1);
        removed=true;
        curr.checked = false;      
      }      
      index+=1;
    });
    if(!removed){
      curr.checked = true;
      this.rules.push({ruleName:name,ruleCondition:condition,matchCondition:'EXACT_MATCH',type:type});
    }
    this.filter.emit(this.rules);   
  }

  buttonChange(name,condition,curr,item:FilterType){
    let index=0;
    let removed=false;
    if(item.multiple == false){
      item.filterTerms.forEach(term => {
          let domElement = document.getElementById(item.name+"_"+term);
          if(name+"_"+condition == item.name+"_"+term){
            domElement.toggleAttribute('selected');
            domElement.toggleAttribute('aria-selected');
            domElement.classList.toggle('chip-selected');
          }else{
            domElement.setAttribute('aria-selected','false');
            domElement.setAttribute('selected','false');
            domElement.classList.remove('chip-selected');
          }
          
        });
        removed = this.removeAllRulesofType(name,condition);
    }else{
      this.rules.forEach((rule)=>{
        if(rule.ruleName == name && rule.ruleCondition == condition){
          this.rules.splice(index,1);
          removed=true;
          curr.selected=false;
          curr.setAttribute('aria-selected','false');
          curr.setAttribute('selected','false');
          curr.classList.remove('chip-selected');  
        }      
        index+=1;
      });
    } 
    
    if(!removed){
      curr.selected=true;
      curr.toggleAttribute('selected');
      curr.toggleAttribute('aria-selected');
      curr.classList.add('chip-selected');
      this.rules.push({ruleName:name,ruleCondition:condition,matchCondition:'EXACT_MATCH',type:item.type});
    }
    this.filter.emit(this.rules);     
  }






  ngOnInit(): void {
  }

}
