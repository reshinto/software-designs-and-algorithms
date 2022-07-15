import {createContext, useReducer, useContext} from "react";
import {Row} from "./components";
import {handleSort} from "./utils";

interface State {
  data: Row[];
  filters: string[];
  sortType: string;
  search: string;
}

interface Action {
  type: string;
  payload: Row[] | string[] | string;
}

const StoreContext = createContext(null);

const initialState = {
  data: [],
  filters: [],
  sortType: "",
  search: "",
};

enum actions {
  UPDATE_DATA = "UPDATE_DATA",
  UPDATE_FILTER = "UPDATE_FILTER",
  SORT_DATA = "SORT_DATA",
  SEARCH_DATA = "SEARCH_DATA",
}

export const updateData = (dispatch: Function, data: Row[], sortType: string) =>
  dispatch({
    type: actions.UPDATE_DATA,
    payload: handleSort(data, sortType),
  });

export const updateFilter = (dispatch: Function, filterOptions: string[]) =>
  dispatch({
    type: actions.UPDATE_FILTER,
    payload: filterOptions,
  });

export const sortData = (dispatch: Function, sortType: string) =>
  dispatch({
    type: actions.SORT_DATA,
    payload: sortType,
  });

export const searchData = (dispatch: Function, value: string) =>
  dispatch({
    type: actions.SEARCH_DATA,
    payload: value,
  });

function reducer(state: State, action: Action) {
  switch (action.type) {
    case actions.UPDATE_DATA:
      return {...state, data: action.payload};
    case actions.UPDATE_FILTER:
      return {...state, filters: action.payload};
    case actions.SORT_DATA:
      return {...state, sortType: action.payload};
    case actions.SEARCH_DATA:
      return {...state, search: action.payload};
    default:
      return state;
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = [state, dispatch];

  return <StoreContext.Provider value={data} {...props} />;
}

export function useStore() {
  return useContext(StoreContext);
}
