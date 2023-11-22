export const NumbersButtons = ({ className, id, value, text, onClick }) => {
  return (
    <>
      <button className={className} id={id} value={value} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
