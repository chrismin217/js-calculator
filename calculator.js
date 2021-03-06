/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = (function() {

 var memory = 0;
 var total = 0; 

 function validate(x) {
  if(typeof x !== "number") {
    throw new Error(); //print an error message
  }
 }
 
 function load(x) {
  validate(x);
  total = x;
  return total;
 }

 function getTotal() {
  return total;
 }

 function add(x) {
  validate(x);
  total += x;
  return total;
 }

 function subtract(x) {
  validate(x);
  total -= x;
  return total;
 }

 function multiply(x) {
  validate(x);
  total *= x;
  return total;
 }

 function divide(x) {
  validate(x);
  total /= x;
  return total;
 }

 function recallMemory() {
  return memory;
 }

 function saveMemory() {
  memory = total;
 }

 function clearMemory() {
  memory = 0;
 }

 return calculator = {

  load: load,
  getTotal: getTotal,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  recallMemory: recallMemory,
  saveMemory: saveMemory,
  clearMemory: clearMemory,

 };

 });

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
 

  /**
   * Return the value of `total`
   * @return { Number }
   */
 

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
 

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */


  /**
   * Validation
   */

