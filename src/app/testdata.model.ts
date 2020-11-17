const testContentData:Course[]=[
    {
        Category:"Trainings",
        SubType:"Skillsoft Course",
        ProgressType:"Associate Picks",
        DueDate:"11/7/2020"
    },{
        Category:"Assessments",
        SubType:"Online Course",
        ProgressType:"Recommended",
        DueDate:"11/6/2020"
    },{
        Category:"Assessments",
        SubType:"Skillsoft Course",
        ProgressType:"Recommended",
        DueDate:"11/5/2020"
    },{
        Category:"Books & Journals",
        SubType:"Skillsoft Course",
        ProgressType:"Recommended",
        DueDate:"11/4/2020"
    },{
        Category:"Assessments",
        SubType:"Online Course",
        ProgressType:"Required Learning",
        DueDate:"11/3/2020"
    }
];


export interface Course{
    Category:string,
    SubType:string,
    ProgressType:string,
    DueDate:string
}

