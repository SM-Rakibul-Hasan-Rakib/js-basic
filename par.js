const school = 'RAJ UK Uttara Model school';

console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemIstry';

if(subject.toLocaleLowerCase() === book.toLocaleUpperCase()) {
  console.log('I am reading book aibar porikhai fatai demu'
  );
} else{
  console.log('hudai pora leka koira time pass kori');
}

const drink = ' water ';
const alcohol ='     pani    '
if (drink.toLocaleUpperCase() === alcohol.toUpperCase()){
  console.log('pani ar name life');
}else{
  console.log('pani ar kono name nai');
}