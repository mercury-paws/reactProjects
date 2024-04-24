import css from "./Feedback.module.css";
import clsx from "clsx";

export default function Feedback({ value, totalValues, positiveFeedback }) {
  return (
    <>
      <h3>Feedback </h3>
      <p>
        Good: <span className={css.good}>{value.good}</span>
      </p>
      <p>
        Neutral: <span className={css.neutral}>{value.neutral}</span>
      </p>
      <p>
        Bad: <span className={css.bad}>{value.bad}</span>
      </p>
      <p>Total: {totalValues}</p>
      <p>
        Positive Feedback:{" "}
        <span className={clsx(positiveFeedback > 60 ? css.good : css.bad)}>
          {positiveFeedback}%
        </span>
      </p>
    </>
  );
}
