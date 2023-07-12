const input =document.getElementById("input")
const listI=document.getElementById("list")
let i=0
function Addtask(){
    console.log(input.value);
    if (input.value==""){
        alert("Please Enter a Task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=input.value;
        li.setAttribute("id",i)
        listI.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="<img src=del.png></img>";
        li.appendChild(span);
        let edit=document.createElement("p");
        span.setAttribute("class","delc")
        
        edit.innerHTML="<img src=edit.jpg></img>";
        li.appendChild(edit);
        edit.setAttribute("class","edit")
        console.log(listI);
        
        

    }
    input.value="";
    i+=1
    savedata()
}

listI.addEventListener("click",function(e){
    console.log(e.target.parentElement.tagName)
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.parentElement.tagName==="SPAN"){
        e.target.parentElement.parentElement.remove();
        savedata();
    
    }
    else if(e.target.parentElement.tagName==="P"){
        const ide=e.target.parentElement.parentElement.id;
        console.log("cc",ide)
        edittask(ide);
        savedata();
    }
},false);
 function savedata(){
      localStorage.setItem("data",listI.innerHTML);
      console.log("gty")

 }
 function showdata(){
    listI.innerHTML=localStorage.getItem("data")
   console.log( listI.innerHTML=localStorage.getItem("data"))

 }
 showdata()
 function edittask(ide){
    console.log(ide)

    var a = prompt("Enter task", "the javatpoint.com");
    var your_div = document.getElementById(ide);
    console.log("ff",your_div.childNodes[0])

var text_to_change = your_div.childNodes[0];

text_to_change.nodeValue = a;

    
}
