export const testContentData:Course[]=[
    {
        Category:"Trainings",
        SubType:"Skillsoft Course",
        ProgressType:"Associate Picks",
        DueDate:new Date("11/7/2020")
    },{
        Category:"Assessments",
        SubType:"Online Course",
        ProgressType:"Recommended",
        DueDate:new Date("11/6/2020")
    },{
        Category:"Assessments",
        SubType:"Skillsoft Course",
        ProgressType:"Recommended",
        DueDate:new Date("11/5/2020")
    },{
        Category:"Books & Journals",
        SubType:"Skillsoft Course",
        ProgressType:"Recommended",
        DueDate:new Date("11/4/2020")
    },{
        Category:"Assessments",
        SubType:"Online Course",
        ProgressType:"Required Learning",
        DueDate:new Date("11/3/2020")
    }
];


export interface Course{
    Category:string,
    SubType:string,
    ProgressType:string,
    DueDate:Date
}

