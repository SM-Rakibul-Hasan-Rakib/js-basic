const nums = [23, 43, 2, 5, 346, 203, 2]

sumOfOdd = 0;
sumOfEven = 0;

for(let i = 0; i <nums.length; i++){
  const x = nums[i];

  if(x % 2 ===1){
    sumOfOdd += x;
  }else {
    sumOfEvev += x;
  }
}
console.log(sumOfEven);