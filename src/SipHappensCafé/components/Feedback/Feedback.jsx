export default function Feedback({ value, totalValues, positiveFeedback }) {
  return (
    <>
      <h3>Feedback </h3>
      <p>Good: {value.good}</p>
      <p>Neutral {value.neutral}</p>
      <p>Bad {value.bad}</p>
      <p>Total: {totalValues}</p>
      <p>Positive Feedback: {positiveFeedback}</p>
    </>
  );
}
