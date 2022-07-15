import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.scss";
import {updateData, updateFilter, useStore} from "../../store";
import {useEffect} from "react";
import {handleFilter} from "../../utils";
import {Row} from "../Table";

const OPTIONS = [
  {
    title: "Without posts",
  },
  {
    title: "More than 100 posts",
  },
];

export function Filters() {
  const [globalData, dispatch] = useStore();
  const {data, filters: selectedFilter, sortType} = globalData;

  const onChange = ({title}: {title: string}) => {
    console.log(title); // for debugging

    let updatedFilters;
    if (selectedFilter.find((filter: string) => filter === title)) {
      updatedFilters = selectedFilter.filter((filter) => filter !== title);
    } else {
      updatedFilters = [...selectedFilter, title];
    }

    updateFilter(dispatch, updatedFilters);
  };

  useEffect(() => {
    if (data.length && selectedFilter.length) {
      const newData = data.filter((element: Row) =>
        handleFilter(selectedFilter, element)
      );
      updateData(dispatch, newData, sortType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length, selectedFilter.length]);

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={
                !!selectedFilter.find((filter) => filter === option.title)
              }
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{" "}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
