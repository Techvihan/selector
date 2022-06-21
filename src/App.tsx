import { FC, useState } from "react";
import { CompleteTodoList, InCompleteTodoList } from "./Components/TodoList";
import H3 from "./H3";

const App: FC = () => {
  return (
    <div className="ml-4">
      <H3 className="mt-4 ">Things to do</H3>
      <CompleteTodoList />
      <H3 className="my-4">Things to done</H3>
      <InCompleteTodoList />
    </div>
  );
};

export default App;
