// Require the `escape_html` helper.
var escape_html = require('escape-html');

/**
 * A `JSON.stringify()` replacer method that escapes HTML entities.
 *
 * See: http://mzl.la/1HTcvVM
 * 
 * Example Usage:
 * 
 *   > var escape_html_entities = require('escape-html-in-json')
 *   undefined
 *   > var object = {name: "<script>alert('hacked');</script>"}
 *   undefined
 *   > JSON.stringify(object)
 *   '{"name":"<script>alert(\'hacked\');</script>"}'
 *   > JSON.stringify(object, escape_html_entities)
 *   '{"name":"&lt;script&gt;alert(&#39;hacked&#39;);&lt;/script&gt;"}'
 * 
 * @param {String} key
 * @param {Mixed} value
 * @param {String}
 */
module.exports = function(key, value) {
	return typeof value === 'string' ? escape_html(value) : value;
}