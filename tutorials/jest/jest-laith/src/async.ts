import axios from "axios";

export const fetchData = async (id: number) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};
