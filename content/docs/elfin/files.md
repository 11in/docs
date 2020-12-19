---
title: Files
eleventyNavigation:
    key: File Structure
    parent: Elfin
    order: 5
---

Part of Elfin is a specific file structure. 
Some of this is required by the build process(es); some of it is to help you organize your logic and your thoughts.
Here we're going to over some of the high-level concepts and some of the low-level details to help make sense of things.

[[toc]]

## Project

In the root of your Elfin projects, you'll see several directories:

- `11ty`
  Code that tells 11ty what to do.
- `elf`
  Plugins and configuration for [elf](/docs/elf/).
  (If you're not using elf, you can delete this one.)
- `assets`
  CSS and JavaScript
  (and other assets, i.e. images, that they might ingest).
- `site`
  The content and templates for the site.
  
There are also some files worth paying attention to.
These are used to configure the various parts of an Elfin site.

- `eleventy.config.js` 
  Configuration for Eleventy.
  For the most part, you won't do anything here--
  config that would go in this file should be refactored into `11ty/`.
- `elf.config.js`
  Configuration for [elf](/docs/elf).
  (If you're not using elf, you can delete this.)
- `tailwind.confg.js` 
  Configuration for Tailwind.
  For more information, see the [Tailwind documentation](https://tailwindcss.com/docs/configuration).
- `webpack.confg.js`
  Wrapper for Webpack configuration(s).
  The actual configurations are in `assets/build/`.

## 11ty

A sufficiently customized Eleventy project will often result in a very long main configuration file since out of the box there's no system for spread that configuration out.
Fortunately for you, Elfin has just such a system, and it's found in the 11ty directory!

There are several different directories here, but they can really be anything.
What's important is the pattern they follow.
It works like this:

- In every directory is a `loader.js` file.
- The `loader.js` file is responsible for loading every other file in its directory.
- When it loads each file, it passed the Eleventy configuration object to them.
- The top-level loader (`11ty/loader.js`) is finally `require`ed by `eleventy.config.js`.

In practice, that looks like this:

```js
// eleventy.config.js
module.exports = function (conf) {
  require('./11ty/loader')(conf);
  // ...
}
```
```js
// 11ty/loader.js
module.exports = conf => {
  require('./filters/loader')(conf)
}
```
```js
// 11ty/filters/loader.js
module.exports = conf => {
    conf.addFilter('do_the_thing', string => do_the_thing(string))
}
```

You can expand this to just about any configuration use-case.

:::note
Most things stored in `11ty/` are configuration related, but by convention there is one other directory: 
`11ty/shared/`.
This directory doesn't follow the loader convention:
Instead it serves as a repository for logic or components that need to be shared between other configuration logic--a Markdown configuration, for instance.
:::
