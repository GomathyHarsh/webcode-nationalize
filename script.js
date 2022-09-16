let div=document.createElement("div");
// div.style.backgroundColor="yellow";
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
let country_id=document.createElement("div");
country_id.setAttribute("id","Active");
let probability=document.createElement("div");
probability.setAttribute("id","Recovered");
div.append(input,button,country_id,probability);
document.body.append(div);

async function foo(){  
try{
    let name=document.getElementById("name").value;
    let url=`https://api.nationalize.io/?name=${name}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let cont=res1.country;
    for(let i=0;i<=cont.length-2;i++){
    console.log(cont[i].country_id);
    console.log(cont[i].probability);
    country_id.innerHTML=`Country Name:${cont[i].country_id}`;
    probability.innerHTML=`Probability Value:${cont[i].probability}`;
    
}
}
catch(error){
    console.log(error);
}
}