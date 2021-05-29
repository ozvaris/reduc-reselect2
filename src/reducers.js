import { combineReducers } from "redux";
import * as actionType from "./actionTypes";

export const usersByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      const newState = { ...state };
      action.payload.users.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;

    default:
      return state;
  }
};

export const usersListingReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload.users.map((x) => x.id);
    default:
      return state;
  }
};

export const postsByIdReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "RECEIVE_DATA":
      action.payload.posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    case actionType.UPDATE_POST:
      //console.log(state);
      Object.keys(newState).forEach((key) => {
        if (key === "post-1" && newState[key].author === "user-1") {
          newState[key].title += "Updated";
        }
      });
      return newState;
    default:
      return state;
  }
};

export const postListingReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload.posts.map((x) => x.id);
    default:
      return state;
  }
};

export const devicesByIdReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "RECEIVE_DATA":
      action.payload.devices.forEach((device) => {
        newState[device.id] = device;
      });
      return newState;
    case actionType.SET_CONNECTION:
      //console.log(state);
      Object.keys(newState).forEach((key) => {
        if (key === "device-1") {
          newState[key].connectionState =
            newState[key].connectionState === "DISCONNECTED"
              ? "CONNECTED"
              : "DISCONNECTED";
        }
      });
      return newState;
    default:
      return state;
  }
};

export const deviceListingReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload.devices.map((x) => x.id);

    default:
      return state;
  }
};

export const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export default combineReducers({
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,

  postsById: postsByIdReducer,
  postListing: postListingReducer,

  devicesById: devicesByIdReducer,
  deviceListing: deviceListingReducer,
  count: counterReducer
});
