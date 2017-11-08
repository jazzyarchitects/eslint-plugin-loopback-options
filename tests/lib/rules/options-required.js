/**
 * @fileoverview Options is a required argument in write functions
 * @author Jibin Mathews
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/options-required'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
});

var ruleTester = new RuleTester();

ruleTester.run('options-required', rule, {
  valid: [
    'ticket.save(options)',
    'Model.create({}, options)',
    'Model.create(objName, options)',
    'async () => { await ticket.save(options) }',
    'async () => { await Model.create({}, options)}',
    'async () => { await Model.create(objName, options) }',
  ],

  invalid: [
    {
      code: 'async () => { await ticket.save() }',
      errors: [
        {
          message: 'Options should be passed to save() function',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'async () => { await Model.create(modelObj) }',
      errors: [
        {
          message: "'options' should be the last argument passed to create() function",
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'ticket.save()',
      errors: [
        {
          message: 'Options should be passed to save() function',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: 'Model.create(modelObj)',
      errors: [
        {
          message: "'options' should be the last argument passed to create() function",
          type: 'CallExpression',
        },
      ],
    },
  ],
});
