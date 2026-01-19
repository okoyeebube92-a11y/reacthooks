import React from "react";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
