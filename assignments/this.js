/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If no rules are applied to 'this' keyword then it defaults to window object unless 'strict mode' is enabled then its undefined
 * 2. Implicit binding is used when using dot notation and binds this to the object calling it.
 * 3. New binding is used when creating a "new" object and binds this to the object being created.
 * 4. Explicit binding is used when either .call(), .apply(), or .bind() is used to 'explicitly' bind the 'this' keyword.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// 'use strict'; <- this is for strict mode and will return undefinded if no rules applied to 'this'

function windowBind() {
  console.log(this);
}

windowBind();

// Principle 2

// code example for Implicit Binding

const implicitBind = {
  implicit: 'implicit',
};

console.log(implicitBind.implicit);

// Principle 3

// code example for New Binding

function Bind(property) {
  this.property = property;
}

const NewBind = new Bind('new bind');
console.log(NewBind.property);

// Principle 4

// code example for Explicit Binding

function ghost() {
  console.log(this.boo);
}

const ghostOne = {
  boo: 'Boo One',
};

const ghostTwo = {
  boo: 'Boo Two',
};

ghost.call(ghostOne);
ghost.call(ghostTwo);
