---
title: Redirects
eleventyNavigation:
  key: Redirects
  parent: Elfin
  order: 4
---

Oftentimes you’ll need to do either a permanent of temporary redirect of
a URL. The most common time for this is when transitioning from one URL
scheme to another.

If you’re using Elfin with [Netlify](https://netlify.com), it will
automatically generate a Netlify-compatible redirects file.

[[toc]]

## Types of redirects

Elfin has two types of redirects:

-   Canonical
-   Alias

**Canonical** redirects are permanent (i.e. they are 301 redirects) so
they are more suitable to the "moving to a new URL scheme" use-case.

**Alias** redirects are not (i.e. they are 302 redirects) so they are
more suitable to situations where you need some URL to point to an
already existing page for a while, but don’t want that redirect cached
long-term.

## Using redirects

The redirect system is based off of the idea that you have an entry
(i.e. a `.md` file) and you want other URLs to be redirect to the URL
for that entry.

If you want to use a Canonical redirect, then add the following to the
frontmatter of your entry:

```yaml
redirect: '/the/other/url'
# Arrays are also supported
redirect:
  - '/yet/another/url'
  - '/a/mysterious/url'
```

Alias redirects are done the same, but use the "Alias" key:

```yaml
alias: '/marketing/url/of/some/type'
# Or...
alias:
  - '/holiday/2020'
  - '/all/things/fade/in/time'
```

::: warning
Remember that 301 redirects are cached by the browser for a very long
time—potentially forever! Only set Canonical redirects when you’re very
certain you want them.
:::

::: important
The url(s) that you enter under `alias` or `redirect` are the **from**
urls, and the permalink of the item you put them on is the **to** url.
The redirect will go *from* the alias/cannonical redirect *to* the
permalink.
:::
