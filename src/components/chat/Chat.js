import React, {useState} from "react";
import {connect} from "react-redux";

import { userMessage, botMessage } from "../../actions/botList";

const Chat = ({id,chat, userMessage, botMessage}) => {

  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      botMessage(id,message);
      setMessage("");
    }
  }
  

  return (<div className="chat">
    <h2>APEX LEGEND</h2>
    {chat.botList[id].length === 0 ? "" : chat.botList[id].messages.map((msg) => <div className={msg.type}>{msg.message}</div>)}
    <input 
      id="chatInput" 
      placeholder="Ecrivez"
      onChange={(e) => setMessage(e.target.value)} 
      onKeyPress={handleClick}
      value={message}></input>
  </div>)
}
const mapStateProps = state =>({
  chat: state
})

export default connect( mapStateProps, {userMessage, botMessage})(Chat);