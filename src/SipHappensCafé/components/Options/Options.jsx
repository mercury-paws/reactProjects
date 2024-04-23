export default function Options({ handleClick, reset }) {
  return (
    <>
      <h3>Options</h3>
      <button onClick={() => handleClick("good")} type="button" name="good">
        Good
      </button>
      <button
        onClick={() => handleClick("neutral")}
        type="button"
        name="neutral"
      >
        Neutral
      </button>
      <button onClick={() => handleClick("bad")} type="button" name="bad">
        Bad
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </>
  );
}
