import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d7403bc639e14cb9960269d26014cb3c",
  },
});
