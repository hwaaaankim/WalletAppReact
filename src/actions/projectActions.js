import axios from "axios";
import { GET_ERRORS } from "./types.js";

export const createWallet = (newWallet, history) => async (dispath) => {
  await axios
    .post("http://localhost:8080/wallet", newWallet)
    .then((res) => {
      history.push("/dashboard");
    })
    .catch((err) => {
      //      console.log("gd" + err.response.data);
      dispath({ type: GET_ERRORS, payload: err.response.data });
    });

  // sync => wait
  // asycn => doesn't wait
};
