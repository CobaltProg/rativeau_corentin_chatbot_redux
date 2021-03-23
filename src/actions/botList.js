import {INPUT_FAIL, MESSAGE_SUCCESS} from "./types";
import {BotList} from "../bot/Bot";

export const userMessage = (message) => (dispatch) => {
  dispatchEvent({ type: INPUT_FAIL});
}

export const botMessage = (id,messageToAnswer) =>(dispatch) => {
  dispatch({ type: MESSAGE_SUCCESS, payload: BotList(id,messageToAnswer)});
}