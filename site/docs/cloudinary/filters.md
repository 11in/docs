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

The `url` filter behaves essentially the same as the [shortcode](/docs/cloudinary/shortcodes), except
that it takes its parameters a bit differently:

{% raw %}
```html
{{ 'image.jpg' | img([{ width: 470 }]) }}
```
{% endraw %}

## extract

This will attempt to pull out various pieces of Cloudinary-specific data from the value it is given--typically a Cloudinary URL of some type.
The usefulness of this filter is probably limited:
The only time you might want to use it is if for some reason you are manually constructing a Cloudinary URL instead of using the plugin's shortcodes or filters.

It accepts a single additional argument, which is a string describing the "part" you wish to extract.
If it does not recognize the string, or you don't pass it one, it will default to returning the public ID.

The public ID will _always_ be returned;
the other parts are only available if they exist.
They will be `null` otherwise.

Available parts:

- `id` - The public ID for this resource.
- `cloud` - The "cloud name" for this Cloudinary account.
- `extension` - The file extension used in the source URL.
- `version` - Version of the asset on Cloudinary.
- `resource` - The type of resource (i.e. image, video, etc).
- `delivery` - How the asset was delivered to Cloudinary.

{% raw %}
```markdown
---
image:'https://res.cloudinary.com/cloud-name/image/upload/v1612446409/photo.png' 
---

{{ image | extract('id') }}
<!-- 'photo' -->

{{ image | extract('cloud') }}
<!-- 'cloud-name' -->

{{ image | extract('version') }}
<!-- '1612446409' -->
```
{% endraw %}
