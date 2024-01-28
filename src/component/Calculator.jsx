import { useState, useEffect } from "react";

import { Buttons } from "./Buttons";
import { Display } from "./Display";

export const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [operator, setOperator] = useState("");
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");

  const handleDigitClick = (event) => {
    const clickedDigit = event.target.value;

    // Continua calculando as operações sem da um '='
    const isOperationProgress = operator;
    if (isOperationProgress) {
      let newResult;

      // Condições pra calcúlos específicos
      if (calculation.includes("*-+")) {
        newResult = eval(
          `eval( calculation.replace('*-+','+') + clickedDigit )`
        );
      } else if (calculation.includes("*+-")) {
        newResult = eval(
          `eval( calculation.replace('*+-','-') + clickedDigit )`
        );
      } else {
        newResult = eval(`eval( calculation + clickedDigit )`);
      }

      setResult(String(newResult));
    }

    const error = screen === "Error" || screen === "NaN";
    if (error) {
      setScreen("0");
    }

    // Verifica se o limite de dígitos foi excedido antes de adicionar um novo dígito
    const isDigitLimitExceeded = screen.length < (operator ? 25 : 12);
    if (isDigitLimitExceeded) {
      setScreen((prevScreen) =>
        prevScreen === "0" ? clickedDigit : prevScreen + clickedDigit
      );

      setCalculation((prevCalculation) =>
        prevCalculation === "0" ? clickedDigit : prevCalculation + clickedDigit
      );
    }
  };

  const handleOperatorClick = (event) => {
    const clickedOperator = event.target.value;

    let count = 0;
    // Itera a expressão calculation e adciona +1 a o count a cada sinal de operação
    [...calculation].map((digits) => {
      const operators = "+" && "-" && "*" && "/";
      digits === operators ? count++ : "";
    });

    const isMaxTwoOperators = count < 3 && screen !== "0";
    if (isMaxTwoOperators) {
      if (clickedOperator === "%") {
        setCalculation((prevCalculation) =>
          clickedOperator !== operator
            ? prevCalculation + "/100"
            : prevCalculation
        );

        setResult(
          calculation.length > 1 ? eval(result / 100) : eval(calculation / 100)
        );
      } else {
        setCalculation((prevCalculation) =>
          clickedOperator !== operator
            ? prevCalculation + clickedOperator
            : prevCalculation
        );
      }

      if (clickedOperator === "*") {
        setScreen((prevScreen) =>
          prevScreen === "0" ? prevScreen : prevScreen + "x"
        );
      } else {
        setScreen((prevScreen) =>
          prevScreen === "0" ? prevScreen : prevScreen + clickedOperator
        );
      }

      setOperator(screen === "0" ? "" : clickedOperator);
    }
  };

  const handleDecimalClick = () => {
    setScreen((prevScreen) =>
      prevScreen.includes(".") && !operator ? prevScreen : prevScreen + "."
    );

    setCalculation((prevCalculation) =>
      prevCalculation.includes(".") && !operator
        ? prevCalculation
        : prevCalculation + "."
    );
  };

  const handleDeleteOneDigit = () => {
    // Exlui o ultimo digito de screen e calculation
    const newScreen = screen.slice(0, -1);
    const newCalculation = calculation.slice(0, -1);

    if (screen.length > 1 && calculation.length > 1) {
      setScreen(newScreen);

      setCalculation(newCalculation);
    }
  };

  const handleClearScreen = () => {
    setScreen("0");
    setCalculation("");
    setOperator("");
    setResult("");
  };

  const handleMoreLess = () => {
    // Multiplica o número por menos -1, se tiver positivo fica negativo e vice-versa

    const invertedScreen = parseFloat(screen) * -1;
    setScreen(String(invertedScreen));

    const invertedCalculation = parseFloat(calculation) * -1;
    setCalculation(String(invertedCalculation));
  };

  const handleEqual = () => {
    try {
      // Condições pra calcúlos especícos
      let newCalculation;

      if (calculation.includes("*-+")) {
        newCalculation = eval(calculation.replace("*-+", "+"));
      } else if (calculation.includes("*+-")) {
        newCalculation = eval(calculation.replace("*+-", "-"));
      } else {
        newCalculation = eval(calculation);
      }

      if (screen !== "0") {
        setScreen(
          calculation.includes(".") && !operator
            ? calculation
            : String(newCalculation)
        );
        setCalculation(String(newCalculation));
      }

      setOperator("");
    } catch (error) {
      handleClearScreen();
      setScreen("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":

        case "5":
        case "6":
        case "7":
        case "9":
          handleDigitClick({ target: { value: key } });
          break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
          handleOperatorClick({ target: { value: key } });
          break;
        case ".":
          handleDecimalClick();
          break;
        case "Backspace":
          handleDeleteOneDigit();
          break;
        case "c":
          handleClearScreen();
          break;
        case "m":
          handleMoreLess();
          break;
        case "Enter":
          handleEqual();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // Depuração
  // console.log(`
  // operator: ${operator}
  // calculation: ${calculation}
  // screen: ${screen}
  // result: ${result}
  // `);

  return (
    <div className="container calculator">
      <Display screen={screen} result={result} />
      <Buttons
        handleDigitClick={handleDigitClick}
        handleOperatorClick={handleOperatorClick}
        handleDecimalClick={handleDecimalClick}
        handleClearScreen={handleClearScreen}
        handleMoreLess={handleMoreLess}
        handleEqual={handleEqual}
      />
    </div>
  );
};
