---
title: Filters
eleventyNavigation:
    key: Filters
    parent: Elfin
    order: 2
---

11ty makes use of [filters](https://www.11ty.dev/docs/filters/) which are a way to modify content on the fly in your templates.

If you’d like to add your own filters, checkout out [Extending 11ty](extending.adoc).

[[toc]]

### md

Render a markdown-formatted string into HTML.

{% raw %}
```html
    {{ "This is a **markdown** string" | md }}
    <!-- <p>This is a <strong>markdown</strong> string</p> -->
```
{% endraw %}

{% source 'Scribe', 'filter', '/docs/scribe/markdown/' %}

### md_inline

Essentially identical to [md](#md), but doesn't wrap paragraphs in `<p>` tags.

_Usually_ you don't want this, but it can be useful in situations where you want **bold** or _italic_ text, or links, but don't want the additional markup/styling of a `<p>`
(i.e. `figcaption`).

{% raw %}
```html
    {{ "This is a **markdown** string" | md_inline }}
    <!-- This is a <strong>markdown</strong> string -->
```
{% endraw %}

{% source 'Scribe', 'filter', '/docs/scribe/markdown/' %}

### cl_url

Generates a url to an asset on Cloudinary.
You can pass arguments to it that are equal to transforms as described in Cloudinary's Node SDK.

{% raw %}
```html
{{ 'image.jpg' | img([{ width: 470 }]) }}
```
{% endraw %}

{% source 'Cloudinary', 'filter', '/docs/cloudinary/filters/#url' %}
