import * as actionType from "./actionTypes";
import { getPosts } from "./fixtures";

export function receiveData(payload) {
  return {
    type: actionType.RECEIVE_DATA,
    payload: getPosts()
  };
}

export function updatePost() {
  return {
    type: actionType.UPDATE_POST
  };
}

export function setConnection() {
  return {
    type: actionType.SET_CONNECTION
  };
}
