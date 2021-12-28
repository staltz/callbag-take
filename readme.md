# callbag-take

Callbag operator that limits the amount of data sent by a source. Works on either pullable and listenable sources.

`npm install callbag-take`

## example

On a listenable source:

```js
const interval = require('callbag-interval');
const forEach = require('callbag-for-each');
const take = require('callbag-take');

const source = take(3)(interval(1000));

forEach(x => console.log(x))(source);    // 0
                                         // 1
                                         // 2
```

On a pullable source:

```js
const fromIter = require('callbag-from-iter');
const forEach = require('callbag-for-each');
const take = require('callbag-take');

function* range(from, to) {
  let i = from;
  while (i <= to) {
    yield i;
    i++;
  }
}

const source = take(4)(fromIter(range(100, 999)));

forEach(x => console.log(x))(source);    // 100
                                         // 101
                                         // 102
                                         // 103
```
