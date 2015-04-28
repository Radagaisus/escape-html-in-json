assert = require 'assert'
escape_html_entities = require('../index')

describe 'escape-html-in-json', ->

	it 'works', ->
		# Our test object, to be escaped
		object = {name: "<script>alert('hacked');</script>"}
		# Its stringified representation, after using `escape_html_entities` as the
		# replacer method for it
		stringified = JSON.stringify(object, escape_html_entities)
		# The expected result
		expected = '{"name":"&lt;script&gt;alert(&#39;hacked&#39;);&lt;/script&gt;"}'
		# Check that today has been a good day
		assert.equal stringified, expected

