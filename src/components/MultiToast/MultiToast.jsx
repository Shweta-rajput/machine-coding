import { useState } from "react";
import "./MultiToast.css";
import ProjectLayout from "../ProjectLayout";

const MultiToast = () => {
  const [toasts, setToasts] = useState([]);

  const handleButtonClick = () => {
    const id = Date.now();

    setToasts((prev) => [...prev, id]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toastId) => toastId !== id));
    }, 5000);
  };

  return (
    <ProjectLayout
      title="Multi Toast"
      description="Practice managing multiple toast notifications."
      icon="🍞"
    >
      <div className="multi-toasts">
        <>
          <section id="center">
            <div className="hero">
              <h2>Multi Toast on Multi clicks</h2>
            </div>

            <button
              type="button"
              className="counter"
              onClick={handleButtonClick}
            >
              Hey click me to see the toast
            </button>
          </section>

          <section id="toasts">
            {toasts.map((toastId) => (
              <div key={toastId} className="toast">
                This is a toast message!
                <div className="close-toast">
                  <div className="loader"></div>
                  <span className="close-btn">x</span>
                </div>
              </div>
            ))}
          </section>

          <div className="ticks"></div>
          <section id="spacer"></section>
        </>
      </div>
    </ProjectLayout>
  );
};

export default MultiToast;
