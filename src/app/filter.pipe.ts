import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './testdata.model';
import { FilterRules } from './testfilterdata.model';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  ob:Object[]=[];
  transform(value: Object[], rules:FilterRules[]): Object[] {
    if(rules.length ==0 ){
      return value;
    }
    this.ob=[];
    value.forEach(element => {
      for (let ruleIdx = 0; ruleIdx < rules.length; ruleIdx++) {
        const rule = rules[ruleIdx];
        let propNames  = Object.getOwnPropertyNames(element);
        let propValues = Object.values(element);
        for (let index=0;index<=propNames.length;index++) {
          let data;
          let cond;
          if(rule.type=='Date'){
            if(propNames[index]=="DueDate" ){
              data = new Date(propValues[index]).getTime();
              cond = new Date(rule.ruleCondition).getTime();
              // let res:boolean = data == cond;
              // let tempResultData = ["Original Data","Transformed Data","Original Condition","Transformed condition","Result"];
              // let tempResult = [propValues[index],data,rule.ruleCondition,cond,res];
              // console.table(tempResult,tempResultData);
            }else{
              continue;
            }
            
          }else{
            data = propValues[index];
            cond = rule.ruleCondition;
          }
          if(rule.matchCondition == 'EXACT_MATCH'){
            if(propNames[index]==rule.ruleName && data==cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }else if(rule.matchCondition == 'LESS_THAN'){
            if(propNames[index]==rule.ruleName && data<=cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }else if(rule.matchCondition == 'MORE_THAN'){
            if(propNames[index]==rule.ruleName && data>=cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }       
        }
      }
    });
    return this.ob;
  }

}
