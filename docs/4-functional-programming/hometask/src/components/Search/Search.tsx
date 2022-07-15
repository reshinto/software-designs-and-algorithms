import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Search.module.scss";
import {searchData, updateData, useStore} from "../../store";
import {useEffect} from "react";
import {getData, handleSearch} from "../../utils";
import {Row} from "../Table";

export function Search() {
  const [globalData, dispatch] = useStore();
  const {data, search: searchedValue, sortType} = globalData;

  const onChange = (value: string) => {
    console.log(value); // for debugging
    searchData(dispatch, value);
  };

  useEffect(() => {
    if (searchedValue) {
      const newData = data.filter((element: Row) =>
        handleSearch(searchedValue, element)
      );
      updateData(dispatch, newData, sortType);
    } else {
      getData(sortType, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue]);

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
