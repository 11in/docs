---
title: Cloudinary
foretitle: Documentation for 
permalink: /docs/cloudinary/
eleventyNavigation:
    key: Cloudinary
    parent: Documentation
    order: 10
---
This provides some shortcodes and filters for generating Cloudinary
URLs.

[[toc]]

## Usage

Since the shortcodes this plugin provides are pretty generically named,
it’s recommended that you namespace them:

```js
conf.namespace('cl_', () => {
    conf.addPlugin(cloudinary)
})
```

## Configuration

The plugin accepts several configuration options.

-   `name` - This is the cloud name for your Cloudinary account.
    You must either pass a value here, or set the [`CLOUDINARY_URL` environment variable](https://cloudinary.com/documentation/node_integration#configuration).

-   `transforms` - **optional**
    This is a set of transforms that will be applied to *all* images generated by the plugin.
    It assumes an array in the manner of the `transformation` argument on the [node SDK](https://cloudinary.com/documentation/node_integration).
    (The node SDK powers most of what this plugin does.)

-   `defaults` - **optional**
    Adjust the defaults for various settings in the plugin.

    - `width` - **optional** The fallback width used for an image if the plugin isn’t given one.
      Defaults internally to `768` if no value is given.