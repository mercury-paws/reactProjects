import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

export default function AppCafee() {
  const initialReviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");
    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }
    return initialReviews;
  });

  const handleReviews = (name) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [name]: reviews[name] + 1,
    }));
    console.log(reviews);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleReset = () => {
    setReviews(initialReviews);
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round(
    (reviews.good / (reviews.good + 0.5 * reviews.neutral + reviews.bad)) * 100
  );

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
