module.exports = function orderedEntries(o) {
	return Object.getOwnPropertyNames(o).map(function(key) {
		return [ key, o[key] ]
	})
}
