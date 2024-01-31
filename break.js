const num = [23, 43, 54, 68, 90, 21];
// for (let i of num) {
//   console.log(i);
//   if(i === 68) {
//     break;
//   }
// }

for (let item of num) {
  if (num % 2 ===0) {
    continue;
  }
  console.log(num);
}