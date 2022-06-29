
let Btn=document.querySelectorAll(".btn")
let Screen =document.getElementById("screen")
let Calculate=document.getElementById("calculate")
for (let button of Btn){
  
button.addEventListener('click', function()   {
Screen.value+=this.value ;
    });
}

Calculate.addEventListener('click',function(){
    console.log(Screen.value);

    try{
        
        Screen.value = eval( Screen.value);
        
       }
       catch(e){
           alert("invalid");
       }

});



function Clear(){
    Screen.value="";
}
function del(){
    Screen.value=Screen.value.slice(0,-1);
}
    
    
    
    
    
    
    
    
    
    
    
    
    