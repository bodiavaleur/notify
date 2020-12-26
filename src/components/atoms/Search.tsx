import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/actions";
import { SearchInput } from "../../ui/atoms";

export function Search() {
  const dispatch = useDispatch();

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchQuery(evt.target.value));

  return <SearchInput placeholder='Search' onChange={handleSearch} />;
}
