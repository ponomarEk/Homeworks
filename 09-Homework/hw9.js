function genereteBlocks(){
    function generateColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16)
      }
    const getHtml=(div)=>{
        for(let i =0;i<5;i++){
            let divSquare = document.createElement('div');
            divSquare.className="square";
            divSquare.style.backgroundColor=generateColor();
            divSquare.style.height = "50px";
            divSquare.style.width = "50px"; 
            div.append(divSquare);
        }
        return div;
    }

    for(let i =0;i<5;i++){
        let divRow = document.createElement('div');
        divRow.className = "row";
        divRow.style.display="flex";
        document.body.append(getHtml(divRow));
    }
}

function genereteBlocksInterval(){
    genereteBlocks();
    function clearBody(){
        document.body.innerHTML="";
        genereteBlocks();
    }
    setInterval(()=>clearBody(),1000);
}