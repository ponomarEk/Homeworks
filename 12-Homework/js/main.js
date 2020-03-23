const API = "https://swapi.co/api/";

let button = document.getElementById('button');
let episode = document.getElementById('episode');
let container = document.querySelector(".container");

button.addEventListener('click',click);


function click(){
    let promise = new Promise(async function(resolve,reject){
        container.innerHTML='';
        const res = await axios.get(API+"films/"+episode.value+"/");
        console.log(res)
        episode.value='';
        console.log(res.data);
        resolve(res.data.characters);
    });
    promise.then(people=>{
        people.forEach(async element=>{
            const result = await axios.get(element);
            let div = document.createElement('div');
            div.classList.add('info');
            div.innerHTML=`
            <p>name: ${result.data.name} <br>
               birth: ${result.data.birth_year}<br>
               male: ${result.data.gender}
            </p>`;
            container.append(div);
        });
    })
}

let currPage=1;
async function getPlanets(currPage=1){
    let config = {
        params :{
            'page' : currPage
        }
    };
    const planets = await axios.get(API+`planets/`,config);
    return planets.data.results;
}
function showPlanets(planets){
    let div = document.querySelector(".planets");
    
    let ol = document.querySelector(".ol");
    ol.innerHTML="";
    planets.forEach(curr=>{
        let li = document.createElement("li")
        li.append(curr.name);
        ol.append(li);
    })
    div.append(ol);
}

let back = document.querySelector("#back");
let next = document.querySelector("#next");
back.addEventListener("click",function(){
    if(currPage!=1){
        currPage--;
        getPlanets(currPage).then(showPlanets);
    }
})
next.addEventListener("click",function(){
    if(currPage!=6){
        currPage++;
        getPlanets(currPage).then(showPlanets);
    }
})
getPlanets().then(showPlanets);

let wookie = document.querySelector(".wookie");
wookie.addEventListener("click",function(){
    
})


