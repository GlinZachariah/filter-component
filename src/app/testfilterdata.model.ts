export enum DateEnum{
    EXACT_MATCH ='EXACT_MATCH',
    LESS_THAN = 'LESS_THAN',
    MORE_THAN = 'MORE_THAN'
}

export interface FilterRules{
    ruleName:string,
    ruleCondition:string,
    matchCondition:string,
    type:string
}

export interface FilterType{
    name: string;
    title:string;
    type:string;
    multiple:boolean;
    filterTerms:Array<string>;
}

const testFilterData:FilterType[] = [
    {
        name:"Category",
        title:"Category",
        filterTerms:[
            "Trainings",
            "Podcasts",
            "Assessments",
            "Videos",
            "Events",
            "Books & Journals",
            "Code & Snippets",
            "Hands on Practice"
        ],
        type:"Button",
        multiple:false   
    },{
        name:"SubType",
        title:"Sub Type",
        filterTerms:[
            "Self-paced",
            "Skillsoft Course",
            "Online Course",
            "Cirriculam"
        ],
        type:"Checkbox",
        multiple:true
    },{
        name:"ProgressType",
        title:"Progress Type",
        filterTerms:[
            "Required Learning",
            "Recommended",
            "Associate Picks"
        ],
        type:"List",
        multiple:false
    },{
        name:"DueDate",
        title:"Due Date",
        filterTerms:[DateEnum.EXACT_MATCH],
        type:"Date",
        multiple:false
    }
];



