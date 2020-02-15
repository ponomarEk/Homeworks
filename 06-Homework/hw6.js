const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

const getSubjects = (student)=>{
    let keys;
    for(let i = 0;i<students.length;i++)if(students[i].name===student.name)keys = Object.keys(student.subjects);
    const result = keys.map(curr=>{
        if(curr.search('_')!==-1)curr=curr.replace("_"," ");
        curr=curr[0].toUpperCase()+curr.slice(1);
        return curr;
    });
    return result;
}
console.log(getSubjects(students[2]));

const getAverageMark=(student)=>{
    let values,counter=0;
    for(let i = 0;i<students.length;i++)if(students[i].name===student.name)values = Object.values(student.subjects);
    const sumOfMarks = values.reduce((acc,curr)=>{
        for(let i =0;i<curr.length;i++)acc+=curr[i];
        counter+=curr.length;
        return acc;
    },0);
    const AVARAGE_MARK = (sumOfMarks/counter).toFixed(2);
    return +AVARAGE_MARK;
}
console.log(getAverageMark(students[1]));

const calculateWordLetters = (word)=>{
    let result={},buff;
    for(let i = 0;i<word.length;i++){
        let counter=0 
        for(let j =word.length-1;j>=0;j--)if(word[j].toUpperCase()===word[i].toUpperCase())counter++;
        result[word[i].toLowerCase()] = counter;
    }
return result;
}
console.log(calculateWordLetters("Test"));

const getStudentInfo = (student)=>{
    let result={};
    for(let i = 0;i<students.length;i++)if(students[i].name===student.name){
        result.course=student.course;
        result.name=student.name;
        result.averageMark = getAverageMark(student);
    }
return result;
}
console.log(getStudentInfo(students[2]));

const getBestName = (students)=>{
    let nameOf=" ";
    let bestMark = -1;
    for(let i =0;i<students.length;i++){
        let stud = getStudentInfo(students[i]);
        if(stud.averageMark>bestMark){
            bestMark=stud.averageMark;
            nameOf=stud.name;
        }
    }
    return nameOf;
}
console.log(getBestName(students));

const getNames = (students)=>{
    const sorted = students.map(curr=>curr.name).sort((prev,curr)=>prev[0]<curr[0]);
    return sorted;
}
console.log(getNames(students));
