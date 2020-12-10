---
title: Files
eleventyNavigation:
    key: File Structure
    parent: Documentation
    order: 5
---

To help you understand what everything in Elfin is doing, here's an explaination of the file structure!

```bash
elfin/                    # -> Your project directory
├── 11ty                  # -> Extensions to 11ty
│  ├── loader.js          # -> Collects filters, shortcodes, etc
│  ├── plugins/           # -> Load any necessary plugins
│  ├── filters/           # -> Add custom filters here
│  ├── shared/            # -> Collect shared functionality, i.e. markdown
│  ├── collections/       # -> Build your collections of content
│  └── shortcodes/        # -> Add custom shortcodes here
├── assets                # -> Assets that will be process by webpack
│  ├── entry.js           # -> Defines JS, CSS, for build process
│  ├── legacy.js          # -> Defines "legacy" build -- add polyfills here
│  ├── images/            # -> Images to be ingested by build process
│  ├── scripts/           # -> All your JavaScript
│  └── styles/            # -> All your CSS
├── content               # -> Files used by 11ty to build the site
│  ├── _data/             # -> 11ty global data files
│  ├── _includes/         # -> 11ty include, partials, etc
│  ├── _layouts/          # -> 11ty layouts
│  ├── assets/            # -> Used by build process ⚠️ don't touch!
│  └── index.njk          # -> Example template
├── dist/                 # -> Where the site is built to ⚠️ don't touch!
├── README.md             # -> Some basic documentation
├── package.json          # -> JavaScript Dependencies
├── eleventy.config.js    # -> 11ty configuration
├── elf.config.js         # -> elf cli configuration
├── postcss.config.js     # -> PostCSS configuration
├── tailwind.config.js    # -> Tailwind configuration
└── webpack.config.js     # -> Webpack configuration
```
