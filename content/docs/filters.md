---
title: Filters
eleventyNavigation:
    key: Filters
    parent: Documentation
    order: 3
---

11ty makes use of [filters](https://www.11ty.dev/docs/filters/) which
are a way to modify content on the fly in your templates.

Currently, Elfin ships with only one filter, which is entirely useless
and exists only to demonstrate how to add and use custom filters. If
you’d like to add your own filters, checkout out [Extending
11ty](extending.adoc).

[[toc]]

## example_filter

This filter is useless: All it does is reverse whatever string is passed
to it.
{% raw %}
```html
    {{ 'hello' | example_filter }}
    <!-- olleh -->
```
{% endraw %}
