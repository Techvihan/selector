import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { statusChangeCreator, TODO_STATUS_CHANGE } from "../Action";
import TodoModel from "../Models/TodoModel";
import { State } from "../store";
import { connect } from "react-redux";
import { completeTodoSelector, incompleteTodoSelector } from "./selector";

import TodoRow from "./TodoRow";
type Props = {
  todos: TodoModel[];
  onStatusChange: (id: number, done: boolean) => void;
};
const TodoList: FC<Props> = ({ todos, onStatusChange }) => {
  // const dispatcher = useDispatch();
  // const onHandelChange = (id: number, done: boolean) => {
  //   dispatcher({ type: TODO_STATUS_CHANGE, payload: { id, done } });
  // };
  return (
    <>
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t} onStatusChange={onStatusChange} />
      ))}
    </>
  );
};
TodoList.defaultProps = {};
export default memo(TodoList);

const completeMapper = (s: State) => ({ todos: completeTodoSelector(s) });

const inCompleteMapper = (s: State) => ({ todos: incompleteTodoSelector(s) });

const dispatchMapper = { onStatusChange: statusChangeCreator };

export const CompleteTodoList = connect(
  completeMapper,
  dispatchMapper
)(TodoList);

export const InCompleteTodoList = connect(
  inCompleteMapper,
  dispatchMapper
)(TodoList);
