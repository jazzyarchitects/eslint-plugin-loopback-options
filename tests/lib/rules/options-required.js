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

var ruleTester = new RuleTester();
ruleTester.run('options-required', rule, {
  valid: ['ticket.save(options)', 'Model.create({}, options)', 'Model.create(objName, options)'],

  invalid: [
    {
      code: 'ticket.save()',
      errors: [
        {
          message: 'Options should be passed to save() function',
          type: 'ExpressionStatement',
        },
      ],
    },
    {
      code: 'Model.create(modelObj)',
      errors: [
        {
          message: "'options' should be the last argument passed to create() function",
          type: 'ExpressionStatement',
        },
      ],
    },
  ],
});
