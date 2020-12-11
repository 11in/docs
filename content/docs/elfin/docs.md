---
title: Elfin
permalink: /docs/elfin/
eleventyNavigation:
    parent: Documentation
    key: Elfin
    order: 1
---

[[toc]]

## How Do I Use It

- `npm run build` - Builds the entire site into the `dist` directory
- `npm run all:production` - Run a production build (use this when deploying).
- `npm run serve` - Builds, watches, and serves the site at https://localhost:8080

::: warning
Because there are essentially two "builds" that happen here (11ty and Webpack) there is a bit of _file shuffling_ that goes on.
**If a directory or file is in `.gitignore` then it is probably part of that shuffling and you should leave it alone.** i.e. `content/assets/`, `content/_data/assets.json`, etc.
:::

## Resources

- A lot of what this package does is based on [this article](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) and [this repo](https://github.com/philipwalton/webpack-esnext-boilerplate) that implements the article's advice.
- There is a potential issue w/ the above technique where scripts are loaded twice.
    [This article](https://jasonformat.com/modern-script-loading/) offers some ways to defeat that, depending on the context.
    Currently Elfin doesn't implement any of these solutions, but it could.

