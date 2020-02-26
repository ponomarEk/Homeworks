class Student
{
    constructor(university,course,fullName){
        this.university=university;
        this.course=course;
        this.fullName=fullName;
    }
    studentMarks = [5,4,4,5];
    getInfo(){
        return `Студент ${this.course}-го курса ${this.university} , ${this.fullName}`;
    }
    get marks(){
        return this.studentMarks;
    }

    set marks(mark){
        if(this.studentMarks){
            this.studentMarks.push(mark);
        }
    }

    getAverageMark(){
        if(this.studentMarks){
            const sum = this.studentMarks.reduce((acc,curr)=>{
                acc+=curr;
                return acc;
            },0);
            const average = sum/this.studentMarks.length;
            return +average.toFixed(2);
        }else{
            return null;
        }
    }
    dismiss(){
        this.studentMarks = null;
    }
    recover(){
        this.studentMarks=[5,4,4,5];
    }
}

class BudgetStudent extends Student{
    constructor(university,course,fullName){
        super(university,course,fullName);
        setInterval(()=>this.getSchoolarship(),30*1000);
    }
    getSchoolarship(){
        if(this.getAverageMark()>=4.0){
            console.log("Вы получили 1400 грн. стипендии");
        }
    }
}
let student = new Student("ЛНУ ім. Івана Франка",3,"Олександр Пономаренко");
let budgetStudent = new BudgetStudent('ЛНУ ім. Івана Франка',1,"Богдан Білик");

console.log(student.getInfo());
console.log(budgetStudent.getInfo());
console.log("Середній бал звичайного студента: ",student.getAverageMark());
budgetStudent.marks=5;
console.log("Середній бал бюджетного студента: ",budgetStudent.getAverageMark());





