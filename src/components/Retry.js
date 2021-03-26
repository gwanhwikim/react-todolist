import React from "react";

const Retry = ({ deleteAll }) => {
  return (
    <div className="retryBox">
      <button className="retryButton" onClick={deleteAll}>
        Retry
      </button>
    </div>
  );
};

export default Retry;
