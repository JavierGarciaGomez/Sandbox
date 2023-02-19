import axios from "axios";
import { Todo } from "./interfaces";

const fetchData = async (id: number): Promise<Todo> => {
  console.log("called");
  const results = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};

const forEach = (items: number[], callback: jest.Mock<any, [x: any], any>) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x: number): number => 42 + x);

  forEach([5, 3], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);

  // calling the parameter of the first
  expect(mockCallback.mock.calls[0][0]).toBe(5);

  expect(mockCallback.mock.calls[1][0]).toBe(3);

  expect(mockCallback.mock.results[0].value).toBe(47);
});

it("return mock", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("A string");

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("A string");
});

describe("mock modules or custom functions", () => {
  it("fetches data and returns the correct value", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: {
        id: 1,
        title: "Do youtube",
      },
    } as any);

    const results = await fetchData(1);

    expect(results.title).toBe("Do youtube");
  });
});
