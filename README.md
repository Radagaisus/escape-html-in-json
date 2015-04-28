# escape-html-in-json

Escape HTML entities in `JSON.stringify`, using a replacer method.

```javascript
> var escape_html_entities = require('escape-html-in-json')
> var object = {name: "<script>alert('hacked');</script>"}
> JSON.stringify(object)
'{"name":"<script>alert(\'hacked\');</script>"}'
> JSON.stringify(object, escape_html_entities)
'{"name":"&lt;script&gt;alert(&#39;hacked&#39;);&lt;/script&gt;"}'
```
