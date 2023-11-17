import React from "react";
import { useState } from "react";

export const SearchOrder = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Success!!!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
