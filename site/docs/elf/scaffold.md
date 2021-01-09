---
title: Scaffold 
eleventyNavigation:
  key: Scaffold 
  parent: Elf 
  order: 1
---
Scaffold is used to generate extensions to Elfin, like filters, collections, etc.

:::note
`scaffold` can also be called in its short form--`scf`.
:::

[[toc]]

## Options

- `--stub`, `-s`

  All the scaffolds that ship with Elf include their own stub files. 
  If these aren't doing what you want, this option allow you to specify your own custom stub file.

  Stubs use [mustache.js](https://github.com/janl/mustache.js/) for templating. 
  All options and arguments passed to the command are also passed to the template when it is rendered, allowing for significant customization. 
  That means you can do something like this:

  ```js
  // custom.stub
  {% raw %}console.log('{{ custom_arg }}'){% endraw %}
  ```

  ```shell
  $ elf scaffold filter example_filter --stub ./custom.stub --custom_arg 'Hello there'
  ```

  ```js
  // filters/example_filter.js
  console.log('Hello there')
  ```
  `--stub` expects a string that is a path to your file.

- `--open`, `-o`

  When this option is passed to a scaffold command, it wil attempt to open the relevant file(s) once they have been created. 
  Whether or not this works is somewhat dependent on what editor you use and how it was installed.
  
:::note
Individual scaffolds can also define their own options, but the ones above are available to every scaffold.
:::
  
## Scaffolds

### filter

Creates an [11ty filter](https://www.11ty.dev/docs/filters/)
(specifically a Universal Filter).

```shell
$ elf scaffold filter new_filter
$ elf scf filter new_filter
$ elf scf filter new_filter --stub ~/filter.stub --custom-argument 'custom value' -o
```

### shortcode

Create an [11ty shortcode](https://www.11ty.dev/docs/shortcodes/)
(specifically a Universal Shortcode).

```shell
$ elf scaffold shortcode new_shortcode
$ elf scf shortcode new_shortcode
$ elf scf shortcode new_shortcode --stub ~/shortcode.stub --custom-argument 'custom value' -
```

### collection

Creates an [11ty collection](link:https://www.11ty.dev/docs/collections/).
You can optionally pass an argument to `--glob` to define the glob used to collect files, i.e. `elf scaffold collection ships --glob 'ships/**/*.md'`.
If you don't, the collection generated will get all files.

**Options**
- `--glob`, `-g`

  This allows you to specify a string that will be inserted into the template as the [glob used to select files](https://www.11ty.dev/docs/collections/#getfilteredbyglob(-glob-)) when building the collection.

```shell
$ elf scaffold collection new_collection
$ elf scf collection new_collection
$ elf scf collection new_collection --stub ~/collection.stub --custom-argument 'custom value' -o --glob 'new/**/*.md'
```

### generator

Creates a [generator](/docs/elf/generate/) for Elf, but defined in your project's `elf.config.js`.

:::important
Part of the generator stub is used itself to generate stubs;
this means that we need to [set custom delimiters](https://github.com/janl/mustache.js/#setting-in-templates) so that it can contain {%raw%}`{{ }}`{% endraw %} without them being evaluated.

See [generator.stub](https://github.com/11in/elf/blob/main/cmds/scaffold/stubs/generator.stub) for an example.
:::

**Options**
- `--desc`

  A string that will be used as the description of the command.

- `--singular`

  Used as the singular name of the entry.

  i.e. If the name of your collection is `blog`, you might want single entries to be `post`: `elf scf generate blog --singular post`.

```shell
$ elf scaffold generate new_generator
$ elf scf generate new_generator
$ elf scf generate new_generator --stub ~/generator.stub --custom-argument 'custom value' -o --desc "A new collection" --singular "single"
```
