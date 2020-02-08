const students = ["Саша","Игорь","Лена","Ира","Алексей","Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

let copyStudents = students.slice(0,);
let buff;
buff=copyStudents[1];
copyStudents[1]=copyStudents[2];
copyStudents[2]=buff;
const makePairs=(names)=>{
    const result =[];
    for (let i=1;i<names.length;i++) if(i%2!==0) result.push(names.slice(i-1,i+1));
    return result;
}
const pairs = makePairs(copyStudents);
console.log(`Розбиття на пари: \n`,pairs);

const addThemes=(projects,groups)=>{
    const result = [];
    let temp = [];
    for(let i = 0;i<groups.length;i++){
        temp.push(groups[i].join(" и "),projects[i]);
        result.push(temp);
        temp=[];
    }
    return result;
}

const pairsWithThemes = addThemes(themes,pairs);
console.log("Пари з темою: \n",pairsWithThemes);

const addMarks=(names,value)=>{
    const result = [];
    let temp=[];
    for (let i=0;i<names.length;i++) {
        temp.push(names[i]);
        result.push(temp);
        result[i].push(value[i]);
        temp=[];
    }
    return result;
}
const studentWithMarks = addMarks(students,marks);
console.log("Студенти з оцінкою: \n",studentWithMarks);

const addRandomMarksToPairs=(groups)=>{
    const result = [];
    let temp=[];
    for(let i=0;i<groups.length;i++) {
        temp.push(groups[i][0],groups[i][1],Math.ceil(Math.random()*5));
        result.push(temp);
        temp=[];
    }
    return result;
}

const pairsWithMarks = addRandomMarksToPairs(pairsWithThemes);
console.log("Пари з темою і оцінкою: \n",pairsWithMarks);

