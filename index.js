// first
const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};
console.log(we.are.the.best);

// second
const hello = {
  world: "Hello World",
};
console.log(hello.world);

const obj = {
  str: [
    null,
    null,
    null,
    [
      null,
      [null, null, { man: [{ tech: { academy: "Tech Academy" } }, null] }],
    ],
  ],
};
console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [{ favorite: [null, undefined, null, { fruit: { is: "Apple" } }] }];
console.log(my[0].favorite[3].fruit.is);

const num = {
  first: [null, 16],
  second: [null, undefined, 16],
};
console.log(num.first[1] + num.second[2]);
