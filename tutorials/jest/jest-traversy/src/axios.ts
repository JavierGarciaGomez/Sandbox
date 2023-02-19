import axios from "axios";

export const getRandomApi = () =>
  axios
    .get("https://api.publicapis.org/random")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
