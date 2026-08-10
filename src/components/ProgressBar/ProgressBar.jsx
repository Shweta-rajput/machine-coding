import { memo, useEffect, useState } from "react";
import "./progressBar.css";
import ProjectLayout from "../ProjectLayout";

const Bars = [5, 10, 20, 40, 50, 80];

const ProgressBar = memo(() => {
  return (
    <ProjectLayout
      title="Animated Progress Bar"
      description="Progress bars with smooth fill animation."
      icon="📊"
    >
      <div className="progress-bars">
        {Bars.map((item) => (
          <InnerBar key={item} progress={item} />
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
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div
      className="bar-box"
      role="progressbar"
      aria-valuenow={progressVal}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="bar" style={{ width: `${progressVal}%` }}>
        <span>{progressVal}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
