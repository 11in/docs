---
title: Make 11ty (More) Magical
eleventyNavigation:
    key: Home
    order: 1
layout: home.njk
---
[Elfin](/about) has traveled here from the Feywild to make building websites in 11ty a little bit easier.

It comes with a build process that compiles, transpiles, minfies, and otherwise -iles or -ifies your JS, CSS, and other sundry assets--but that's pretty standard these days.
Because modern JavaScript is much better than...immodern JavaScript, Elfin makes two JS builds for you:

- A modern, slim, exciting version for modern browsers
- A gross, ancient, polyfilled version for [gross, ancient browsers](https://en.wikipedia.org/wiki/Internet_Explorer_11)

Then it also serves only the necessary bundle to whatever browser your user happens to have.

There's a lot more it does as well, so check out the [:scroll: documentation](/docs/).

Ready to get started? 
Head over [GitHub](https://github.com/11in/) or pop of the command line and drop this:

```sh
$ git clone https://github.com/11in/elfin.git neat-new-site
```
