# Options is a required argument in write functions (options-required)


## Rule Details

This rule aims to reduce code review time by showing warning whenever options argument has been ommitted

Examples of **incorrect** code for this rule:

```js

object.save();
Model.create(obj);

```

Examples of **correct** code for this rule:

```js

object.save(options);
Model.create(obj, options);

```
