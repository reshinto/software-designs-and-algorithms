import { User, Account, Image } from "../types";
import type {Row} from "./components"
import { updateData } from "./store";
import {getImages, getUsers, getAccounts} from "./mocks/api";

interface CombinedRow extends User, Account, Image {}

const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  // convert data
  return combineData(users, accounts, images).map((row: CombinedRow) => ({
    avatar: row.url,
    username: row.username,
    country: row.country,
    name: row.name,
    // assume payments from fetched data is always sorted by descending order
    lastPayments: row.payments[0]?.totalSum || 0,
    posts: row.posts,
  }));
};

const combineData = (users: User[], accounts: Account[], images: Image[]): CombinedRow[] => Object.values(images.concat(users as any, accounts as any).reduce((acc, x) => {
    acc[x.userID] = Object.assign(acc[x.userID] || {}, x);
    return acc;
  }, {}));

export const getData = (sortType: string, dispatch: Function) => {
  Promise.all([getImages(), getUsers(), getAccounts()]).then(
    ([images, users, accounts]: [Image[], User[], Account[]]) =>
      updateData(dispatch, dataConverter(users, accounts, images), sortType)
  );
}

enum FilterRules {
  WithoutPosts = "Without posts",
  MoreThan100Posts = "More than 100 posts",
}

enum SortRules {
  Desc = "desc",
  Asc = "asc",
}

enum SortBy {
  Posts = "posts"
}

const _handleSort = (data: Row[], _rules: Function, sortBy: string) => {
  const newData = [...data];

  return newData.sort((a: Row, b: Row) => _rules(a[sortBy], b[sortBy]));
}

const _sortRules = {
  [SortRules.Desc]: (a: any, b: any) => b - a,
  [SortRules.Asc]: (a: any, b: any) => a - b,
}

const sortRules = {
  [SortRules.Desc]: (data: Row[]) => _handleSort(data, _sortRules[SortRules.Desc], SortBy.Posts),
  [SortRules.Asc]: (data: Row[]) => _handleSort(data, _sortRules[SortRules.Asc], SortBy.Posts),
}

const filterRules = {
  [FilterRules.WithoutPosts]: (row: Row) => row.posts === 0 ? row : undefined,
  [FilterRules.MoreThan100Posts]: (row: Row) => row.posts >= 100 ? row : undefined,
}

export const handleSort = (data: Row[], sortType: string) => sortRules[sortType] ? sortRules[sortType](data) : data;

export const handleFilter = (filterOptions: string[], row: Row) => {
  for (const filter of filterOptions) {
    const result = filterRules[filter](row);
    if (result) return result;
  }
}

export const handleSearch = (search: string, data: Row) => (
    data.country.toLowerCase().includes(search.toLowerCase()) ||
    data.name.toLowerCase().includes(search.toLowerCase()) ||
    data.username.toLowerCase().includes(search.toLowerCase())
);
