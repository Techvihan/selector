import { State } from "../store";

export const completeTodoSelector = (s: State) => [];
export const incompleteTodoSelector = (s: State) => {
  console.log(s);
  return [];
};
