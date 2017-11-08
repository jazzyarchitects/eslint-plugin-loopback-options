# eslint-plugin-eslint-loopback-options

Checks if options argument is passed to write functions

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-loopback-options`:

```
$ npm install eslint-plugin-loopback-options --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-loopback-options` globally.

## Usage

Add `loopback-options` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "loopback-options"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "loopback-options/rule-name": 2
    }
}
```



