function* createIdGenerator(){
    let i=0;
    while(true){
        i++;
        yield i;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(fontSize){
    while(true){
        let buff = yield fontSize;
        if(buff==="up"){
            fontSize+=2;
        }else if(buff==="down" && fontSize>2){
            fontSize-=2;
        }
    }
}
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next().value)



