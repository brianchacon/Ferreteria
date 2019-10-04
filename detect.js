var intervalId = null;
var varCount = 0;
var elemsList=['h','a','s','c'];
function detect(){
    let doc = document.getElementById("home");
    let selected = 'h';    
    let rect = doc.getBoundingClientRect();
    //window.innerHeight
    if(rect.top+rect.height-rect.height/3<0){//que haya pasado un 2/3 del objeto
        doc = document.getElementById("about");
        rect = doc.getBoundingClientRect();
        if(rect.top+rect.height-rect.height/3 >= 0)
            selected = 'a';
        else{
            doc = document.getElementById("serv");
            rect = doc.getBoundingClientRect();
            if(rect.top+rect.height-rect.height/3 >=0)
                selected = 's';
            else
                selected = 'c';
        }
    }
    
    for(let i=0;i<elemsList.length;i++){
        if(selected == elemsList[i])
            document.getElementById('a'+elemsList[i]).style.color ='aqua';    
        else
            document.getElementById('a'+elemsList[i]).style.color ='white';
    }
        
   /* else if()
        tres.style.color ="red";
    else if() 
        home.style.color ="red"; */      
}

function auto_detect(){
    if(varCount < 50){
        varCount++
        detect();
    }
    else{
        clearInterval(intervalId);
        console.log("STOPPED");
    }    
}

function loop(){
    intervalId =setInterval(auto_detect,1000);    
}
