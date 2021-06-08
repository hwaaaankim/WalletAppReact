import axios from "axios";
import { GET_ERRORS, GET_WALLETS, DELETE_WALLET, GET_WALLET } from "./types.js";

export const createWallet = (newWallet, history) => async (dispath) => {
  await axios
    .post("/wallet", newWallet)
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

export const updateWallet = (id, updatedWallet, history) => async (dispath) => {
  await axios
    .put(`/wallet/${id}`, updatedWallet)
    .then((res) => {
      history.push("/dashboard");
    })
    .catch((err) => {
      dispath({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const getWallets = () => async (dispath) => {
  await axios.get("/wallet").then((res) => {
    // To do
    dispath({ type: GET_WALLETS, payload: res.data });
  });
};

export const getWallet = (id) => async (dispath) => {
  await axios.get(`/wallet/${id}`).then((res) => {
    // To do
    dispath({ type: GET_WALLET, payload: res.data });
  });
};

export const deleteWallet = (id) => async (dispath) => {
  await axios.delete(`/wallet/${id}`).then((res) => {
    dispath({ type: DELETE_WALLET, payload: id });
  });
};

//Transaction

export const createTransaction =
  (newTransaction, history, walletid) => async (dispath) => {
    await axios
      .post(`/transaction/${walletid}`, newTransaction)
      .then((res) => {
        console.log(res);
        history.push(`/transactions/${walletid}`);
      })
      .catch((err) => {
        dispath({ type: GET_ERRORS, payload: err.response.data });
      });
  };
