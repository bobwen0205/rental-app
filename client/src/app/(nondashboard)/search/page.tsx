import React, { Suspense } from "react";
import SearchPage from "./Search";

const Search = () => {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
