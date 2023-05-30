import React from "react";

export default function Filter({ search, handleChangeSearch }) {
  return (
    <>
      filter shown with <input value={search} onChange={handleChangeSearch} />
    </>
  );
}
