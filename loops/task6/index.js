//Все рабочие варианты с разными выражениями для проверки кратности одновременно 2 и не крастной 4 в одном условии

const start = 1;
const end = 50;
let result = 0;
for(let num = start; num<=end; num++){
    if(num % 5 === 0)console.log(num)
    else if(num % 2 === 0 && num % 4){
        result+=num
        continue
    }
    else if(num % 3 === 0){
        result-=num
        continue
    }
    else if(num % 4 === 0){
        result*=num
    }
}
console.log(result);


// const start = 1;
// const end = 50;
// let result = 0;
// for(let num = start; num<=end; num++){
//     if(num % 5 === 0)console.log(num)
//     else if(num % 4 === 2){
//         result+=num
//         continue
//     }
//     else if(num % 3 === 0){
//         result-=num
//         continue
//     }
//     else if(num % 4 === 0){
//         result*=num
//     }
// }
// console.log(result);
// 5440774

// const start = 1;
// const end = 50;
// let result = 0;
// for(let num = start; num<=end; num++){
//     if(num % 2 === 0 && num % 4 !== 0)console.log(num)
// }
// console.log(result);

// const start = 1;
// const end = 50;
// let result = 0;
// for(let num = start; num<=end; num++){
//     if(num % 5 === 0)console.log(num)
//     else if(num % 2 === 0 && num % 4 !== 0){
//         result+=num
//         continue
//     }
//     else if(num % 3 === 0){
//         result-=num
//         continue
//     }
//     else if(num % 4 === 0){
//         result*=num
//     }
// }
// console.log(result);
