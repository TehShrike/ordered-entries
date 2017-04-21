A follyfill (lol) for `Object.entries`.

Like `Object.keys`, `Object.entries` is not required to reflect property order (which is a real thing since ES2015).

For a good summary, see this answer to [Does ES6 introduce a well-defined order of enumeration for object properties?](http://stackoverflow.com/a/30919039/201789)

This implementation uses `Object.getOwnPropertyNames`, which is required to respect property order.

```sh
npm i ordered-entries -S
```

<!--js
const orderedEntries = require('./')
-->

```js
orderedEntries({ a: 'yup', b: 'yarp' }) // => [ [ 'a', 'yup' ], [ 'b', 'yarp' ] ]
```

# License

[WTFPL](http://wtfpl2.com)
