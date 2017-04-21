const test = require('tape')
const entries = require('./')

test(`Does it work`, t => {
	t.deepEqual(entries({ a: 1, b: 2 }), [ [ 'a', 1 ], [ 'b', 2 ] ])

	const o = { a: 1, b: 2 }
	delete o.a
	o.a = 3

	t.deepEqual(entries(o), [ [ 'b', 2 ], [ 'a', 3 ] ])

	t.end()
})
