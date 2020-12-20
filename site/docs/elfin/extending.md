---
title: Extending
eleventyNavigation:
    key: Extending
    parent: Elfin
    order: 1
---

11ty is extremely flexible and can be configured to do a whole lot of
things. The [Configuration
API](https://www.11ty.dev/docs/config/#using-the-configuration-api) is
behind most of this flexibility. While you can (and should) read through
the above document and get started right away, Elfin includes a
framework for structuring your configurations in a way that makes the
easier to see and analyze, and doesn’t crowd up your 11ty config file.

This framework can be used (or expanded) for any use of the
Configuration API, but the following example demonstrates how to use it
for adding a filter.

1.  Create a `.js` file for your new filter in `11ty/filters/`. i.e. if
    you’re making an `uppercase` filter you might create
    `11ty/filters/uppercase.js`. The name doesn’t matter, but it helps
    make your code more readable.

2.  In your new file, add the following:

    ```js
    module.exports = conf => {}
    ```

    `conf` is an object we pass through from elsewhere that contains the
    [11ty Configuration
    API](https://www.11ty.dev/docs/config/#using-the-configuration-api). 

3. Using the Configuration API, add your filter inside of the method
    body we just defined:

    ```js
    module.exports = conf => {
        conf.addFilter('uppercase', function(string) {
            return string.toUpperCase();
        });
    }
    ```

4.  Now we need to let the rest of 11ty know about the filter. Open up
    `11ty/filters/index.js`, and add the following:

    ```js
    module.exports = conf => {
        // ...
        require('./uppercase')(conf);
    };
    ```

    (The name used in `require('./uppercase')` is the filename you created in step #1.)

5. Use your filter in a template, i.e.
    {% raw %}`{{ some_variable | uppercase }}`{% endraw %}!
