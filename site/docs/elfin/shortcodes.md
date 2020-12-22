---
title: Shortcodes
eleventyNavigation:
    key: Shortcodes
    parent: Elfin
    order: 3
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
Elfin](/docs/elfin/extending/).

[[toc]]

## cl_url

This returns a properly-constructed Cloudinary URL for the asset passed as the argument.
Additional arguments can be passed as a JavaScript object to apply transforms.

{% source 'Cloudinary', 'shortcode', '/docs/cloudinary/shortcodes/#url' %}

## cl_image

This returns an entire image element for a Cloudinary asset.
The primary advantage is the ability to easily construct a responsive image by passing a few arguments.

{% source 'Cloudinary', 'shortcode', '/docs/cloudinary/shortcodes/#image' %}
