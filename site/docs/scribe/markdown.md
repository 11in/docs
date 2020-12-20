---
title: Markdown Engine
eleventyNavigation:
    parent: Scribe
    key: Markdown
    order: 1
---
Scribe customizes the output of the markdown engine a bit. 
It also sets this customized engine as the default engine for Eleventy, and uses it for the [markdown filters](/docs/scribe/filters/).

It outputs valid XHTML, enables the "typographer" option, and allows for HTML in your markdown input.

Additionally, it adds several "admonition" blocks, similar to the [concept in AsciiDoc](https://asciidoctor.org/docs/asciidoc-writers-guide/#admonitions). 

When writing your markdown, an admonition looks like this:

~~~markdown
:::tag
This is some text that I want to have added impact.
I can also use _markdown formatting_ here--
```
even code
```
:::
~~~


The admonitions available with Scribe are:

:::note
A `note` is an interesting observation or insight, but not necessarily something immediately useful.
:::

:::tip
A `tip` is an interesting and potentially useful digression on the current subject.
:::

:::warning
A `warning` describes something that, if ignored, could get the user into trouble.
:::

:::important
Something `important` is...important.
Something the user should be well aware if when moving forward.
:::

Of course, the meaning of these is whatever you want them to be:
The descriptions above are more like <span data-tip-html="<img src='/files/guidelines.gif'>">guidelines than actual rules</span>.
You can also add your own:

```js
eleventyConfig.addPlugin(require('@11in/scribe')({
    admonitions: [{ key: 'caution' }]
}))
```

The admonitions are provided through the `markdown-it-container` plugin.
