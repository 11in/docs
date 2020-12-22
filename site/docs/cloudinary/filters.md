---
title: Filters
eleventyNavigation:
    parent: Cloudinary
    key: Filters
    order: 2
---

Filters take in a value, do something to it, and return it.
They’re especially useful because they can be strung together to run several operations on a value in sequence.

:::important
This plugin is primarily intended for use with nunjucks (or `.njk`) templates.
The filters are defined as universal, and should work in Liquid and 11ty.js templates, but haven’t been tested.
:::

## url

The `url` filter behaves essentially the same as the shortcode, except
that it takes its parameters a bit differently:

{% raw %}
```html
{{ 'image.jpg' | img([{ width: 470 }]) }}
```
{% endraw %}
