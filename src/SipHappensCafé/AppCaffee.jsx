import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

export default function AppCafee() {
  const initialValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(initialValues);

  const handleReviews = (name) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [name]: reviews[name] + 1,
    }));
    // console.log(
    //   "reviews:",
    //   reviews,
    //   "name:",
    //   name,
    //   "total:",
    //   totalFeedback + 1
    // );
  };

  const handleReset = () => {
    setReviews(initialValues);
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options handleClick={handleReviews} reset={handleReset} />
      {totalFeedback > 0 ? (
        <Feedback
          value={reviews}
          totalValues={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p>No Feedback yet</p>
      )}
    </>
  );
}
