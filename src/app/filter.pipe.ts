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
        
        for (let index=0;index<propNames.length;index++) {
          let data;
          let cond;
          if(rule.type=='Date'){
            data = new Date(propValues[index]).getTime();
            cond = new Date(rule.ruleCondition).getTime();            
          }else{
            data = propValues[index].toLowerCase();
            cond = rule.ruleCondition.toLowerCase();
          }
          let data2= propNames[index].toLowerCase();
          let cond2= rule.ruleName.toLowerCase();
          if(rule.matchCondition == 'EXACT_MATCH'){
            if(data2 === cond2 && data==cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }else if(rule.matchCondition == 'LESS_THAN'){
            if(data2 === cond2 && data<=cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }else if(rule.matchCondition == 'MORE_THAN'){
            if(data2 === cond2 && data>=cond){
              this.ob.push(element);
              ruleIdx=rules.length;
              break;
           }
          }       
        }
      }
    });
    // console.log({"RESULT":this.ob});
    
    return this.ob;
  }

}
