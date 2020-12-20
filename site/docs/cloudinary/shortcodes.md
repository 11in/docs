---
title: Shortcodes
eleventyNavigation:
    parent: Cloudinary
    key: Shortcodes
    order: 3
---
Shortcodes are kind of like functions—they take in some arguments and return a string.

For these shortcodes, pass arguments as a JS object:

{% raw %}
```html
{% cl_image { path: 'folder/image.jpg', transforms: 'w_400' } %}
```
{% endraw %}

This allows us to allow for many arguments without requiring all of them to be specified.

:::tip
Set up commonly-used sets of arguments in your frontmatter or elsewhere so you can easily reuse them!
:::

[[toc]]

## url

This will return a url, appropriately constructed.

**Arguments**

-   `path` - This is the path on cloudinary to the item you want, i.e. `folder/image.jpg`

-   `transforms` - Any transforms you’d like to apply to this item.

## image

This will return an entire image element.

**Arguments**

-   `path` - This is the path on cloudinary to the item you want, i.e. `folder/image.jpg`

-   `transforms` - Any transforms you’d like to apply to this item. These transforms will be applied to all urls in this image (the `src` and `srcset`).

-   `alt` - The alt tag on the image.
    While technically optional, you _should_ set one.

-   `title` - The title tag on the image.

-   `size` - The base size for this image.

-   `sizes` - A string describing the sizing.

-   `srcset` - Either a string (which will be reproduced as-is) or an array of integers, which will be used as widths.

-   `css` - This would normally be called `class` but JavaScript doesn’t like that.
    A list of classes for this element.

-   `attrs` - Any other HTML attributes you want on this element, pass as an array of arrays.
    For boolean attributes, just use an array with a single value.
