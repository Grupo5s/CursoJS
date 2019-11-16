function fizzBuzz(n){
  if(typeof n !== 'number') return NaN;
  if(n % 3 === 0 && n % 5 === 0) return 'divisível por 3 e 5 FizzBuzz';
  if(n % 3 === 0) return 'divisível por 3 Fizz';
  if(n % 5 === 0) return 'divisível por 5 Buzz';
  return n
}

for(let i = 0; i <= 100; i++){
  console.log(`${i} = ` + fizzBuzz(i));
}

