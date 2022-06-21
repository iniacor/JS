// put your code here
let sum = 0;
const end = 1000;
for (let start = 0; start <= end; start++){
    if(start % 2 === 1){
        console.log('Found')
        sum+=start;
    }
}
if(sum*5 > 5000){
    console.log('Bigger')
}else{
    console.log('Smaller or equal')
}
console.log(sum)
