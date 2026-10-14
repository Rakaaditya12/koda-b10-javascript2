const koda = {
  we: {
    are: {
      the: {
        best: {
          koda: "koda",
        },
      },
    },
  },
};
console.log(koda.we.are.the.best);

const helloWorld = {
  world: "Hello World",
};
console.log(helloWorld.world);

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
  first: [16],
  second: [16],
};
console.log(num.first[0] + num.second[0]);
