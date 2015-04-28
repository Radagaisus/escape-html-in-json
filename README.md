# escape-html-in-json

Escape HTML entities in `JSON.stringify`, using a replacer method.

![https://nodei.co/npm/escape-html-in-json.png?downloads=true](https://nodei.co/npm/escape-html-in-json.png?downloads=true)

`npm install escape-html-in-json`


```javascript
> var escape_html_entities = require('escape-html-in-json')
> var object = {name: "<script>alert('hacked');</script>"}
> JSON.stringify(object)
'{"name":"<script>alert(\'hacked\');</script>"}'
> JSON.stringify(object, escape_html_entities)
'{"name":"&lt;script&gt;alert(&#39;hacked&#39;);&lt;/script&gt;"}'
```
