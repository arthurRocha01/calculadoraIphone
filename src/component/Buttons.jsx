import { NumbersButtons } from "./NumbersButtons";

export const Buttons = ({
  handleDigitClick,
  handleOperatorClick,
  handleDecimalClick,
  handleClearScreen,
  handleMoreLess,
  handleEqual,
}) => {
  return (
    <div className="btn-container">
      <NumbersButtons
        className="btn-function"
        id="clear"
        value="ac"
        text="AC"
        onClick={handleClearScreen}
      />
      <NumbersButtons
        className="btn-function"
        id="ml"
        value="ml"
        text="+/-"
        onClick={handleMoreLess}
      />
      <NumbersButtons
        className="btn-function"
        id="porcetage"
        value="%"
        text="%"
        onClick={handleOperatorClick}
      />
      <NumbersButtons
        className="btn-operation"
        id="divide"
        value="/"
        text="/"
        onClick={handleOperatorClick}
      />
      <NumbersButtons
        className="btn-number"
        id="seven"
        value="7"
        text="7"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="eight"
        value="8"
        text="8"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="nine"
        value="9"
        text="9"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-operation"
        id="multiply"
        value="*"
        text="x"
        onClick={handleOperatorClick}
      />
      <NumbersButtons
        className="btn-number"
        id="four"
        value="4"
        text="4"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="five"
        value="5"
        text="5"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="six"
        value="6"
        text="6"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-operation"
        id="subtract"
        value="-"
        text="-"
        onClick={handleOperatorClick}
      />
      <NumbersButtons
        className="btn-number"
        id="one"
        value="1"
        text="1"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="two"
        value="2"
        text="2"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="three"
        value="3"
        text="3"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-operation"
        id="add"
        value="+"
        text="+"
        onClick={handleOperatorClick}
      />
      <NumbersButtons
        className="btn-number"
        id="zero"
        value="0"
        text="0"
        onClick={handleDigitClick}
      />
      <NumbersButtons
        className="btn-number"
        id="decimal"
        value="."
        text="."
        onClick={handleDecimalClick}
      />
      <NumbersButtons
        className="btn-number"
        id="equals"
        value="="
        text="="
        onClick={handleEqual}
      />
    </div>
  );
};