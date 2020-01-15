const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2);
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]

const b1 = [1,2,3];
const b2 = [4,5,6];
const b3 = b1.concat(b2, [7,8,9], 'Luiz');
console.log(b3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz' ]

// utilizando o spread
const c1 = [1,2,3];
const c2 = [4,5,6];
const c3 = [...c1, 'Luiz', ...c2, ...[7,8,9]];
console.log(c3); // [1,2, 3, 'Luiz', 4, 5, 6, 7, 8, 9]