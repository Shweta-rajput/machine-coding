import { memo, useEffect, useState } from "react";
import "./progressBar.css";
import ProjectLayout from "../ProjectLayout";

const Bars = [4, 10, 20, 40, 50, 80];

const ProgressBar = memo(() => {
  return (
    <ProjectLayout
      title="Animated Progress Bar"
      description="A simple animated progress bar built with React."
      icon="📊"
    >
      <div className="progress-bars">
        {Bars?.map((item, i) => (
          <InnerBar progress={item} key={i} />
        ))}
      </div>
    </ProjectLayout>
  );
});

const InnerBar = ({ progress }) => {
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressVal(progress);
    }, 0);

    return () => [clearTimeout(timer)];
  }, []);

  return (
    <div className="bar-box">
      <div
        className="bar"
        role="progressbar"
        aria-valuenow={progressVal}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          // width: `${progressVal}%`,
          color: progressVal < 5 ? "#000" : "#fff",
          transform: `translateX(-${100 - progressVal}%)`,
        }}
      >
        {progressVal} %
      </div>
    </div>
  );
};

export default ProgressBar;
