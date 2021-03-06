import { SearchInput, SearchBtn } from "./searchBoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchBox = (props: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  value:string
}) => {
  return (
    <div style={{width:"fit-content"}}>
      <SearchInput placeholder="Search..." onChange={props.onChange} value={props.value}/>
      <SearchBtn onClick={props.handleClick} aria-label="Search">
        <FontAwesomeIcon icon={faSearch} />
      </SearchBtn>
    </div>
  );
};

export default SearchBox;
