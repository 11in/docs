---
title: Markdown Engine
eleventyNavigation:
    parent: Scribe
    key: Markdown
    order: 1
---
Scribe customizes the output of the markdown engine a bit. 
It also sets this customized engine as the default engine for Eleventy, and uses it for the [markdown filters](#filters).

It outputs valid XHTML, enables the "typographer" option, and allows for HTML in your markdown input.

Additionally, it adds several "admonition" blocks, similar to the [concept in AsciiDoc](https://asciidoctor.org/docs/asciidoc-writers-guide/#admonitions). 
The admonitions available with Scribe are:

- note
- tip
- warning
- important

You can also add your own:

```js
eleventyConfig.addPlugin(require('@11in/scribe')({
    admonitions: [{ key: 'caution' }]
}))
```
