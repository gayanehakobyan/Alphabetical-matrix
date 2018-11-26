let table, tblBody, tr, td, childdiv, letter, n;
let save=document.querySelector("#save");
let inputvalue=document.querySelector("#input");
let display=document.querySelector("#display");
let reset=document.querySelector("#reset");
let printletters=document.querySelector("#printletters");
let changableArr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let obj={};
	

childdiv=document.querySelector("#childdiv");
table=document.createElement("TABLE");
tblBody=document.createElement("TBODY");
table.appendChild(tblBody);

for(let i=0; i<5; i++){
	tr=document.createElement("TR");
	tblBody.appendChild(tr);
	for(var j=0; j<5; j++){
		td=document.createElement("TD");
		td.id=i+"."+j;
		td.setAttribute("class", "squareClass"); 
		tr.appendChild(td);
	}
}

childdiv.appendChild(table);

let squareClass=document.querySelectorAll(".squareClass");
for(let i=0; i<squareClass.length; i++){
	squareClass[i].addEventListener("click", function(event){
			changeData(event);
	})
}


function changeData(event){
	let elem=event.target.id.split('');
	let i=elem.shift();
		i=Number(i);
	let j=elem.pop();
		j=Number(j);
	if(changableArr[i][j]==0){
		n=1;
	}
	if(changableArr[i][j]==1){
		n=2;
	}
	if(n==1){
		event.target.style.background="black";
		changableArr[i][j]=1;
	}
	if(n==2){
		event.target.style.background="white";
		changableArr[i][j]=0;
	}
	n=0;
}


save.addEventListener("click", function(event){
	let str=inputvalue.value;
	console.log(str)
	if(inputvalue.value!=="" && str == str.toUpperCase() && isNaN(str) || inputvalue.value==" " ){
		str="";
		letter=inputvalue.value;//input value
		obj=Object.assign(obj,{[letter]:changableArr});
		console.log(letter, obj[letter])
	    changableArr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
		inputvalue.value="";
		letter="";
		for(let i=0; i<squareClass.length; i++){
			squareClass[i].style.background='white';// after save all buttons background color beocome white
		}
	}else{
		alert("Please put an uppercase letter");
	}
	printletters.innerHTML="";
	let ArrOfObj=Object.keys(obj);
	for(let key of ArrOfObj){
			printletters.innerHTML+="<div>"+key+"</div><hr>";
	}
	console.log(obj)
})


display.addEventListener("click", function(){
	for(let i=0; i<changableArr.length; i++){
		for(let j=0; j<changableArr[i].length; j++){
			if(changableArr[i][j]==1){
			document.getElementById(i+'.'+j).style.background="white";	
			}
		}
	}
	changableArr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	letter=inputvalue.value;
	if(!obj.hasOwnProperty(letter)){
		alert("Letter is not created");
	}
	if(obj.hasOwnProperty(letter)){
		changableArr=JSON.parse(JSON.stringify(obj[letter]));
		changableArr=Object.values(changableArr);
		for(let i=0; i<changableArr.length; i++){
			for(let j=0; j<changableArr[i].length; j++){
				if(changableArr[i][j]==1){
					document.getElementById(i+'.'+j).style.background="black";
				}
			}
		}
	}
	letter="";
})


reset.addEventListener("click", function(){
	for(let i=0; i<changableArr.length; i++){
		for(let j=0; j<changableArr[i].length; j++){
			if(changableArr[i][j]==1){
			document.getElementById(i+'.'+j).style.background="white";	
			}
		}
	}
	inputvalue.value='';
    changableArr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
})