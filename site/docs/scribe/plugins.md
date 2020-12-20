---
title: Plugins
eleventyNavigation:
    parent: Scribe
    key: Plugins
    order: 3
---

A lot of what Scribe provides is just bundling together pre-existing plugins.
They can all be configured individually, if you like.

[[toc]]

## Eleventy

This just plug directly into Eleventy.
If you want only a few of these, you can skip Scribe and install them yourself!

- [`eleventy-plugin-syntaxhighlight`](https://www.11ty.dev/docs/plugins/syntaxhighlight/) - Provides, obviously, syntax highlighting.
    On its own it provides on the HTML--for the visual effect you'll need to add the appropriate CSS.
- [`eleventy-plugin-footnotes`](https://github.com/HugoGiraudel/eleventy-plugin-footnotes) - This gives you some tools for generating nice, accessible footnotes.
- [`eleventy-plugin-reader-bar`](https://github.com/thigoap/eleventy-plugin-reader-bar) - Provides a shortcode for adding a "progress" bar while reading through a page.


## Markdown

These plug into `markdown-it`, a JavaScript-based markdown renderer
(in fact it's the renderer Eleventy uses internally).

In addition to these plugins, Scribe [applies some other customizations](/docs/scribe/markdown/) to the markdown engine.

- [`markdown-it-anchor`](https://github.com/valeriangalliat/markdown-it-anchor) - Gives your headings anchors so they can be linked to.
- [`markdown-it-toc-done-right`](https://github.com/nagaozen/markdown-it-toc-done-right) - This gives you the `[[toc]]` tag which can be inserted into your markdown files to generate a simple table of contents from their headings.
    Uses `markdown-it-anchor`.
- [`markdown-it-container`](https://github.com/markdown-it/markdown-it-container) - This provides a generic "container" system for wrapping blocks of content in Markdown.
    Scribe uses it for its  "Admonitions" feature, but you can also use it for anything else you like.
- [`markdown-it-emoji`](https://github.com/markdown-it/markdown-it-emoji) - Add the capability to use emoji shortcodes instead of the emoji themselves.
    i.e. `:elf:` is rendered as :elf:!
