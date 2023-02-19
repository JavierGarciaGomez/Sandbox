import { functions } from "./functions";
import axios from "axios";
import { getRandomApi } from "./axios";

getRandomApi();

const getUser = async (): Promise<void> => {
  const data = await functions.fetchUser("1");
  console.log(data);
};

getUser();
