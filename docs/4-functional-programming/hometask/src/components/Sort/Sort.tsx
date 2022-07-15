import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import styles from "./Sort.module.scss";
import {sortData, updateData, useStore} from "../../store";
import {useEffect} from "react";

export function Sort() {
  const [globalData, dispatch] = useStore();
  const {data, sortType} = globalData;

  const handleChange = (value: string) => {
    console.log(value); // for debugging
    sortData(dispatch, value);
  };

  useEffect(() => {
    if (sortType) {
      updateData(dispatch, data, sortType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  );
}
