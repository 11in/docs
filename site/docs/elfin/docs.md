---
title: Elfin
foretitle: Documentation for
permalink: /docs/elfin/
eleventyNavigation:
    parent: Documentation
    key: Elfin
    order: 1
---

[[toc]]

## What Do I Get

- Fast dev with Webpack dev server and hot module reloading
- Delivers modern JS to modern browsers, and shitty JS to shitty browsers
- Tailwind! 2.0!
- Minimizes and optimizes CSS and JS
- Lossless compression of images (jpg, png, svg) used in CSS or JS
- Uses webpack's cache to speed up builds (if you're on Netlify, it automatically caches the cache there!)
- A handy [CLI](/docs/elf/), if you want it

## How Do I Use It

- `npm run build` - Builds the entire site into the `dist` directory
- `npm run deploy` - Run a production build (use this when deploying).
- `npm run dev` - Builds, watches, and serves the site at https://localhost:900

::: warning
Because there are essentially two "builds" that happen here (11ty and Webpack) there is a bit of _file shuffling_ that goes on.
**If a directory or file is in `.gitignore` then it is probably part of that shuffling, and you should leave it alone.** i.e. `content/_build/`, etc.
:::

## Resources

- A lot of what this package does is based on [this article](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) and [this repo](https://github.com/philipwalton/webpack-esnext-boilerplate) that implements the article's advice.
- There is a potential issue w/ the above technique where scripts are loaded twice.
    [This article](https://jasonformat.com/modern-script-loading/) offers some ways to defeat that, depending on the context.
    Currently Elfin doesn't implement any of these solutions, but it could.
- The optimizations to the build process that allow for pretty speedy CSS rebuilds are pulled straight from [this article](https://nystudio107.com/blog/speeding-up-tailwind-css-builds) which was based on [this github issue](https://github.com/tailwindlabs/tailwindcss/issues/2820).
