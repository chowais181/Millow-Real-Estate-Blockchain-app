import { useState } from "react";

const Search = ({ parentCallBack }) => {
  const [srch, setSrch] = useState("");
  //   console.log(srch);
  return (
    <header>
      <h2 className="header__title">Search it. Explore it. Buy it.</h2>
      <input
        type="text"
        className="header__search"
        placeholder="Enter name"
        onChange={(e) => {
          setSrch(e.target.value);
          parentCallBack(e.target.value);
        }}
      />
    </header>
  );
};

export default Search;
