let blacklist = ['anna','ayar','oleg'];
let name = prompt("ведите свое имя")
let filter = blacklist.includes(name)
do{
    if(filter){
     prompt("ведите свое имя")
          
    }
    else{
   alert("успех")
        break
    }
}
while(true){

}
let w=20

for(let i = 0; i %2==0 && i<=20 ;i = i+2){

console.log(i)
}