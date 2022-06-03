//---------------------------VANEMELEGSZENYA???--------------------------------

var zaras = [10,30]//hour,min
var nyitas = [7,15]
let start = (nyitas[0] * 60) + nyitas[1];
let stop = (zaras[0] * 60) + zaras[1];
var stat = false
var t = new Date();
var h = t.getHours()
var m = t.getMinutes()
vanE()
var secondBetweenTwoDate = CalcSeconds();
MpKiir()
setInterval(function(){ 
    MpKiir()
}, 1000);
function MpKiir(){
    if (stat) {
        document.getElementById("mp").innerHTML=secondBetweenTwoDate +' mp múlva NEM kapható'
    }
    else{
        document.getElementById("mp").innerHTML=secondBetweenTwoDate +' mp múlva kapható'
    }
    secondBetweenTwoDate-=1
    if (secondBetweenTwoDate == 0) {
        window.location.reload();
    }
}

function CalcSeconds() {
    if(stat){//van
        console.log(Math.abs(stop-((h*60)+m)))
        return Math.abs(((stop-((h*60)+m))*60 )- t.getSeconds())
    }
    else{
        console.log(Math.abs(start-((h*60)+m)))
        return Math.abs(((start-((h*60)+m))*60)+ t.getSeconds())
    } 

}
function vanE(){
    var p = document.createElement("p")
    var dayOfWeek = t.getDay();
    var txt=''
    var isWeekend = (dayOfWeek === 6) || (dayOfWeek  === 0);
    if (isWeekend){
        txt="nincs. hetvege van"
    }
    else if((h>zaras[0] || (h == zaras[0] && m >=zaras[1]))){
        txt="nincs."
    }
    else if(h<nyitas[0] || (h==nyitas[0] && m <nyitas[1])){
        txt="nincs."
    }
    else{
        txt="van."
        stat =true
    }
    document.getElementById("van").innerHTML=txt+" (jelenleg 515ft, nem ajanlott venni)"
}
