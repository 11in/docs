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
{% cl_img { path: 'folder/image.jpg', transforms: 'w_400' } %}
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

## img

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
    
::: warning
The `img` shortcode does only very elementary checks on your content to make sure it's "good." 
It does _not_ attempt to make it "safe," address XSS attack vectors, or even make sure you're generating valid HTML.
:::

:::important
The `img` shortcode is _not_ a wrapper for the Cloudinary SDK's `image` method.
It uses the SDK's `url` method to generate URLs, but gives additional options for specifying responsive attributes.
:::
