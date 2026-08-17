import { useEffect, useState } from "react";
import ProjectLayout from "../ProjectLayout";
import "./index.css";

const BubbleSortRepresentaion = () => {
  const [sortedArray, setSortedArray] = useState([]);
  const [swapping, setSwapping] = useState([]);

  const delay = (ms = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async (arr) => {
    let n = arr.length;

    setSortedArray([...arr]);
    await delay();

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setSwapping([j, j + 1]);
        setSortedArray([...arr]);

        await delay();

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setSortedArray([...arr]);

          // Keep them highlighted after swapping
          setSwapping([j, j + 1]);

          await delay();
        }
      }
    }
    setSwapping([]);
  };

  useEffect(() => {
    bubbleSort([64, 34, 25, 12, 22, 11, 90, 1, 84]);
  }, []);

  return (
    <ProjectLayout
      title="Bubble Sort Representation"
      description="Visual representation of the Bubble Sort algorithm."
      icon="🔄"
    >
      <div className="bubble-sort-representation">
        <div className="bars-container">
          {sortedArray?.map((ele, i) => (
            <div
              className={`bar-wrapper ${
                swapping.includes(i) ? "is-swapping" : ""
              }`}
              key={i}
            >
              <div className="swap-label"></div>

              <div
                className="bar"
                style={{
                  height: `${ele * 2}px`,
                }}
              >
                {ele}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default BubbleSortRepresentaion;
