import {useEffect} from "react";
import {StyledEngineProvider} from "@mui/material/styles";

import {Table, Filters, Sort, Search} from "./components";
import styles from "./App.module.scss";
import {getData} from "./utils";
import {useStore} from "./store";

// mockedData has to be replaced with parsed Promises’ data

function App() {
  const [globalData, dispatch] = useStore();
  const {data, filters, sortType} = globalData;

  useEffect(() => {
    // fetching data from API
    getData(sortType, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.length]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        <Table rows={data} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
