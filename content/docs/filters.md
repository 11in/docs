---
title: Filters
eleventyNavigation:
    key: Filters
    parent: Documentation
    order: 3
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

:::note
This uses the same markdown configuration as 11ty does via `11ty/shared/markdown.js`
:::

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
