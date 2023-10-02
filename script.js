  // JavaScript for the calculator functions
  let currentInput = '';
  let currentOperator = '';
  let resultDisplayed = false;

  function appendToResult(value) {
      if (resultDisplayed) {
          clearResult();
          resultDisplayed = false;
      }

      if (currentInput.length < 10) {
          currentInput += value;
          document.getElementById('result').value = currentInput;
      }
  }

  function clearResult() {
      currentInput = '';
      currentOperator = '';
      document.getElementById('result').value = '';
  }

  function calculateResult() {
      if (currentInput && currentOperator) {
          const inputValue = parseFloat(currentInput);
          const result = evaluate(currentOperator, inputValue);
          document.getElementById('result').value = result.toFixed(2);
          currentInput = result.toFixed(2);
          resultDisplayed = true;
      }
  }

  function evaluate(operator, value) {
      switch (operator) {
          case '+':
              return parseFloat(currentInput) + value;
          case '-':
              return parseFloat(currentInput) - value;
          case '*':
              return parseFloat(currentInput) * value;
          case '/':
              if (value === 0) {
                  return 'Error';
              }
              return parseFloat(currentInput) / value;
          default:
              return value;
      }
  }