// Create variables with different types
const arrayVariable = [1, 2, 3];
const stringVariable = 'Hello, World!';
const numberVariable = 42;
const objectVariable = { key: 'value' };

// Use isArray to check if each variable is an array
const isArray1 = Array.isArray(arrayVariable);
const isArray2 = Array.isArray(stringVariable);
const isArray3 = Array.isArray(numberVariable);
const isArray4 = Array.isArray(objectVariable);

// Print messages to the console based on whether each variable is an array
console.log('Variable 1 is an array:', isArray1); // true
console.log('Variable 2 is an array:', isArray2); // false
console.log('Variable 3 is an array:', isArray3); // false
console.log('Variable 4 is an array:', isArray4); // false