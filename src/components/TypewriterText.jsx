/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";

const TypewriterText = ({ toRotate, period = 2000 }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(150);
    }
  }, [loopNum, isDeleting, text, period, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <span className="inline-block text-white">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-white/90 ml-1.5 animate-pulse align-middle -mt-1" />
    </span>
  );
};

export default TypewriterText;
