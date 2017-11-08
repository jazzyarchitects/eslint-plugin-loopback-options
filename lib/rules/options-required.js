/**
 * @fileoverview Options is a required argument in write functions
 * @author Jibin Mathews
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Options is a required argument in write functions',
      category: 'Code',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function(context) {
    // variables should be defined here

    function validateExp(exp, node) {
      if (!(exp && exp.callee && exp.callee.property)) {
        return;
      }
      if (exp.callee.property.name === 'save' && exp.arguments.length === 0) {
        context.report(node, 'Options should be passed to save() function');
      }
      if (
        exp.callee.property.name === 'create' &&
        exp.arguments[exp.arguments.length - 1].name !== 'options'
      ) {
        context.report(node, "'options' should be the last argument passed to create() function");
      }
    }
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // ExpressionStatement: function(node) {
      //   if (node.expression && node.expression.callee) {
      //     var exp = node.expression;
      //     if (exp.callee.property.name === 'save' && exp.arguments.length === 0) {
      //       context.report(node, 'Options should be passed to save() function');
      //     }
      //     if (
      //       exp.callee.property.name === 'create' &&
      //       exp.arguments[exp.arguments.length - 1].name !== 'options'
      //     ) {
      //       context.report(
      //         node,
      //         "'options' should be the last argument passed to create() function",
      //       );
      //     }
      //   }
      // },
      CallExpression: function(node) {
        const memberExpression = node.callee;
        if (!(memberExpression && memberExpression.property)) {
          return;
        }
        if (memberExpression.property.name === 'save' && node.arguments.length === 0) {
          context.report(node, "'options' should be passed to save() function");
        }
        if (
          memberExpression.property.name === 'create' &&
          node.arguments[node.arguments.length - 1].name !== 'options'
        ) {
          context.report(node, "'options' should be the last argument passed to create() function");
        }
      },
    };
  },
};
