---
title: Plugins
eleventyNavigation:
    parent: Documentation
    key: Plugins
    order: 6
---
Elfin comes packaged with several plugins.
To add (or remove) plugins, modify the `11ty/plugins/loader.js` file.

[[toc]]

## Cloudinary

This is the [`@11in/cloudinary`](/ecosystem/#cloudinary) plugin. 
See it's documentation for further details.

## Eleventy Navigation

A handle plugin for managing and generating navigation menus. 
For detailed usage information, see [its documentation](https://www.11ty.dev/docs/plugins/navigation/).

## Helmet

This can be very useful for conditionally modifying the `<head>`.
The [documentation](https://github.com/vseventer/eleventy-plugin-helmet#readme) provides a solid explanation, but usage looks like this:

```html
<!-- some layout -->
<meta name="description" content="A description specific to this page!"
      data-helmet />
```
```html
<!-- output -->
<head>
    <title>Site Title</title>
    ...
    <meta name="description" content="A description sepcific to this page!">
    ...
</head>
```
