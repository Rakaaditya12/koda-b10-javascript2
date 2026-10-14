## Membuat program untuk memunculkan string "Koda" ketika mengakses object

```
const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};
console.log(we.are.the.best);
```

## Membuat program untuk memunculkan string "Hello World" ketika mengakses objek

```
const hello = {
  world: "Hello World",
};
console.log(hello.world);
```

## Membuat array of object

```
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
```

## Membuat array dengan memunculkan string "Apple"

```
const my = [{ favorite: [null, undefined, null, { fruit: { is: "Apple" } }] }];
console.log(my[0].favorite[3].fruit.is);
```

## Memunculkan number 32 ketika kalkulasi

```
const num = {
  first: [null, 16],
  second: [null, undefined, 16],
};
console.log(num.first[1] + num.second[2]);
```
