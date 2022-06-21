import { FC, memo, useCallback } from "react";
import cn from "classnames";
import TodoModel from "../Models/TodoModel";
type Props = {
  todo: TodoModel;
  onStatusChange: (id: number, done: boolean) => void;
};
const TodoRow: FC<Props> = ({ todo, onStatusChange }) => {
  const { title, done, id } = todo;
  const handelChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);
  return (
    <>
      <div className="flex items-center">
        <input
          className=""
          checked={done}
          type="checkbox"
          onChange={handelChange}
        ></input>
        <p className={cn("ml-2", { "line-through": done })}>{title}</p>
      </div>
    </>
  );
};
TodoRow.defaultProps = {};
export default memo(TodoRow);
