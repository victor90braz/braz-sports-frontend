import React from "react";
import SearchAutocompleteStyle from "./SearchAutocompleteStyle";

const SearchAutocomplete = () => {
  return (
    <SearchAutocompleteStyle>
      <label>
        Settings:
        <input list="settings" />
      </label>

      <datalist id="settings">
        <option value="perfil"></option>
        <option value="detail"></option>
        <option value="game"></option>
      </datalist>
    </SearchAutocompleteStyle>
  );
};

export default SearchAutocomplete;
