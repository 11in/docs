---
title: Shortcodes
eleventyNavigation:
    key: Shortcodes
    parent: Elfin
    order: 2
---

11ty makes use of [shortcodes](https://www.11ty.dev/docs/shortcodes/),
which are essentially re-usable bits defined at the generator level.

::: tip
For re-usable pieces of code defined at the template level, take a look
at [Nunjucks
"macros."](https://mozilla.github.io/nunjucks/templating.html#macro)
:::

Elfin comes with a number of shortcodes built in that you might find
helpful. If you’d like to add your own shortcodes, check out [Extending
11ty](extending.adoc).

[[toc]]

## asset_image

Get the path to an image file that’s tracked as part of our assets.

For instance, if you put an image in `assets/images/dog.jpg`, you can do
the following to get its path:

{% raw %}
```html
<img src="{% asset_image assets, 'dog.jpg' %}" />
<!-- <img src="images/dog-4ccafcc9a11e688e7e3c.jpg" /> -->
```
{% endraw %}

The point of this is that it will return the slightly modified path and
content hash that are created by the build process.

## asset_inline

This will return the content of an asset file. Primarily this will be
useful for inlining SVGs (instead of treating them like traditional
images).

::: warning
This shortcode will not prevent you from attempting to inline files you
really shouldn’t inline, like JPGs or PNGs. It should also go without
saying, but **never inline user-provided files**!
:::

{% raw %}
```html
{% asset_inline assets, 'map.svg' %}
<!-- <svg><path d="M15.1517 4.7391L15.8936 ... ></svg> -->
```
{% endraw %}
