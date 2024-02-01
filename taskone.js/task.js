const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Manually reversing the array
function reverseArray(arr) {
  const length = arr.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Swap elements from the beginning and end
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

const reversedColors = reverseArray(colors);
console.log(reversedColors);
