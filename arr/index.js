const arr = [[1,{a:'abc',b:'abc'}], [2,{a:'pqr',b:'zas'}]];

const data = arr.map(([id, user])=>({id, ...user}));

console.log(data);