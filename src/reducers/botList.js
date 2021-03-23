import {INPUT_FAIL, MESSAGE_SUCCESS} from "../actions/types";

const intialState = {
  bots: {
    "1":{
      messages:[]
    },
   "2":{
      messages:[]
   },
   "3":{
      messages:[]
   },
  }
}

export default (state = intialState, action) =>  {
  const { type, payload } = action;
  console.log(payload)
  let { messages } = payload ? state.bots[payload.id].messages : [];

  switch(type){
    case INPUT_FAIL:
      return {
        ...state
      };
    case MESSAGE_SUCCESS:
      console.log(payload)
      messages = [...messages, {message: payload.msg, type:"bot"}]
      return {
        ...state,
        messages,
      }; 
    default: 
      return {
        ...state
      };
  }
}