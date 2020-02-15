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


/* 1) Создайте функцию getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - которая 
выводит список предметов для конкретного студента. 
Обратите внимание – название предмета необходимо выводить с большой буквы, а _ – заменить на пробел*/

console.log(" Task 1 ");
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
console.log("Subjects ==> ",getSubjects(students[0]));

console.log(" Task 2 ");

/* 2) Создайте функцию getAverageMark(students[0]) --> 3.79 – которая выведет среднюю оценку
 по всем предметам для переданного студента НЕ МАССИВА СТУДЕНТОВ.
 Оценку округлите до 2ого знака. Можно использовать функции написанные в предыдущих домашних заданиях :)*/

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
console.log("Average mark ==> ",getAverageMark(students[0]));

console.log(" Task 3 ");

/* 3) Создайте функцию getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
которая выводит информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания).
Должна быть выведена информация: курс, имя, средняя оценка.*/

const getStudentInfo = (student)=>{
    let result={};
    for(let i = 0;i<students.length;i++)if(students[i].name===student.name){
        result.course=student.course;
        result.name=student.name;
        result.averageMark = getAverageMark(student);
    }
return result;
}
console.log(`Student's information ==> ${JSON.stringify(getStudentInfo(students[0]))}`);

console.log(" Task 4 ");

/* 4) Создайте функцию getStudentsNames(students) --> ["Anton", "Tanya", "Victor"]
 – которая выводит имена студентов в алфавитном порядке. */

const getStudentsNames = (students)=>{
    const sortedNames = students.map(curr=>curr.name).sort();
    return sortedNames;
}
console.log("Names sorted for alphabet ==> ",getStudentsNames(students));

console.log(" Task 5 ");

/* 5) Создайте функцию getBestStudent(students) --> "Anton" 
– которая выводит лучшего студента из списка по показателю средней оценки. */

const getBestStudent = (students)=>{
    let nameOfStudent;
    let bestMark = -1;
    for(let i =0;i<students.length;i++){
        let student = getStudentInfo(students[i]);
        if(student.averageMark>bestMark){
            bestMark=student.averageMark;
            nameOfStudent=student.name;
        }
    }
    return nameOfStudent;
}
console.log("Best student's name ==> ",getBestStudent(students));

console.log(" Task 6 ");

/* 6) Создайте функцию calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
– которая считает какое количество раз буква повторяется в слове. */

const calculateWordLetters = (word)=>{
    let result={};
    for(let i = 0;i<word.length;i++){
        let counter=0 
        for(let j =word.length-1;j>=0;j--)if(word[j].toUpperCase()===word[i].toUpperCase())counter++;
        result[word[i].toLowerCase()] = counter;
    }
return result;
}
console.log(`Count of word letters('Test') --> ${JSON.stringify(calculateWordLetters('Test'))}`);
