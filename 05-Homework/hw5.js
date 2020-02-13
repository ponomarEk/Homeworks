const NUMBERS = [1,3.5,-3,6,12,5,0];

const getRandomArray=(length,min,max)=>{
    const result = [];
    if(min>=max)return "Error(min>=max)!";
    else {
        for(let i = 0;i<length;i++) result.push(Math.floor(min+Math.random()*(max)));
        return result;
    }
}
console.log(getRandomArray(15,1,100));

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
console.log(GetModa(...NUMBERS));

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
console.log(getAvarage(2,55,11,6,78,2,55,77,57,87,23,2,56,3,2));

const GetMedian = (...numbers)=>{
    const intSorted=[];
    let result;
    const sorted = numbers.sort((curr,prev)=> curr-prev);
    for(let i =0;i<sorted.length;i++)if(sorted[i]%1===0)intSorted.push(sorted[i]);
    const INDEX = (intSorted.length/2)-1;
    (INDEX%1!==0)?result = intSorted[Math.ceil(INDEX)]:result = (intSorted[INDEX]+intSorted[INDEX+1])/2;
    return result;

}
console.log(GetMedian(...NUMBERS));

const filterEvenNumbers = (...numbers)=>{
    const filtered = numbers.filter(curr=>curr%1===0);
    const result = filtered.filter(curr=>curr%2!==0);
    return result;
}
console.log(filterEvenNumbers(...NUMBERS));

const countPositiveNumbers = (...numbers)=>{
    const positive = numbers.filter(curr=>curr>0);
    return positive.length;
}
console.log(countPositiveNumbers(...NUMBERS));

const getDividedByFive = (...numbers)=>{
     const result = numbers.filter(curr=>curr%5===0);
     return result;
}
console.log(getDividedByFive(...NUMBERS));

const replaceBadWords = (string)=>{
    const splited = string.split(' ');
    let n;
    const result = splited.map(curr=>{
        let temp;
        if(curr.search("fuck")!==-1){
            temp = '';
            n = curr.search("fuck");
            for(let i = 0;i<curr.length;i++)(i>=n&&i<=n+3)?temp+="*":temp+=curr[i];
            return temp;
        }else if(curr.search("shit")!==-1){
            temp = ''
            n =curr.search("shit");
            for(let i = 0;i<curr.length;i++)(i>=n&&i<=n+3)?temp+="*":temp+=curr[i];
            return temp;
        }else return curr;
    })
    return result.join(" ");
}
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("Holly shit!"));
console.log(replaceBadWords("It's bullshit!"));

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
console.log(divideByThree(" SLDFLSDJFSL"));

const factorial=(num)=>{
    if (num === 0)return 1;
    else return num * factorial(num - 1);
}
const generateCombination=(word)=>{
    let combination,temp = [],indexes=[],index,i=0;
    const result=[];
    if(word.length>10)return "too many letters";
    else{
        const allCombinationsNumber = word.length*factorial(word.length-1);
        const splitedWord = word.split("");
        const getIndex =()=>Math.floor(Math.random()*splitedWord.length);
        while(i<allCombinationsNumber){
            temp=[];
            indexes=[];
            while(temp.length<splitedWord.length){
                index = getIndex();
                if(!indexes.includes(index)){
                    temp.push(splitedWord[index]);
                    indexes.push(index);
                }
            }
            temp=temp.join("");
            combination = temp;
            if(!result.includes(combination)){
                result.push(combination);
                i++;
            }
        }
        return result;
    }
}
console.log(generateCombination("lo"));
console.log(generateCombination("man"));
console.log(generateCombination("abcd"));