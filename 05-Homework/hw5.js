console.log("[ Task 1 ]");

/* 1) Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел. 
   В функции есть параметры: length - длина массива, min – минимальное значение целого числа, max – максимальное значение целого числа.*/

const getRandomArray=(length,min,max)=>{
    const result = [];
    if(min>=max)return "Error(min>=max)!";
    else {
        for(let i = 0;i<length;i++) result.push(Math.floor(min+Math.random()*(max)));
        return result;
    }
}
console.log(`Array of random integer numbers (size = ${getRandomArray(10,1,50).length}) ==> `,getRandomArray(10,1,50));

console.log("[ Task 2 ]");

// 2) Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ

const GetModa = (...numbers)=>{
    let test = 0,counter = 0;
    const temp = [], result = [];

    for(let i=0;i<numbers.length;i++){
        for(j=numbers.length;j>=0;j--)if(numbers[i]===numbers[j]&&numbers[i]%1===0)counter++;
        if (counter>test){
            test = counter;
            temp.splice(0,);
            temp.push(numbers[i]);
        }else if(test===counter)temp.push(numbers[i]);
        counter = 0;
    }
    for(let i = 0;i<temp.length;i++)if(!result.includes(temp[i]))result.push(temp[i]);
    if(result.length===1) return result[0];
    else return result;
}
console.log(`Moda of numbers (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,GetModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(`Moda of numbers (6, 6, 1209, 6, 11, 23, -2, -2, 0, -2) ==> `,GetModa(6,6,1209,6,11,23,-2,-2,0,-2));

console.log("[ Task 3 ]");

// 3) Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ

const getAvarage = (...numbers)=>{
    let counter = 0;
    const SUM_OF_INTEGER = numbers.reduce((acc,curr)=>{
        curr%1===0?acc+=curr:counter++;
        return acc;
    },0);
    if(numbers.length-counter!==0){
    const RESULT = SUM_OF_INTEGER/(numbers.length-counter);
    return RESULT;
    }else return "No integer numbers!";
}
console.log(`Avarage of numbers (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,getAvarage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("[ Task 4 ]");

// 4) Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ

const GetMedian = (...numbers)=>{
    const intSorted=[];
    let result;
    const sorted = numbers.sort((curr,prev)=> curr-prev);
    for(let i =0;i<sorted.length;i++)if(sorted[i]%1===0)intSorted.push(sorted[i]);
    const INDEX = (intSorted.length/2)-1;
    (INDEX%1!==0)?result = intSorted[Math.ceil(INDEX)]:result = (intSorted[INDEX]+intSorted[INDEX+1])/2;
    return result;

}
console.log(`Median of numbers (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,GetMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(`Median of numbers (1, 2, 3, 4, 5) ==> `,GetMedian(1, 2, 3, 4, 5));
console.log(`Median of numbers (1, 2, 3, 4) ==> `,GetMedian(1, 2, 3, 4));

console.log("[ Task 5 ]");

// 5) Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа переданные как аргументы функции

const filterEvenNumbers = (...numbers)=>{
    const filtered = numbers.filter(curr=>curr%1===0);
    const result = filtered.filter(curr=>curr%2!==0);
    return result;
}
console.log(`Odd numbers from (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("[ Task 6 ]");

// 6) Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел больших 0

const countPositiveNumbers = (...numbers)=>{
    const positive = numbers.filter(curr=>curr>0);
    return positive.length;
}
console.log(`Count of positive numbers (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,countPositiveNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

console.log("[ Task 7 ]");

// 7) Создайте функцию getDividedByFive(...numbers) – которая отфильтрует все элементы в массиве и оставит только те, которые делятся нацело на 5

const getDividedByFive = (...numbers)=>{
     const result = numbers.filter(curr=>curr%5===0);
     return result;
}
console.log(`Numbers divided by five (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ==> `,getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/* 8) Создайте функцию replaceBadWords(string) – которая 1) разобьет фразу на слова, 2) заменит плохие слова на звездочки (*).
 При решении этого задания необходимо разбить массив на слова с помощью функции .split(" "), после чего массив необходимо будет склеить .join(" ")
  Плохие слова: shit и fuck. Предусмотрите возможность расширять список этих слов в будущем.*/

  console.log("[ Task 8 ]");

function testIsBadWord(word,badWord){
    let test = word;
    while(test.search(badWord)!==-1)test = test.replace(badWord,"*".repeat(badWord.length));
    return test;       
}

const replaceBadWords=(string)=>{
    const splited = string.split(" ");
    const badWords = ["shit","fuck"];
    let temp;
    const result = splited.map(curr=>{
        temp = curr;
        for(let i =0;i<badWords.length;i++)temp = testIsBadWord(temp,badWords[i]);
        return temp;
    });
    return result.join(" ");
}
console.log("Are you fucking kidding? ==> ",replaceBadWords("Are you fucking kidding?"));
console.log("Holly shit! ==> ",replaceBadWords("Holly shit!"));
console.log("It's bullshit! ==> ",replaceBadWords("It's bullshit!"));

console.log("[ Task 9 ]");

/*Создайте функцию divideByThree(word), которая разбивает каждое слово на условные слоги по 3 буквы. 
Если букв меньше трёх – не разбиваем.Пробелы всегда удаляются. Строка приводится к нижнему регистру.*/

const divideByThree = (word)=>{
    word = word.toLowerCase();
    const splited = word.split(' ');
    const filtered = splited.filter(curr=>curr!=="");
    let temp;
    const mapped = filtered.map(curr=>{
        temp =[];
        if(curr.length<3)return curr;
        else{
            for(let i = 0;i<curr.length;i+=3)temp.push(curr.slice(i,i+3));
            return temp;
        }
    });
    let result =[];
    for(let i =0;i<mapped.length;i++)result=result.concat(mapped[i]);
    return result;
}
console.log("Word divided by three ('Commander') ==> ",divideByThree("Commander"));
console.log("Word divided by three ('live') ==> ",divideByThree("live"));

console.log("[ Task 10 ]");

/*Создайте функцию generateCombinations(word), которая выдаст все возможные перестановки(уникальные, без повторений) букв в слове.
 Для тестов не передавайте слова в которых больше 10 букв. Лучше вообще ограничить работу функции 10 буквами.*/

const factorial=(num)=>{
    if (num === 0)return 1;
    else return num * factorial(num - 1);
}
const generateCombination=(word)=>{
    let combination,buff=[],temp = [],indexes=[],index,i=0;
    const result=[];
    if(word.length>10)return "too many letters";
    else{
        let allCombinationsNumber = factorial(word.length);
        const splitedWord = word.split("");
        const getIndex =()=>Math.floor(Math.random()*splitedWord.length);
        let complexIndex ='',complexIndexGroup=[];
        while(i<allCombinationsNumber){
            temp=[];
            indexes=[];
            buff =''
            while(temp.length<splitedWord.length){
                index = getIndex();
                if(!indexes.includes(index)){
                    temp.push(splitedWord[index]);
                    indexes.push(index);
                    complexIndex+=index;
                    buff+=index;
                }
            }
            complexIndex+=" ";
            temp=temp.join("");
            combination = temp;
            if(!result.includes(combination)){
                result.push(combination);
                i++;
            }else if(result.includes(combination)&&complexIndexGroup.includes(buff));
            else allCombinationsNumber--; 
            complexIndexGroup = complexIndex.split(" ");
        }
        return result;
    }
}
console.log("All unique combinations number of word ('ol') ==> ",generateCombination("ol"));
console.log("All unique combinations number of word ('man') ==> ",generateCombination("man"));
console.log("All unique combinations number of word ('oksana') ==> ",generateCombination("oksana"));