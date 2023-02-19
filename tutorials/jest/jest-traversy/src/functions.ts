import axios from "axios";

export const functions = {
  add: (num1: number, num2: number): number => num1 + num2,
  isNull: () => null,
  checkValue: (x: any) => x,
  createUser: (firstname: string, lastname: string, age: number) => ({
    firstname,
    lastname,
    age,
  }),
  sumResultMax10: (num1: number, num2: number) =>
    num1 + num2 > 100 ? 100 : num1 + num2,
  fetchUser: (id: string) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      }),
  reverseString: (text: string) => text.split("").reverse().join(""),
};
