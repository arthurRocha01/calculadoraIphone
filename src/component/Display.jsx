export const Display = ({ screen, result }) => {
  const controlFontSize = screen.length < 14;
  const controlResult = result !== screen;
  return (
    <div className="outputScreen">
      <p id="display" style={{ fontSize: controlFontSize ? "50px" : "35px" }}>
        {screen}
      </p>
      {controlResult && <span id="calculation">{result}</span>}
    </div>
  );
};
