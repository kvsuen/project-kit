import * as actionTypes from "../actions/types";
import { getUserEventCalender } from "../../services/calender";

const ACTION_SET_USER_EVENT_CALENDER = userId => {
  return async dispatch => {
    const userEvents = await getUserEventCalender(userId);
    dispatch({
      type: actionTypes.SET_USER_EVENT_CALENDER,
      payload: userEvents.data
    });
  };
};

export { ACTION_SET_USER_EVENT_CALENDER };
