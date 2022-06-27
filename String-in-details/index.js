// const splitText = (str, length = 10) => {
//   if (typeof str !== typeof '') {
//     return null;
//   }
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = str.substr(startPosition, length);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += length;
//   }
//   return strArr.join('\n');
// };
// console.log(splitText('sdsfvmlsdssdsdmxzv', 4));
