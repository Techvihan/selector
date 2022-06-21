import { connect } from "react-redux";
import { ChangeEvent, FC, memo, useState } from "react";
import { addCreator } from "../Action";
import { useFormik } from "formik";
type Props = {
  onSubmit: (todoText: string) => void;
};
const TodoCreator: FC<Props> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handelSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  
  return (
    <div className="space-x-4">
      <input
        className="p-2 border-2 rounded-md"
        value={inputValue}
        onChange={handelChange}
      />
      <button
        className="bg-yellow-500 px-4 py-2 text-white rounded-md"
        onClick={handelSubmit}
      >
        Submit
      </button>
    </div>
  );
};
TodoCreator.defaultProps = {};
export default connect(undefined, { onSubmit: addCreator })(memo(TodoCreator));
