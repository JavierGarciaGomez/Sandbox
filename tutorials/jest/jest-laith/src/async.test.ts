import { fetchData } from "./async";
import { Todo } from "./interfaces";

it("should return correct todo", () => {
  fetchData(1).then((todo: Todo) => {
    expect(todo.id).toBe(1);
    expect(todo.userId).toBe(1);
    expect(todo.completed).toBe(false);
  });
});

it("should return correct todo", async () => {
  const todo = await fetchData(1);

  expect(todo.id).toBe(1);
});
