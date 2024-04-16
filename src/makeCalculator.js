'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(action, num) {
      action.call(this, num);

      return calculator;
    },
    add(num) {
      this.result += num;

      return calculator;
    },
    subtract(num) {
      this.result -= num;

      return calculator;
    },
    multiply(num) {
      this.result *= num;

      return calculator;
    },
    divide(num) {
      this.result /= num;

      return calculator;
    },
    reset() {
      this.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
