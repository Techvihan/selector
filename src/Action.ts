export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_ADDED = "todo added";
export const TODO_DELETE = "todo delete";
let nextId = 0;
export const addCreator = (todoText: string) => {
  return {
    type: TODO_ADDED,
    paylord: { id: ++nextId, texr: todoText, done: false },
  };
};
export const statusChangeCreator = (todoId: number, todoStatus: boolean) => {
  return { type: TODO_STATUS_CHANGE, paylord: { todoId, todoStatus } };
};
