import { createStore, Reducer } from "redux";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "./Action";
import TodoModel from "./Models/TodoModel";

export type State = {
  todos: TodoModel[];
};

const initialState: State = {
  todos: [],
};

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;
      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    case TODO_ADDED: {
      const todo: TodoModel = action.paylord;
      return { ...state, todos: [...state.todos, todo] };
    }
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
