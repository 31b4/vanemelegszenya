//---------------------------VANEMELEGSZENYA???--------------------------------

var zaras = [12,30]
var nyitas = [7,15]
vanE()




function vanE(){
    var p = document.createElement("p")
    var t = new Date();
    var h = t.getHours()
    var m = t.getMinutes()
    var dayOfWeek = t.getDay();
    var isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 3);
    if (isWeekend){
        p.innerHTML="nincs."
    }
    else if((h>zaras[0] || (h == zaras[0] && m >=zaras[1]))){
        p.innerHTML="nincs."
    }
    else if(h<nyitas[0] || (h==nyitas[0] && m <nyitas[1])){
        p.innerHTML="nincs."
    }
    else{
        p.innerHTML="van."
    }
    document.body.appendChild(p)
}