import React from "react";

export const DetailsWrapper = ({ summary, children }) => {
  return (
    <details className="cursor-pointer">
      <summary>{summary}</summary>
      <div className="details-content">{children}</div>
    </details>
  );
};
