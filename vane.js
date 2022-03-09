var t = new Date();
var p = document.createElement("p")
p.style.textAlign="center"
console.log(t.getHours(), t.getMinutes())
if(t.getHours()>12 || t.getHours() == 12 && t.getMinutes()>=30){
    p.innerHTML="Nincs."
}else{
    p.innerHTML="Van."
}
document.body.appendChild(p)